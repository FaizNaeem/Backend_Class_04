const mongoose = require('mongoose')
const faizScheme = new mongoose.Schema({
    title : {type : mongoose.SchemaTypes.String , required : true},
    Description : {type : mongoose.SchemaTypes.String , required : true},
})

const model1 =  mongoose.model('faiz',faizScheme)
module.exports= model1