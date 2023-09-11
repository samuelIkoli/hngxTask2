const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')

router.route('/users')
    .get(users.getUsers)

router.route('/sample')
    .get(users.sample)

router.route('/api/:id')
    .get(users.getProfile)
    .put(users.editProfile)
    .post(users.delete)


router.post('/api', users.register)

module.exports = router;