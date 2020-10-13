const con = require('../config');
const SQL = require('sql-template-strings');
const {Hostel} = require('../Models/hostels/hostelModel');
const {HostelRooms} = require('../Models/hostels/hostelRoomsModel');
const {HostelInmates} = require('../Models/hostels/hostelInmatesModel');
const { response } = require('express');

module.exports.getHostelDetails =   async function(req, res){
    console.log("Sending all hostel details");
    Hostel.findAll()
        .then(response => {
            console.log(response);
            res.status(200).json({
                response: response
            });
        })
        .catch(error => {
            console.log("Error : " + error);
            res.status(404).json({
                error: error
            });
        });
};

module.exports.addHostelDetails = async function(req, res){
    console.log("Adding details of a hostel");
    console.log(req.body);
    res.status(200).json({
        message: 'Post request'
    });
};

module.exports.getHostelDetailsById = async function(req, res){
    console.log("Sending details of particular hostel");
    res.status(200).json({
        message: 'Get request'
    });
};

module.exports.editHostelDetailsById = async function(req, res){
    console.log("Editing particular hostel details");
    res.status(200).json({
        message: 'Put request'
    });
};

module.exports.deleteHostelDetailsby = async function(req, res){
    console.log("Delete hostel details by Id");
    res.status(200).json({
        message: 'Delete request'
    });
};

module.exports.getHostelFloors = async function(req, res){
    console.log("Sending all valid floors");
    res.status(200).json({
        message: 'Get request'
    });
};

module.exports.editRoomsDetails = async function(req, res){
    console.log("Edit rooms details for given hostel and floor");
    res.status(200).json({
        message: 'Put request'
    });
};

module.exports.addHostelInmate = async function(req, res){
    console.log("Adding student Adm. No. in particular hostel and block");
    res.status(200).json({
        message: 'Post request'
    });
};
