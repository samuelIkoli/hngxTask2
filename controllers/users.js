const session = require('express-session');
const bcrypt = require('bcryptjs');
const express = require('express')
const User = require('../models/users')
const Number = require('../models/numbers')
// const { Op, where } = require('sequelize')
const { hashPassword } = require('../utils/hashPassword')
const { Mail } = require('../utils/validate');
const { trusted } = require('mongoose');
// const uniqid = require('uniqid');
// const { getHostEvent, getPurchaseFollow, has24HoursPassed } = require('../utils/getFriends');

module.exports.sample = (req, res) => {
    const user = User.create({ name: 'sam', hobbies: 'football', job: 'Developer', sex: 'Male', about: 'I like tech, anime and vide games. Girls too.' })
    res.send(user)
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports.getProfile = async (req, res) => {
    const user = await User.findById({ id });
    return res.status(200).send(user)
}

module.exports.register = async (req, res) => {
    try {
        //get params from the request body
        const { email, name, hobbies, job, about, sex } = req.body
        const user = new User({ name, hobbies, job, about, sex });
        await user.save();
        return res.send(user);
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

module.exports.editProfile = async (req, res) => {
    const { name, hobbies, job, about, sex } = req.body
    const id = req.session.user_id || req.body.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, { name, hobbies, job, about, sex });
        await updateUser.save();
        return res.status(200).send(updateUser)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports.delete = async (req, res) => {
    const user = await User.findByIdAndDelete({ id });
    return res.status(200).send(user)
}



