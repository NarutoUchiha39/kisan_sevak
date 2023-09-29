const mongoose = require('mongoose')
const Reply = mongoose.model(
    'Reply',new mongoose.Schema({
        reference_id:String,
        email_id:String,
        prescription:String,
        diagnosis:String,
        Replied_at:String,
        adhar_number:String,
    })
)

module.exports = {
    Reply:Reply
}