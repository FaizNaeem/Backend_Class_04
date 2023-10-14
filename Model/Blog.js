const mongoose = require('mongoose')
const blog = new mongoose.Schema({
    title : {type : mongoose.SchemaTypes.String , required : true},
    Description : {type : mongoose.SchemaTypes.String , required : true},
    userId : {type : mongoose.SchemaTypes.ObjectId , ref :"faiz"},
})
const model1 =  mongoose.model('Blog',blog)
module.exports= model1
