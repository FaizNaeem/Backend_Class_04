const app = require("express")
const router = app.Router()
const userBlog = require('../Model/Blog')
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
    let user1 = await  userBlog.find()
   
res.status(200).send({
    status:200,
    massage:"All users",
   user1
})
})
router.post("/", async (req, res) => {
    console.log(req.body);
    try {
      const blog = await userBlog.create({ ...req.body });
      res.status(200).send({ status: 200, blog });
    } catch (err) {
      res
        .status(500)
        .send({ status: 500, error: err, msg: "internal sever error" });
    }
    // users.push({ name: req.body.name, id: users.length + 1 })
  });
router.delete('/:id', async(req, res) => {
  try{
await userBlog.findByIdAndDelete(req.params.id)
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
    const save = await userBlog.findByIdAndUpdate(req.params.id,{...req.body})
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