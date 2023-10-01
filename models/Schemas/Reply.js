const mongoose = require('mongoose')
const Reply = new mongoose.Schema({
        reference_id:String,
        email_id:String,
        prescription:String,
        diagnosis:String,
        Replied_at:String,
        adhar_number:String,
    })


export default mongoose.models.Reply || mongoose.model('Reply',Reply)

