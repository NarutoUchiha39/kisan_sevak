import mongoose, { model, models } from "mongoose"
import bcrypt from 'bcrypt'
const Register = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    link:String,
    years:String,
    crop:String
})

export default models.pendingregisteration || model('pendingregisteration',Register)