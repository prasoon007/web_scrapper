const mongoose = require('mongoose');
      
const UserScehma = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    City: String,
    Salary: Number
})

module.exports = mongoose.model('user', UserScehma);