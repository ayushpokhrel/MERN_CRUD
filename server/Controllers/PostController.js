const UserModel=require('../Models/UserModel')
const PostUser=(req,res)=>{
    const {uName,Address}=req.body;
    console.log(uName,Address);

    try{
        UserModel.create({uName,Address}).then(()=>{
            res.json({msg:` ${uName} Registered himself from ${Address}`})
        })
    }
    catch(err){
        console.log(err)
    }

}

module.exports=PostUser