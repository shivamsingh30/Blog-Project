const express=require('express')
const Router=express.Router()
const FrontController=require('../controllers/FrontController')
const TeacherController = require('../controllers/TeacherController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const ContactController = require('../controllers/admin/ContactController')
const AboutController = require('../controllers/admin/AboutController')
const auth=require('../middleware/auth')

//route path
Router.get('/',FrontController.home) //method
Router.get('/about',FrontController.about) //method
Router.get('/contact',FrontController.contact) //method
Router.get('/blog',FrontController.blog) //method
Router.get('/login',FrontController.login) //method
Router.get('/blogdetail/:id',FrontController.blogdetail)
Router.get('/register',FrontController.register)


// teachercontroller
Router.get('/teacher/display',TeacherController.display)
Router.get('/teacher/create',TeacherController.create)

// admincontroller
Router.get('/admin/dashboard',auth,AdminController.dashboard)
Router.post('/adminregister',auth,AdminController.register)
Router.post('/verifylogin',AdminController.verifylogin)
Router.get('/logout',AdminController.logout)

//blogcontroller
Router.get('/admin/blogdisplay',auth,BlogController.displayBlog)
Router.post('/insertblog',auth,BlogController.insertblog)
Router.get('/admin/blogview/:id',auth,BlogController.blogview)
Router.get('/admin/blogedit/:id',BlogController.blogedit)
Router.post('/blogupdate/:id',BlogController.blogupdate)
Router.get('/admin/blogdelete/:id',BlogController.blogDelete)

//categorycontroller
Router.get('/admin/category/display',CategoryController.categoryDisplay)

//contactcontroller
Router.get('/admin/contact/display',ContactController.contactDisplay)

//aboutcontroller
Router.get('/admin/about/display',AboutController.aboutDisplay)

module.exports=Router