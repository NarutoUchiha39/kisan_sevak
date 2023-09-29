import mongoose, { model, models } from "mongoose"
let login = mongoose.Schema({
        name:String,
        email:String,
        password:String,
        role:String,
        degree:String
    })


export default models.login || model('login',login)

