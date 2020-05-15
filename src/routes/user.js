const express = require('express');
const userContrl = require('../controllers/user');

const router = express.Router();
router.post('/signup', userContrl.signUp);

module.exports = router;
