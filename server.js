const express = require('express');
const connectDB = require('./config/connectDB');
const User = require('./model/User');
const app = express()
require('dotenv').config({path:'./config/.env'})
app.use(express.json())
connectDB()
app.post('/users/add', async(req,res)=>{
    const {firstName,lastName,email,age}=req.body ;
    const newUser = new User({
        firstName,
        lastName, 
        email,
        age
    })
    try {
        await newUser.save() 
        res.send(newUser)
    } catch (error) {
        res.send('post error')
    }
})
app.get('/users/get', async(req,res)=>{
    try {
        const users= await User.find()
        res.send(users)
    } catch (error) {
        alert('get error')
    }
})
app.put('/users/update/:id', async (req, res)=>{
    try {
        const editedUser= await User.findByIdAndUpdate(req.params.id ,{...req.body} ,{new:true})
        res.send(editedUser)
    } catch (error) {
        alert ("update error")
    }
})
app.delete('/users/delete/:id', async (req, res)=>{
    try {
         await User.findByIdAndDelete(req.params.id) 
         res.send("user deleted succefully")
    } catch (error) {
        alert('delete error')
    }
})





const PORT = process.env.PORT || 5000 ;
app.listen(PORT , (err)=> err ? console.log(err): console.log(`server running on port ${PORT}`))
