const session = require('express-session');
const { Purchase } = require('../models/purchases')
const { Donation } = require('../models/donation')
const { User } = require('../models/users')
// const { Op } = require('sequelize')
// const uniqid = require('uniqid')
const dotenv = require('dotenv');

var paystack = require('paystack')('process.env.PAYSTACK_SECRET_KEY');



module.exports.getAllPurchases = async (req, res) => {
    const event = await Purchase.findAll();
    return res.send(event)
}

module.exports.getUserPurchases = async (req, res) => {
    const user_id = req.session.user_id || req.body.user_id;
    console.log(req.session)
    try {
        const event = await Purchase.findAll({ where: { user_id } });
        return res.send(event)
    } catch (error) {
        return res.send('sorry an error occured')
    }
}

module.exports.getPurchase = async (req, res) => {
    const id = req.body.purchase_id;
    console.log(id);
    try {
        const event = await Purchase.findOne({ where: { id } });
        return res.send(event)
    } catch (error) {
        return res.send('sorry an error occured')
    }
}

module.exports.createPurchase = async (req, res) => {
    const user_id = req.body.user_id || req.session.user_id
    const username = req.body.username || req.session.user.username
    const name = req.body.name || req.session.user.name
    const profile_pic = req.body.profile_pic || req.session.user.profile_pic
    const reference = req.body.reference || req.session.reference
    console.log("user_id is", user_id)
    try {
        const newPurchase = await Purchase.create({ user_id, username, email, name, amount, tokens, reference })
        const updateUser = await User.update({ tokens })
        res.send(newPurchase)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
module.exports.createDonation = async (req, res) => {
    const { user_id, email, name, amount, reference, anonymous } = req.body
    try {
        const newDonation = await Donation.create({ user_id, email, name, amount, tokens, reference, phone, anonymous })
        res.send(newDonation)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports.makePayment = async (req, res) => {
    const https = require('https')

    const { email, amount } = req.body;

    const params = JSON.stringify({
        "email": email,
        "amount": amount
    })

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        }
    }

    const reqPay = https.request(options,
        resPay => {
            let data = ''

            resPay.on('data', (chunk) => {
                data += chunk
            });

            resPay.on('end', () => {
                const details = JSON.parse(data)
                console.log('ref is', details.data.reference)
                res.send(details)
            })
        }).on('error', error => {
            console.error(error)
        })

    reqPay.write(params)
    reqPay.end()

};


module.exports.paymentVerification = async (req, res) => {
    const https = require('https')
    // 0tr5rj4j5c
    const reference = req.body.reference || req.session.reference;
    const path = `/transaction/verify/${reference}`
    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        }
    }
    // check res.data.status to check status of payment
    let result = https.get(options, response => {
        let data = ''

        response.on('data', (chunk) => {
            data += chunk
        });

        response.on('end', () => {
            const status = JSON.parse(data)
            console.log(status)
            res.send(status)
        })
    }).on('error', error => {
        console.error(error)
    })
};


// {
//     "status": true,
//     "message": "Authorization URL created",
//     "data": {
//         "authorization_url": "https://checkout.paystack.com/4gkeiyow7xg57y8",
//         "access_code": "4gkeiyow7xg57y8",
//         "reference": "txa6g214uk"
//     }
// }