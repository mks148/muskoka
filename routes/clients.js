/**
 * Created by Manoj on 04-Apr-17.
 */
var express = require('express');
var router = express.Router();
var Camper = require('../models/camper');

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
router.get('/landing', checking, function(req, res, next) {
  res.render('myclients/landing', {
     title: 'Admin Panel',
      user: req.user
  });
});


router.get('/', checking, function(req, res, next) {
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


//directory

router.get('/directory', checking, function(req, res, next) {
   Camper.find(function(err, signs) {
       if (err) {
           console.log(err);
           res.end(err);
           return;
       }
       res.render('myclients/directory', {
           signs:signs,
           title:"Camper Sign In/Out",
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
        parentname: req.body.parentname,
        parentlastname: req.body.parentlastname,
        phone: req.body.phone,
        campername: req.body.campername,
        campername1: req.body.campername1,
        campername2: req.body.campername2,
        notes: req.body.notes,
        medical: req.body.medical,
        code: req.body.code


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
        parentname: req.body.parentname,
        parentlastname: req.body.parentlastname,
        phone: req.body.phone,
        campername: req.body.campername,
        campername2: req.body.campername2,
        campername3: req.body.campername3,
        notes: req.body.notes,
        medical: req.body.medical,
        code: req.body.code


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
