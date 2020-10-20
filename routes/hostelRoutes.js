const express = require('express');
const router = express.Router();
const {getHostelDetails, addHostelDetails, deleteHostelDetailsbyId} = require('../controllers/hostelController');

router.get('/hostels', getHostelDetails);
router.post('/hostels', addHostelDetails);
router.delete('/hostels/:id', deleteHostelDetailsbyId);

module.exports = router;