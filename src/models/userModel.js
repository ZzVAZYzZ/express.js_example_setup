const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"please add the user name"],
    },
    email: {
        type: String,
        required: [true,"please add the user email address"],
        unique: [true,"Email address already taken"],
    },
    password: {
        type: String,
        required: [true,"please add the user password"],
    },
    // blackListToken: {
    //     type: [String],
    //     default: [],
    // }
})

module.exports = mongoose.model("users", schema);