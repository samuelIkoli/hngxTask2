const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const NumberSchema = new Schema({

    number: {
        type: Number,
    },

},
    { timestamps: true }
);
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Number', NumberSchema);