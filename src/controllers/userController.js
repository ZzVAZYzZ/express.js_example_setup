const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require('../models/userModel')
const asyncHandler = require("express-async-handler");
const { pushToBlackListTokenFromRedis } = require("../databases/redis/redis");

//@desc Register User
//@route POST /api/users/register
//@access public
const register = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailable = await UserModel.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:",hashedPassword);
    const user = await UserModel.create({
        username,
        email,
        password:hashedPassword,
    });
    if(user){
        res.status(201).json({_id: user.id, email: user.email, username: user.username})
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
})


//@desc Login User
//@route POST /api/users/login
//@access private
const login = asyncHandler( async(req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await UserModel.findOne({ email });
    //compare password with hashedpassword
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: "15m",
                // no need header because JWT default is HS256-JWT
                // header: {
                //     alg: "HS256", 
                //     typ: "JWT"    
                // }
            }
        );
        res.status(200).json({ 
            accessToken, 
            // user:{
            //     username: user.username,
            //     email: user.email,
            //     id: user.id,
            // } 
        });
    }else{
        res.status(401);
        throw new Error("email or password is not valid")
    }
})


//@desc Current User
//@route POST /api/users/current
//@access private
const current = (req,res) => {

    res.status(200).json(req.user)
}

//@desc Logout User
//@route POST /api/users/logout
//@access public
const logout = asyncHandler(async (req, res) => {
    const {email,token} = req.body;
    // const updateToken = await UserModel.updateOne(
    //     { email: userEmail }, // find the user by email
    //     { $push: { blackListToken: token } } // push token to blacklist
    // );

    // console.log(updateToken);

    await pushToBlackListTokenFromRedis(email,token,900);

    res.status(200).json({message:"Log out successful"});
});

module.exports = {login,register,current, logout}