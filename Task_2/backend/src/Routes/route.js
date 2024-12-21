const express = require('express')
const router = new express.Router()
const validate = require('../middleware/validate') 
const { register, getAllUsers, login } = require('../controllers/userController')
const signupSchema = require('../validators/signupSchema')
const loginSchema = require('../validators/loginSchema')


router.post('/register',validate(signupSchema),register)
router.post('/login',validate(loginSchema) , login)


router.get('/allUsers',getAllUsers)


module.exports = router
