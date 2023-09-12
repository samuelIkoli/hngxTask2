const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')

router.get('/', (req, res) => {
    return res.status(200).send('heya, I am working')
})

router.route('/users')
    .get(users.getUsers)

router.route('/sample')
    .get(users.sample)

router.route('/api/:user_id')
    .get(users.getProfile)
    .put(users.editProfile)
    .post(users.delete)


router.post('/api', users.register)

module.exports = router;