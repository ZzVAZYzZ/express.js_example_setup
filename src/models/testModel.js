const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema({
    testName: {
        type: String,
        required: [true,"please add the test name"]
    },
    testContent: {
        type: String,
        required: [true,"please add the test content"]
    },
    testResult: {
        type: String,
        required: [true,"please add the test result"]
    },
    time: {
        type: String,
        required: [true,"please add time"]
    },
})

module.exports = mongoose.model("tests", schema);







