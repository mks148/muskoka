/**
 * Created by Tarun on 17-Apr-17.
 */
var express = require('express');
var router = express.Router();


var Camper = require('../models/camper');
var passport=require('passport');
function checking(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

// adding the data to the table
router.get('/login', checking, function(req, res, next) {
    res.render('camper/login',{
        title:"Camper Sign In",
        user:req.user
    });
});
router.post('/login', checking, function (req,res,next) {

    Camper.create({
        process: req.body.process,
        phone: req.body.phone,
        campername: req.body.campername,
        campername2: req.body.campername2,
        campername3: req.body.campername3,
        code: req.body.code,
        notes: req.body.notes


    },function(err) {
        if (err) {
            console.log(err);
            res.render('error');
            return;
        }
        res.redirect('/camper/login');
    });
});

// adding the data to the table
router.get('/camperout', checking, function(req, res, next) {
    res.render('camper/camperout',{
        title:"Camper Sign Out",
        user:req.user
    });
});
router.post('/camperout', checking, function (req,res,next) {

    Camper.create({
        process: req.body.process,
        phone: req.body.phone,
        campername: req.body.campername,
        campername2: req.body.campername2,
        campername3: req.body.campername3,
        code: req.body.code,
        notes: req.body.notes


    },function(err) {
        if (err) {
            console.log(err);
            res.render('error');
            return;
        }
        res.redirect('/camper/camperout');
    });
});
module.exports=router;
