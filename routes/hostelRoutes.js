const express = require('express');
const router = express.Router();
const {getHostelDetails, addHostelDetails, deleteHostelDetailsbyId, getHostelDetailsById, editHostelDetailsById} = require('../controllers/hostelController');

router.get('/hostels', getHostelDetails);
router.post('/hostels', addHostelDetails);
router.get('/hostels/:id', getHostelDetailsById);
router.put('/hostels/:id', editHostelDetailsById);
router.delete('/hostels/:id', deleteHostelDetailsbyId);

module.exports = router;