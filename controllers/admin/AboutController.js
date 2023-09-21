const AboutModel=require('../../models/About')


class AboutController{
  static aboutDisplay=async(req,res)=>{
    
      res.render('admin/about/display')
   
   
  }
}
module.exports=AboutController