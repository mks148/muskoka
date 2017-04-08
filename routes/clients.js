/**
 * Created by Manoj on 04-Apr-17.
 */
var express = require('express');
var router = express.Router();

//require client model

var Clients = require('../models/myclient');
var passport=require('passport');

function checking(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

// GET /myclients/clientLanding
router.get('/clientLanding', checking, function(req, res, next) {
   res.render('myclients/clientLanding', {
      title: 'Add Edit Users',
       user: req.user
   });
});

router.get('/', function(req, res, next) {
    Clients.find(function(err, lists) {
        if (err) {
            console.log(err);
            res.end(err);
            return;
        }

        res.render('myclients/index', {
            lists:lists,
            title:"List",
            user: req.user
        });
    });
});


// adding the data to the table
router.get('/add', checking, function(req, res, next) {
    res.render('myclients/add',{
        title:"Add new clients",
        user:req.user

    });
});


router.post('/add', checking, function (req,res,next) {

    Clients.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        date: req.body.date,
        parentname: req.body.parentname


    },function(err) {
        if (err) {
            console.log(err);
            res.render('error');
            return;
        }
        res.redirect('/myclients');
    });
});

//to delete  the data from the table
router.get('/delete/:_id', checking, function(req, res, next) {

    Clients.remove({ _id: req.params._id }, function(err) {
        if (err) {
            res.render('error');
            return;
        }

        res.redirect('/myclients');
    });
});

router.get('/:_id', checking, function(req, res, next) {

    Clients.findById(req.params._id, function(err, list) {
        if (err) {
            console.log(err);
            res.render('error');
            return;
        }
        res.render('myclients/edit', {
            list: list,
            title:"Edit Clients Info",
            user:req.user
        });
    });
});

router.post('/:_id', checking, function (req,res,next)
{
    var client = new Clients({
        _id:req.params._id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        date: req.body.date,
        parentname: req.body.parentname


    });
    Clients.update({ _id: req.params._id }, client, function(err) {
        if (err) {
            console.log(err);
            res.render('error');
            return;
        }
        res.redirect('/myclients');
    });

});




module.exports=router;
