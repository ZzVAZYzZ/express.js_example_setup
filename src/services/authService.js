const jwt = require("jsonwebtoken");

const generateAccessToken = async (user) => {
    const accessToken =  jwt.sign(
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
    return accessToken;
}

const generateRefreshToken = async (user) => {
    const refreshToken = jwt.sign(
        {
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, process.env.REFRESH_SECRET_KEY,
        {
            expiresIn: "30d",
            // no need header because JWT default is HS256-JWT
            // header: {
            //     alg: "HS256", 
            //     typ: "JWT"    
            // }
        }
    );
    return refreshToken;
}



module.exports = {generateAccessToken, generateRefreshToken}