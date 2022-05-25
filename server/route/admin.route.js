const express = require('express');
const app = express();
const adminRoute = express.Router();
const admin = require('../models/patient');
const donor = require('../models/donor');

//add admin
adminRoute.route('/addPatient').post(function (req, res) {
    admin.create(req.body, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    });
});

//add donor
adminRoute.route('/addDonor').post(function (req, res) {
    donor.create(req.body, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    });
});

//get all patients
adminRoute.route('/getPatients').get(function (req, res) {
    admin.find(function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    });
});
//get all donors
adminRoute.route('/getDonors').get(function (req, res) {
    donor.find(function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    });
});

//delete donor
adminRoute.route('/deleteDonor/:id').delete(function (req, res) {
    donor.findByIdAndRemove(req.params.id,(err, data) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    }
    );
}
);
//delete patient
adminRoute.route('/deletePatient/:id').delete(function (req, res) {
    admin.findByIdAndRemove(req.params.id,(err, data) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    }
    );
}
);


module.exports = adminRoute;

