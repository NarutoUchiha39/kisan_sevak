import mongoose, { model,models } from "mongoose"
const problem = new mongoose.Schema({
        problem_description:String,
        farmer_id:String,
        photo:String,
        farmer_name:String,
        sent_at:String,
        assigned:String,
        status:String
    })

export default models.farmerproblem || model('farmerproblem',problem)
