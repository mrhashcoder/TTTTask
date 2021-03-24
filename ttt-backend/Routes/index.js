const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

// Get Routes
router.get('/' , controller.getHome);


// Post Routes
router.post('/encode' , controller.postEncode);
router.post('/decode' , controller.postDecode)
