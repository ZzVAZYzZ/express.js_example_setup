const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const RefreshModel = require('../models/refreshModel');

const validateRefreshToken = asyncHandler(async(req,res,next) =>{
    
    const cookie = req.cookies.refreshToken;
    let checkRefreshToken = false;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let decodedData;
    try {
        decodedData = jwt.verify(cookie, process.env.REFRESH_SECRET_KEY);
    } catch (err) {
        res.status(401);
        throw new Error("User is not authorized - invalid token");
    }

    const email = decodedData.user.email;
    const allRefreshTokens = await RefreshModel.find({email});
    
    allRefreshTokens.forEach(refreshItem => {
        if(refreshItem.token===cookie&&refreshItem.deviceInfo.ipAddress===ipAddress){
            checkRefreshToken = true;
        }
    });
    if(checkRefreshToken){
        req.user = decodedData.user;
        next();
    }else{
        res.status(401);
        throw new Error("User is not authorized");
    }
    
});

module.exports = {validateRefreshToken}