const mongoose = require('mongoose')
const problem = mongoose.model(
    'farmerproblem',new mongoose.Schema({
        problem_description:String,
        farmer_id:String,
        photo:String,
        farmer_name:String,
        sent_at:String,
        assigned:String,
        status:String
    })
)

module.exports = {
    problem:problem
}