const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    uName:{
        type:String,
        default:"Aayush",
        required:true
    },
    Address:{
        type:String,
        default:"Rupandehi",
        required:true
    }
})

const UserModel= mongoose.model('UserData',UserSchema);
module.exports=UserModel;