const { DateTime } = require("luxon");
const testModel = require('../models/testModel')

//@desc firstTest Test
//@route GET /api/test/firstTest
//@access public
const firstTest = (req,res) => {

    res.status(200).json({message:"first Test"})
}

//@desc errorTest Test
//@route GET /api/test/errorTest
//@access public
const errorTest = (req,res) => {

    res.status(400);
    throw new Error("test Error");
}

//@desc postTestMongodb Test
//@route POST /api/test/mongodbTest
//@access public
const postTestMongodb = async (req,res) => {
    const {testName,testContent,testResult} = req.body;
    const time = String(
        DateTime.now().setZone("Asia/Ho_Chi_Minh").toFormat("yyyy-MM-dd HH:mm:ss")
    );
    if(testName&&testContent&&testResult){
        const result = await testModel.create({
            testName,
            testContent,
            testResult,
            time
        })
        res.status(200).json({
            message: `post success!!! id: ${result._id}`
        })
    }else{
        res.status(400);
        throw new Error('testName, testContent, testResult need to be filled');
    }


}



module.exports = {firstTest,errorTest, postTestMongodb}