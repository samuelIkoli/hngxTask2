const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const catchAsync = require('../utils/catchAsync')
const winners = require('../controllers/winners')


router.route('/winner')
    .post(winners.createWinner)
    .get(winners.getWinners)

module.exports = router;