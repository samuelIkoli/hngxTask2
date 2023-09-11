const session = require('express-session');
const bcrypt = require('bcryptjs');
const express = require('express')
const User = require('../models/users')
const Winner = require('../models/winners')
const { hashPassword } = require('../utils/hashPassword')
const { Mail } = require('../utils/validate')

module.exports.getWinners = async (req, res) => {
    try {
        const winners = await Winner.find();
        res.status(200).send(winners)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports.createWinner = async (req, res) => {
    try {
        //get params from the request body
        const user_id = req.body.user_id || req.session.user_id
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).send('no user found')
        } else {
            const { email, name, username, phone, profile_pic, bankName, accountName, accountNumber, dob } = user
            const winner = new Winner({ user_id, email, name, username, phone, profile_pic, bankName, accountName, accountNumber, dob, isPaid: false });
            await winner.save();
            console.log(winner);
            console.log(req.session);
            return res.send(winner);
        }
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
}








