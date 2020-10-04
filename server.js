const express = require ('express')
const mongoose = require ('mongoose')
const morgan = require ('morgan')
const bodyParser = require ('body-parser')

const UserRoute = require('./routes/user')
const AuthRoute =require('./routes/auth')

mongoose.connect ('mongodb://localhost:localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true})//testdb is our database, other two arguments are common errors
const db= mongoose.connection

//to handle error
db.on('error', (err) => {
    console.log(err)
})

//if connection establishes
db.once('open',() =>{
    console.log('Database Connection Established!')
})

const app=express()//declare express app

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())//of request bodies come in url encoded format or json format, we can use it
app.use('/uploads',express.static('uploads'))

const PORT = process.env.PORT || 3000 //if any port is declared in env file it will take that port otherwise it will take 3000 as port

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/user',UserRoute)//our server running on 3000, if anyone call localhost:3000/api//user, it call fun from user.js
app.use('/api',AuthRoute)


