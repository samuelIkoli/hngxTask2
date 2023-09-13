const express = require('express')
const User = require('../models/users')
const mongoose = require('mongoose');
// const mongo = require('mongodb')


module.exports.sample = async (req, res) => {
    const user = await User.create({ name: 'Hoselita Ikoli', value: 'Very much valuable, billionaire' });
    return res.send(user)
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports.getProfile = async (req, res) => {
    const name = req.params.user_id
    const user = await User.findOne({ name }).exec()
    return user ? res.status(200).send(user) : res.status(400).send('Can not find that user, CHECK SPELLING')
}

module.exports.register = async (req, res) => {
    try {
        //get params from the request body
        const { name, value } = req.body
        let user = new User({ name, value });
        user = await user.save();
        return res.send(user);
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

module.exports.editProfile = async (req, res) => {
    // const { name, value } = req.body
    const name = req.params.user_id
    try {
        const updateUser = await User.findOneAndUpdate({ name }, { ...req.body });
        return updateUser ? res.status(200).send(updateUser) : res.status(400).send('Either user is not in database or invalid field, CHECK SPELLING')
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports.delete = async (req, res) => {
    const name = req.params.user_id
    const user = await User.findOneAndDelete({ name });
    return user ? res.status(200).send(user) : res.status(400).send('User not found, delete unsuccessful, CHECK SPELLING')
}



