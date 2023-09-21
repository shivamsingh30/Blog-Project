const mongoose=require('mongoose')


//define schema
const CategorySchema=new mongoose.Schema({
    cat_name:{
        type:String,
        required:true
    }
    
},{timestamps:true})

// create collection
// blog is the name of collection
//blogSchema is the field of blog collection
const CategoryModel=mongoose.model('Category',CategorySchema)

module.exports=CategoryModel