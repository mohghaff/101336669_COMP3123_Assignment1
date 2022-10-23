const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender : {
        type: String,
        enum : ['Male', 'Female', 'Other'],
        default: 'Female'
    },
    salary : {
        type: Number,
        require: true
    }
})

const employeeModel = mongoose.model('employees', employeeSchema)

module.exports = employeeModel



/*

{

    "first_name": "Mohsen",
    "last_name": "Ghaffari",
    "email": "ghaff@gmail.com",
    "gender": "Male",
    "salary": 65000
}

*/