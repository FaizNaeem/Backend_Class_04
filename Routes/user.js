const app = require("express")
const router = app.Router()
const userModel = require('../Model/faiz')
const bcrypt = require('bcrypt')
const { model } = require("mongoose")
// const user = [
//     {
//     Name:"faiz",
//     id:1
// },
// {
//     Name:"Junaid",
//     id:2
// },
// {
//     Name:"Atta",
//     id:3
// },
// {
//     Name:"Bilal",
//     id:4
// },
// ]
router.get('/', async(req, res)=>{
    let user1 = await  userModel.find()
   
res.status(200).send({
    status:200,
    massage:"All users",
   user1
})
})
router.post('/', async(req, res) => {
    try{
        const saltRounds = 10
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        req.body.password= hash
        console.log('hash-->' , hash );
        console.log('pASSWORD-->' , req.body.password );
        let user2 = await  userModel.create({...req.body})
        res.status(200).send({ status: 200, user2})
    }
    catch(err){
        res.status(500).send({ status: 500,error:true, msg :"invaid "})
    }
router.get('/:id',async(req, res)=>{
    let user3 = await  userModel.findById(req.params.id)
    res.status(200).send({
            status:200,
            user3
        }
    )
})

})
router.delete('/:id', async(req, res) => {
  try{
await userModel.findByIdAndDelete(req.params.id)
res.status(200).send({
    msg:"delete success",
    status:200
})
  }
  catch(err){
    res.status(400).send({
        msg:"Eroor",
        status:400
    })
  }
})
router.put('/:id', async(req, res) => {
    const save = await userModel.findByIdAndUpdate(req.params.id,{...req.body})
if(!user){
    res.status(400).send({
        msg:"Eroor",
        status:400
    })
}
else{
    res.status(200).send({
       save,
        status:200
    })
}
})
module.exports= router
