const ContactModel=require('../../models/Contact')


class ContactController{
  static contactDisplay=async(req,res)=>{
    
      res.render('admin/contact/display')
   
   
  }
}
module.exports=ContactController