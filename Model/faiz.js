const mongoose = require('mongoose')
const faizScheme = new mongoose.Schema({
    username: { type:  mongoose.SchemaTypes.String, required: true },
    email: { type:  mongoose.SchemaTypes.String, required: true, unique: true },
    password: { type:  mongoose.SchemaTypes.String, required: true,}
})

const model1 =  mongoose.model('faiz',faizScheme)
module.exports= model1