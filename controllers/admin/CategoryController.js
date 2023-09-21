const CategoryModel=require('../../models/Category')


class CategoryController{
  static categoryDisplay=async(req,res)=>{
    
      res.render('admin/category/display')
   
   
  }
}
module.exports=CategoryController