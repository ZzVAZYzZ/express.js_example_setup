const testAuthVip = (req,res,next) => {
    
    req.body.level = 'vip0';
    
    next();
}

module.exports = {testAuthVip}