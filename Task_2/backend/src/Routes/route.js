const express = require('express')
const router = new express.Router()
const validate = require('../middleware/validate') 
const { register, getAllUsers, login, getUser, updateProfile } = require('../controllers/userController')
const signupSchema = require('../validators/signupSchema')
const loginSchema = require('../validators/loginSchema')
const blogSchema = require('../validators/blogSchema')
const { getSampleBlogs, createBlog, getYourBlog, getAllBlogs } = require('../controllers/blogController')
const { getSuccessStories } = require('../controllers/successStoriesController')
const { generateAnswerUsingAi } = require('../controllers/openAiController')
const auth = require('../middleware/auth.js')
const { rating, comment, delComment, getRating, editComment } = require('../controllers/rating&CommentController.js')


router.post('/register',validate(signupSchema),register)
router.post('/login',validate(loginSchema) , login)
router.post('/createPost', validate(blogSchema) ,createBlog)
router.post('/getAnswer' ,generateAnswerUsingAi)
router.post('/getYourPost' ,getYourBlog)
router.post('/rating' ,rating)
router.post('/getRating' ,getRating)
router.post('/comment' ,comment)
router.post('/delComment' ,delComment)
router.post('/editComment' ,editComment)


router.get('/allUsers',getAllUsers)
router.get('/allsampleBlogs',getSampleBlogs)
router.get('/allsuccessStories',getSuccessStories)
router.get('/user',auth , getUser)
router.get('/getAllBlogs', getAllBlogs)

router.put('/updateProfile' , updateProfile)


module.exports = router
