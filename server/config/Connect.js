const mongoose=require('mongoose')
const env=require('dotenv')
env.config()
const Connect= mongoose.connect(process.env.URL).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
console.log(`error occured ${err}`)
})

module.exports=Connect