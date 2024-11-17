const { DateTime } = require("luxon");
const asyncHandler = require("express-async-handler");
const testModel = require('../models/testModel')
const bcrypt = require("bcrypt");

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
const postTestMongodb = asyncHandler(async (req,res) => {
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
})

//@desc bcryptTest Test
//@route POST /api/test/bcryptTest
//@access public
const bcryptTest = asyncHandler(async (req,res) => {
    const { text } = req.body;
    if(text){
        const hashedText = await bcrypt.hash(text,10);
        // console.log(hashedText);
        
        res.status(200).json({
            result: `${text} after using bcrypt: ${hashedText}`
        });
    }else{
        res.status(400);
        throw new Error("text field nessesary!")
    }
    
})

//@desc vipTest Test
//@route POST /api/test/bcryptTest
//@access public
const vipTest0 = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"vip0"});
})
const vipTest1 = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"vip1"});
})


module.exports = {firstTest,errorTest, postTestMongodb,bcryptTest,vipTest0,vipTest1}