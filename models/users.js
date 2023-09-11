const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    hobbies: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);