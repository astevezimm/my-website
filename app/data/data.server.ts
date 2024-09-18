import {config} from 'dotenv'
import mongoose from 'mongoose'

config();
mongoose.connect(process.env.DB_URL as string);

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
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export async function fetchPostList() {
  return Post.find({}).select('-content -cat_extended_descript').sort({date: 'desc'})
}

export async function fetchPost(url: string) {
  return Post.findOne({url}).select('-content -img_url')
}

export function extractCategories(posts: Array<{cat_url: string, category: string}>) {
  return Array.from(new Set(posts.map(post => post.cat_url)))
    .map(category_slug => {
      const post = posts.find(post => post.cat_url === category_slug)
      if (!post) {
        return null
      }
      return {category: post.category, cat_url: post.cat_url}
    })
}

export async function isFirstOrLast(id: string) {
  const firstPost = await Post.findOne().sort({ date: -1 }).select('_id')
  const lastPost = await Post.findOne().sort({ date: 1 }).select('_id')
  return {
    isFirst: firstPost?._id.toString() === id,
    isLast: lastPost?._id.toString() === id
  }
}

export async function fetchBlurb(id: string, category: string) {
  if (category.toLowerCase() === "poetry") return null
  const post = await Post.findById(id).select('markup_content')
  return (post as unknown as {markup_content: string}).markup_content.slice(0, 1500)
}
