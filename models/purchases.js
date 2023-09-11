const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const PurchaseSchema = new Schema({
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
    amount: {
        type: String,
        required: true,
    },
    tokens: {
        type: Number,
    },
    reference: {
        type: String,
        required: true,
    }

},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Purchase', PurchaseSchema);