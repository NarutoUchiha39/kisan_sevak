const mongoose = require('mongoose')
const PostImage = mongoose.model(
    'PostImage',new mongoose.Schema({
        file:String
    })
)

module.exports = {
    PostImage:PostImage
}