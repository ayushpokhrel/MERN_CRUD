const express=require('express')
const Router=express.Router()
const nodemailer=require('nodemailer')

Router.get('/', async (req,res)=>{


res.send('good')
var transport = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ayushsharmapokhrel@gmail.com",
      pass: process.env.NODEPASS
    }
  });


  var msg={
    from:"ayushsharmapokhrel@gmail.com",
    to:"ayushsharmapokhrel@gmail.com",
    subject:"Nodemailer check",
    text:"wow it worked again"
  }
  transport.sendMail(msg,(err,info)=>{
    if (err){
        console.log(err)
    }
    console.log(info)
  })
})

Router.post('/',async (req,res)=>{
const {uName,Address,subject,message}=req.body;
console.log(uName,Address,subject,message)
res.send('checking nodemailer')

var transport = await nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ayushsharmapokhrel@gmail.com",
    pass: process.env.NODEPASS
  }
});


var msg={
  from:"ayushsharmapokhrel@gmail.com",
  to:Address,
  subject,
  text:message
}
transport.sendMail(msg,(err,info)=>{
  if (err){
      console.log(err)
  }
  console.log(info)
})


})

module.exports=Router;