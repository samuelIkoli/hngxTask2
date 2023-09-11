const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    profile_pic: {
        type: String,
    },
    tokens: {
        type: Number,
    },
    free_trials: {
        type: Number,
    },
    bankName: {
        type: String,
    },
    accountName: {
        type: String,
    },
    accountNumber: {
        type: String,
    },
    isActive: {
        type: Boolean,
    },
    dob: {
        type: Date,
    }

},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);