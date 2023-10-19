const express = require("express")
var app = express()
const user = require("./Routes/user");
const blog = require("./Routes/blog");
const morgan = require("morgan");
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://faiz:faiz@cluster0.enqka2g.mongodb.net/').then(()=>{
    console.log("connect mongoDb");
})
.catch((err)=>{console.log(err);})

app.use(morgan("tiny"))
app.use(express.json())
app.use('/user', user)
app.use('/Blog', blog)
const middelever=(req ,res , next)=>{
console.log("Middlewere console");
next()
}
app.use(middelever)
app.get("/", (req ,res)=>{
    res.send("Server ready to Go hello")
})
// get user id using params 
// app.get('/user/:id', (req, res) => {
//     console.log('console.log-->', req.params.id)
//     console.log('console.log-->', req.query)
//     res.send({ 
//         status: 200,
//         msg: "User id is " + req.params.id
//     })
// })
app.get("/about", (req ,res)=>{
    res.send({
        status :200,
        massage :"About working"
    })
})





app.listen(3000,()=>{
    console.log("server ready" + 3000);
})
