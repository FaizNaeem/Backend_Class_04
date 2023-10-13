const mongoose = require('mongoose')
const blog = new mongoose.Schema({
    title : {type : mongoose.SchemaTypes.String , required : true},
    Description : {type : mongoose.SchemaTypes.String , required : true},
})
const model1 =  mongoose.model('faiz',blog)
module.exports= model1