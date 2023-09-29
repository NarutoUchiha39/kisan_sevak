const mongoose = require('mongoose')
const farmerprofile = mongoose.model(
    'farmerprofile',new mongoose.Schema({
        first_name:String,
        last_name:String,
        adhar_number:String,
        password:String
    })
)

module.exports = {
    farmerprofile:farmerprofile
}