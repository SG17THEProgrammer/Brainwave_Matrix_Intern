const express = require('express')
const router = new express.Router()
const validate = require('../middleware/validate') 
const { register, getAllUsers, login } = require('../controllers/userController')
const signupSchema = require('../validators/signupSchema')
const loginSchema = require('../validators/loginSchema')
const { getSampleBlogs } = require('../controllers/blogController')
const { getSuccessStories } = require('../controllers/successStoriesController')


router.post('/register',validate(signupSchema),register)
router.post('/login',validate(loginSchema) , login)


router.get('/allUsers',getAllUsers)
router.get('/allsampleBlogs',getSampleBlogs)
router.get('/allsuccessStories',getSuccessStories)


module.exports = router
