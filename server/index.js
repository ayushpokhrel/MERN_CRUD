const express=require('express')
const app=express()
const env=require('dotenv')
const cors=require('cors')
const UserRoute = require('./Routes/UserRoute')
const nodemailerRoute=require('./Routes/NodeMailler')
require('./config/Connect')
app.use(cors())
app.use(express.json())

env.config()

app.use('/api/v1/user',UserRoute)
app.use('/api/v1/nodemailer',nodemailerRoute)

PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})