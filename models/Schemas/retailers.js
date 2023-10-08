import mongoose,{models,model} from "mongoose"
const Retailer = new mongoose.Schema({
    retailer_name:String,
    products:String,
    state:String,
    latitude:String,
    longitude:String
})

export default models.retailer || model('retailer',Retailer)