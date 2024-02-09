const data=require('../DummyData')
const UserModel=require('../Models/UserModel')
const GetController=(req,res)=>{
    UserModel.find().then((user)=>{
        res.json({user})
    })
}

module.exports=GetController