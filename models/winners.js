const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const WinnerSchema = new Schema({

    user_id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    profile_pic: {
        type: String,
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
    isPaid: {
        type: Boolean,
    }

},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Winner', WinnerSchema);