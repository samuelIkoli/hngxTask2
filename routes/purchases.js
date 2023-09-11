const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const catchAsync = require('../utils/catchAsync')
const purchases = require('../controllers/purchases')

router.route('/purchases')
    .get(purchases.getAllPurchases)

router.route('/user/purchase')
    .post(purchases.getPurchase)
    .put(purchases.createPurchase)

router.route('/user/allpurchases')
    .post(purchases.getUserPurchases)

router.route('/pay')
    .post(purchases.makePayment)


router.route('/payment/verify')
    .post(purchases.paymentVerification)

router.route('/donate')
    .post(purchases.createDonation)



module.exports = router;