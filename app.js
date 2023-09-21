const express=require('express')
//console.log(express)
const app=express()
const port=2000
const web=require('./routes/web')
const connectDb=require('./db/connectdb')
const fileUpload=require("express-fileupload")
var cloudinary = require('cloudinary');
var session=require('express-session')
var flash= require('connect-flash')
//cokies
const cookieParser=require('cookie-parser')
app.use(cookieParser())

// database connection
connectDb()

// data ko utha ke json mai lata hai
app.use(express.urlencoded({extended:false}))

// for file upload
app.use(fileUpload({useTempFiles:true}))

// for flash message
app.use(session({
    secret:'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());

//route load
app.use('/',web)

//ejs setup
app.set('view engine', 'ejs')

// for image and css
app.use(express.static('public'))






//server create
app.listen(port,()=>{
    console.log(`server is running at localhost:${port}`)
})