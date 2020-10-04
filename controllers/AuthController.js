const User =require ('../models/User')
const bcrypt =('bcryptjs')
const jwt =require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password,10,function(err,hashedPass) {
        if(err)
        {
            res,json({
                error: err
            })
        }
        let user = new User ({
            name: req.body,name,
            email: req.body.enail,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: "User Added Successfully!"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occured!"
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var passowrd = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        if(user)
        {
            bcrypt.localeCompare(password,user.password,function(err,result) {
                if (err) {
                    res.json({
                        error:err
                    })
                }
                if(result)
                {
                    let token = jwt.sign({name:user.name}, 'ZAQ123RTY890PLM',{expiresIn:'1h'})
                    res.json({
                        message: "Login Successful!",
                        token
                    })
                }
                else
                {
                    res.json({
                        message: "Passowrd does not match!"
                    })
                }
            })
        }
        else
        {
            res.json ({
                message: "No User found!"
            })
        }
    })
}


module.exports = {
    register
}


