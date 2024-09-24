import {config} from 'dotenv'
import mongoose from 'mongoose'

config();

const postSchema = new mongoose.Schema({
  title: String,
  content: String, // old content from old version of the site
  markup_content: String, // new content for the new version of the site
  url: String,
  date: Date,
  category: String,
  cat_extended_descript: String,
  cat_url: String,
  img_url: String
});
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)