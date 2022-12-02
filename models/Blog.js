import mongoose from 'mongoose'
const { Schema } = mongoose;

const blogSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  description: String,
  body:  String,
  tagList: String,
});

export default mongoose.model("Blog", blogSchema)