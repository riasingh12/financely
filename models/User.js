const mongoose =require('mongoose')
const Schema =mongoose.Schema
const userSchema =new Schema ({

    name: {
        type: String
    },
    email: {
        type: String
    },
    birthdate: {
        type: Date
    },
    gender: {
        type: String
    },
    marriagestat: {
        type: String
    },
    disability: {
        type: Boolean
    },
    monthlinc: {
        type: Number
    },
    earnerstat: {
        type: Boolean
    },
    employmentsat: {
        type: String
    },
    lossoffam: {
        type: String
    },
    address: {
        type: String
    },
    phoneno: {
        type: Number
    }
}, {timestamps: true})

const User =mongoose.model('User', userSchema)
module.exports = User