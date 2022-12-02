import express from 'express'
import Blog from '../models/Blog.js'
const router = express.Router();

router.post("/", async (req,res) =>{
    const newBlog = new Blog(req.body)
    try{
        const savedBlog = await newBlog.save()
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", (req, res)=>{
    res.send("Hajho")
})

export default router;