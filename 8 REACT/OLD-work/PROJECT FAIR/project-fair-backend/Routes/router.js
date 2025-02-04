
// importe express
const express = require ('express')

//4 import usercintroller
const usercontroller = require('../Controllers/userController')

//2 create router from express
const router = express .Router()

//3 create route for each request
      //--1 Register route :  http://localhost:3000/api/register
  router.post('/api/register',usercontroller.register)

  //     //--2 Login route :   http://localhost:3000/api/login
  router.post('/api/login',usercontroller.login)


  module.exports= router