const mongoose = require('mongoose');
const mongo = require('mongodb')
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);