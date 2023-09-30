import mongoose from "mongoose"
const farmerprofile =
    new mongoose.Schema({
        first_name:String,
        last_name:String,
        adhar_number:String,
        password:String
    });

export default (mongoose.models.farmerprofile || mongoose.model('farmerprofile',farmerprofile))
