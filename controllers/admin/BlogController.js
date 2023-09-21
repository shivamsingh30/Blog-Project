const BlogModel = require('../../models/Blog')
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dz5anoip8', 
  api_key: '689968534498441', 
  api_secret: 'RL6tp87urpCYLG6oPdZjklk7KKg',
  //secure: true
});;


class BlogController {
  static displayBlog = async (req, res) => {
    try {
      const data = await BlogModel.find()
      console.log(data)
      res.render('admin/blog/display', { d: data }) // admin ke andar blog ke andar 
    }
    catch (error) {
      console.log(error)
    }



  }
  static insertblog = async (req, res) => {
    try {
      //console.log(req.files.image) 

      const file = req.files.image
      const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'blogimage'
      })
      const result = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url
        }
      })

      await result.save()
      res.redirect('/admin/blogdisplay')
      //console.log(myimage)

      // const result=new BlogModel ({
      //   title:req.body.title,
      //   description:req.body.description
      //})
      // await result.save()
      //  console.log(result)


    }
    catch (error) {
      console.log(error)
    }
  }

  static blogview = async (req, res) => {
    try {
      // console.log(req.params.id)
      const result = await BlogModel.findById(req.params.id)
      //console.log(result)
      res.render('admin/blog/view', { view: result })
    }
    catch (error) {
      console.log(error)
    }
  }

  static blogedit = async (req, res) => {
    try {
      // console.log(req.params.id)
      const result = await BlogModel.findById(req.params.id)
      //console.log(result)
      res.render('admin/blog/edit', { edit: result })
    }
    catch (error) {
      console.log(error)
    }
  }

  static blogupdate = async (req, res) => {
    try {
      // console.log(req.body)
      //  console.log(req.params.id)
      //delete image code
      const blog = await BlogModel.findById(req.params.id)
      const imageid = blog.image.public_id
      //  console.log(imageid)
      await cloudinary.uploader.destroy(imageid)
      //second update image
      const file = req.files.image
      const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'blogimage'
      })



      const update = await BlogModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url
        }
      })

      await update.save()
      res.redirect('/admin/blogdisplay')

    }
    catch (error) {
      console.log(error)
    }
  }

  static blogDelete = async (req, res) => {
    try {
      //delete image code
      const blog = await BlogModel.findById(req.params.id)
      const imageid = blog.image.public_id
      //  console.log(imageid)
      await cloudinary.uploader.destroy(imageid)
     

      await BlogModel.findByIdAndDelete(req.params.id)
      res.redirect('/admin/blogdisplay')

    }
    catch (error) {
      console.log(error)
    }
  }


}
module.exports = BlogController