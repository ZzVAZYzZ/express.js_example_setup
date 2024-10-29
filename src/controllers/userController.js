


//@desc Register User
//@route POST /api/users/register
//@access public



//@desc Login User
//@route POST /api/users/login
//@access private
const login = (req,res) => {

    res.status(200).json({
        message: "login successfull"
    })
}



module.exports = {login}