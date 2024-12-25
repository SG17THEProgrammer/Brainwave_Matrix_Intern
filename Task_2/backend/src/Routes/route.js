const express = require('express')
const router = new express.Router()
const validate = require('../middleware/validate') 
const { register, getAllUsers, login, getUser } = require('../controllers/userController')
const signupSchema = require('../validators/signupSchema')
const loginSchema = require('../validators/loginSchema')
const blogSchema = require('../validators/blogSchema')
const { getSampleBlogs, createBlog } = require('../controllers/blogController')
const { getSuccessStories } = require('../controllers/successStoriesController')
const { generateAnswerUsingAi } = require('../controllers/openAiController')
const auth = require('../middleware/auth.js')


router.post('/register',validate(signupSchema),register)
router.post('/login',validate(loginSchema) , login)
router.post('/createPost', validate(blogSchema) ,createBlog)
router.post('/getAnswer' ,generateAnswerUsingAi)


router.get('/allUsers',getAllUsers)
router.get('/allsampleBlogs',getSampleBlogs)
router.get('/allsuccessStories',getSuccessStories)
router.get('/user',auth , getUser)


module.exports = router
