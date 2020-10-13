const express = require('express');
const router = express.Router();
const {getHostelDetails, addHostelDetails} = require('../controllers/hostelController');

router.get('/hostels', getHostelDetails);
router.post('/hostels', addHostelDetails);

module.exports = router;