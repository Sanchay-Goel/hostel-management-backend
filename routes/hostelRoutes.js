const express = require('express');
const router = express.Router();
const {
    getHostelDetails, 
    addHostelDetails, 
    deleteHostelDetailsbyId, 
    getHostelDetailsById, 
    editHostelDetailsById, 
    addHostelStudentsList,
    getHostelStudentsList
} = require('../controllers/hostelController');

router.get('/hostels', getHostelDetails);
router.post('/hostels', addHostelDetails);
router.get('/hostels/:id', getHostelDetailsById);
router.put('/hostels/:id', editHostelDetailsById);
router.delete('/hostels/:id', deleteHostelDetailsbyId);
router.post('/hostels/students', addHostelStudentsList);
router.get('/hostels/students/:hostel', getHostelStudentsList);

module.exports = router;