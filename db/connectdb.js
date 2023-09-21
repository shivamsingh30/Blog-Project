const mongoose=require('mongoose')
const Db_liveurl='mongodb+srv://iamshivambhd30:shivam123@cluster0.odenszp.mongodb.net/blogproject?retryWrites=true&w=majority'
const local_url= "mongodb://127.0.0.1:27017/blogproject"


const connectDb=()=>{
    return mongoose.connect(Db_liveurl)

    .then(()=>{
        console.log("database connnect successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connectDb