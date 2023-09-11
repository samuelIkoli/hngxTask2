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

module.exports.renderRegister = (req, res) => {
    const james = User.create({ fullName: 'james', id: "me" })
    res.send(james)
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports.get = async (req, res) => {
    const users = await User.findAll();
    return res.status(200).send(users)
}

module.exports.register = async (req, res) => {
    try {
        //get params from the request body
        const { email, name, username, password } = req.body
        //hash password and save to database
        const hash = await hashPassword(password);
        const check = await User.findOne({ email: email.toLowerCase() });
        if (check) {
            return res.status(400).send('user already exist')
        } else {
            const user = new User({ email: email.toLowerCase(), name, username, password: hash, isActive: false });
            await user.save();
            const user_id = user._id
            const link = `https://caritas-rho.vercel.app/verify/${user_id}`
            Mail(email, link)
            console.log(user);
            console.log(link);
            return res.send(user);
        }
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

module.exports.login = async (req, res) => {
    //get params from the request body
    const { email, password } = req.body;

    try {
        //find user in the database
        const user = await User.findOne({ email: email.toLowerCase() })

        if (user) {
            //check for username in database and ensure password matches, then grant access
            if (!(user.isActive)) { return res.status(400).json('activate your account by following the link in the email') }
            const check = await bcrypt.compare(password, user.password);
            console.log(check)
            if (check) {
                req.session.user_id = user._id
                req.session.user = user
                return res.status(200).send(req.session)
            } else {
                return res.status(400).json('wrong email or password')
            }
        } else {
            return res.status(400).json('email or password is incorrect')
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

module.exports.getProfile = async (req, res) => {
    const { email, name, username, password, phone, profile_pic, tokens, bankName, accountName, accountNumber, dob } = req.body
    console.log(req.body)
    const user = new User({ email, name, username, password, phone, profile_pic, tokens, bankName, accountName, accountNumber, dob });
    await user.save();
    res.send(user)
}

module.exports.check = async (req, res) => {
    const numbers = await Number.find({}).sort({ date: 'desc' }).exec();
    const num = numbers[0]
    return res.json(num)
}

module.exports.attempt = async (req, res) => {
    const attempt = parseInt(req.body.attempt)
    const numbers = await Number.find({}).sort({ date: 'desc' }).exec();
    const num = numbers[0]
    const answer = num.number
    return res.send(attempt === answer)
}

module.exports.editProfile = async (req, res) => {
    const { email, name, username, phone, profile_pic, bankName, accountName, accountNumber, dob } = req.body
    const id = req.session.user_id || req.body.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, { email, name, username, phone, profile_pic, bankName, accountName, accountNumber, dob });
        await updateUser.save();
        return res.status(200).send(updateUser)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports.changePassword = async (req, res) => {
    const password = req.body.password
    const id = req.session.user_id || req.body.id
    const hash = await hashPassword(password)
    try {
        const user = await User.findByIdAndUpdate(id, { password: hash });
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports.emailverify = async (req, res) => {
    const id = req.session.user_id || req.body.id
    try {
        const user = await User.findById(id)
        const { email } = user
        console.log("user is", user)
        const num = Math.floor(1000 + Math.random() * 9000)
        Mail(email, num)
        return res.status(200).json(num)
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }

}
module.exports.verify = async (req, res) => {
    console.log(req.params)
    const user_id = req.params.id
    try {
        const user = await User.findById(user_id)
        user.isActive = true
        await user.save()
        return res.status(200).send(user)
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}


module.exports.sendsms = async (req, res) => {
    let sms;
    res.send(sms)
}



exports.searchUser = async (req, res) => {
    const query = req.body.query;
    console.log(req.body);

    try {
        console.log(query)
        return await User.findAll({
            where: {
                [Op.or]: [
                    {
                        username: {
                            [Op.like]: `%${query}%`
                        }
                    },
                    {
                        name: {
                            [Op.like]: `%${query}%`
                        }
                    }
                ]
            },
            limit: 7
        })
            .then((resp) => {
                const { email } = user
                console.log("user is", user)
                const num = Math.floor(1000 + Math.random() * 9000)
                Mail(email, num)
                return res.status(200).json({ users: resp });
            })

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }

}




module.exports.session = (req, res) => {
    return res.status(200).send(req.session);
}

module.exports.logout = (req, res) => {
    req.session.destroy;
    return res.status(200).send('logged out');
}


