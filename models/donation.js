const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const DonationSchema = new Schema({
    user_id: {
        type: String,
    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    amount: {
        type: String,
        required: true,
    },
    anonymous: {
        type: Boolean,
    },
    phone: {
        type: String,
    },
    reference: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Donation', DonationSchema);