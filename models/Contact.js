const mongoose=require('mongoose')


//define schema
const ContactSchema=new mongoose.Schema({
    cat_name:{
        type:String,
        required:true
    }
    
},{timestamps:true})

// create collection
// blog is the name of collection
//blogSchema is the field of blog collection
const ContactModel=mongoose.model('Contact',ContactSchema)

module.exports=ContactModel