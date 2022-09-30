const express = require('express');
const UserController = require('../controllers/user');

const router = express.Router();

router.post('/signup', UserController.createUser);
router.post('/signin', UserController.userSignin);

module.exports = router;
