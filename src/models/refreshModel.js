const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"please add the username"]
    },
    email: {
        type: String,
        required: [true,"please add the email"]
    },
    deviceInfo: {
        ipAddress:{
            type: String,
            required: [true,"please add the ipAddress"],
        },
        userAgent:{
            type: String,
            required: [true,"please add the userAgent"]
        },
    },
    token: {
        type: String,
        required: [true,"please add the token"]
    },
    time: {
        type: String,
        required: [true,"please add time"]
    },
})

module.exports = mongoose.model("refreshs", schema);







