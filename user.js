const app = require("express")
const router = app.Router()
const userModel = require('./faiz')
const user = [
    {
    Name:"faiz",
    id:1
},
{
    Name:"Junaid",
    id:2
},
{
    Name:"Atta",
    id:3
},
{
    Name:"Bilal",
    id:4
},
]
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

        let user2 = await  userModel.create({...req.body})
        res.status(200).send({ status: 200, user2})
    }
    catch(err){
        res.status(500).send({ status: 500,error:true, msg :"invaid "})
    }
router.get('/:id',async(req, res)=>{
    let user3 = await  userModel.findById(req.params.id)
    res.status(200).send(
        {
            status:200,
            user3
            
    }
    )
})
    

})
router.delete('/:id', (req, res) => {
    console.log(req.body)
    user.splice(req.params.id-1 ,1)
    res.status(200).send({ status: 200, user : user })
})
router.put('/:id', (req, res) => {
    
    if(user[req.params.id-1]){
        user[req.params.id-1].Name= 'faizu'
        res.status(200).send({ status: 200, user : user[req.params.id-1].Name })
    }
else{
    res.status(400).send({ status: 400, Massage : "user not found"})
}
})
module.exports= router
