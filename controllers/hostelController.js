const con = require('../config');
const SQL = require('sql-template-strings');
const {HostelDetails} = require('../Models/hostels/hostelDetailsModel');
const {HostelRooms} = require('../Models/hostels/hostelRoomsModel');
const {HostelStudentsList} = require('../Models/hostels/hostelStudentsListModel');
const { response } = require('express');
const { cond } = require('lodash');

module.exports.getHostelDetails =   async function(req, res){
    console.log("Sending all hostel details");
    HostelDetails.findAll()
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
    let hostel = {
        hostel_name: req.body.hostel_name,
        block_name: req.body.block_name,
        room_in_floor0: req.body.room_in_floor0,
        room_in_floor1: req.body.room_in_floor1,
        room_in_floor2: req.body.room_in_floor2,
        room_in_floor3: req.body.room_in_floor3,
        room_in_floor4: req.body.room_in_floor4,
        room_in_floor5: req.body.room_in_floor5,
        room_in_floor6: req.body.room_in_floor6,
        room_in_floor7: req.body.room_in_floor7,
        room_in_floor8: req.body.room_in_floor8,
        room_in_floor9: req.body.room_in_floor9,
        room_in_floor10: req.body.room_in_floor10,
        room_in_floor11: req.body.room_in_floor11,
        room_in_floor12: req.body.room_in_floor12,
        room_in_floor13: req.body.room_in_floor13,
        room_in_floor14: req.body.room_in_floor14,
        room_in_floor15: req.body.room_in_floor15,
    };
    await HostelDetails.create(hostel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while adding hostel'
            });
        });
};

module.exports.getHostelDetailsById = async function(req, res){
    console.log("Sending details of particular hostel");
    let hostelId = req.params.id;
    HostelDetails.findAll({
        where: {
            id: hostelId
        }
    })
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

module.exports.editHostelDetailsById = async function(req, res){
    console.log("Editing particular hostel details ");
    console.log(req.body);
    let id = req.params.id;
    HostelDetails.update({
        room_in_floor0: req.body.room_in_floor0,
        room_in_floor1: req.body.room_in_floor1,
        room_in_floor2: req.body.room_in_floor2,
        room_in_floor3: req.body.room_in_floor3,
        room_in_floor4: req.body.room_in_floor4,
        room_in_floor5: req.body.room_in_floor5,
        room_in_floor6: req.body.room_in_floor6,
        room_in_floor7: req.body.room_in_floor7,
        room_in_floor8: req.body.room_in_floor8,
        room_in_floor9: req.body.room_in_floor9,
        room_in_floor10: req.body.room_in_floor10,
        room_in_floor11: req.body.room_in_floor11,
        room_in_floor12: req.body.room_in_floor12,
        room_in_floor13: req.body.room_in_floor13,
        room_in_floor14: req.body.room_in_floor14,
        room_in_floor15: req.body.room_in_floor15,
    }, {
        where: {
            id: req.body.id
        }
    })
    .then(response => {
        res.status(200).json({
            response: response
        });
    })
    .catch(error => {
        res.status(404).json({
            error: error
        });
    });
    res.status(200).json({
        message: 'Put request'
    });
};

module.exports.deleteHostelDetailsbyId = async function(req, res){
    console.log("Delete hostel details by Id");
    let hostelId = req.body.id;
    console.log(hostelId);
    HostelDetails.destroy({
        where: {
            id: hostelId
        }
    })
    .then(response => {
        console.log("Deleted "+response);
        res.status(200).json(
            response
        )
    })
    .catch(error => {
        console.log("Error : "+error);
        res.status(404).json(
            response
        );
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
