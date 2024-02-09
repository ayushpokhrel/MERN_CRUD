const express=require('express')
const GetController = require('../Controllers/GetController')
const PostController = require('../Controllers/PostController')
const DeleteController=require('../Controllers/DeleteController')
const Router=express.Router()

Router.get('/get',GetController)
Router.post('/post',PostController)
Router.delete('/delete/:id', DeleteController)

module.exports=Router