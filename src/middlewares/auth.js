const auth = permission => {
    return (req,res,next) => {
        const {level} = req.body;
        if(!level){
            res.status(400);
            throw new Error('you need sign in');
        }
        if(!permission.includes(level)){
            res.status(401);
            throw new Error("you don't have permission");
        }
        next();
    }
}

module.exports = {auth}