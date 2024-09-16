import {config} from 'dotenv'
import mongoose from 'mongoose'

config();
mongoose.connect(process.env.DB_URL as string);

// Add markup_content to this, after it's been populated in the database
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  url: String,
  date: Date,
  category: String,
  cat_extended_descript: String,
  cat_url: String,
  img_url: String
});
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export async function fetchPostList() {
  return Post.find({}).select('-content -cat_extended_descript').sort({date: 'desc'})
}

export async function fetchPost(url: string) {
  return Post.findOne({url}).select('-content -url -img_url')
}

export function extractCategories(posts: Array<{cat_url: string, category: string}>) {
  return Array.from(new Set(posts.map(post => post.cat_url)))
    .map(category_slug => {
      const post = posts.find(post => post.cat_url === category_slug);
      if (!post) {
        return null;
      }
      return {category: post.category, category_slug: post.cat_url};
    });
}
