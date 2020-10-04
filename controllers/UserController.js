const User =require ('../models/User')

//show the list of Users
const index = (req, res, next) => {
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error=>{
        res.json({
            message: 'An error occured!'
        })
    })
}

const show =(req, res, next)=> {
    let userID =req.body.userID
    User.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//add new user
const store = (req, res,next) => {
    let user =new User ({
        name: req.body.name,
        email: req.body.email,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        marriagestat: req.body.marriagestat,
        disability: req.body.disability,
        monthlyinc: req.body.monthlyincome,
        earnerstat: req.body.primaryearner,
        employmentstat: req.body.incomestat,
        lossoffam: req.body.lossoffam,
        address: req.body.address,
        phoneno: req.body.phoneno
    })
    if(req.file){
        user.avatar = req.file.path
    }
    user.save()
    .then(response => {
        res.json({
            message: "User Data Added Successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured!"
        })
    })
}

//Update user info
const update = (req, res, next) => {
    let userID =req.body.userID

    let updateData = {
        gender: req.body.gender,
        marriagestat: req.body.marriagestat,
        disability: req.body.disability,
        monthlyinc: req.body.monthlyincome,
        earnerstat: req.body.primaryearner,
        employmentstat: req.body.incomestat,
        lossoffam: req.body.lossoffam,
        address: req.body.address,
        phoneno: req.body.phoneno
    }
    Employee.findByIdAndUpdate (userid, {$set: updateData})
    .then(() => {
        res.json({
            message: "User updated successfully!"
        })
    })
    .catch (error => {
        res.json({
            message: "An error occured!"
        })
    })
}

//delete an user
const destroy = (req, res, next) => {
    let userID =req.body.userID
    User.findOneAndRemove(userId)
    .then(() => {
        res.json({
            message: "User delted succesfully!"
            })
    })
    .catch(error => {
        req.json({
            message: "An error occured!"
        })
    })
}

//export the funcs
module.export ={
    index, show, store, update, destroy
}


















