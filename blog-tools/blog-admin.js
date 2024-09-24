/* global process */
import mongoose from 'mongoose'
import fs from 'fs'
import { Post } from './data.js'

(async () => {
  await mongoose.connect(process.env.DB_URL)
  const [action, postId] = process.argv.slice(2)
  if (!postId) {
    await listRecentPosts()
  }
  if (action === 'fetch') {
    await fetchPost(postId)
  } else if (action === 'update') {
    await updatePost(postId)
  }
})()

async function fetchPost(postId) {
  const post = await Post.findById(postId).select('markup_content')
  fs.writeFileSync('blog-tools/markdown.md', post.markup_content)
  await mongoose.disconnect()
  process.exit(0)
}

async function updatePost(postId) {
  const post = await Post.findById(postId)
  post.markup_content = fs.readFileSync('blog-tools/markdown.md', 'utf-8')
  if (!post.markup_content) {
    console.log('No content found in markdown.md')
    await mongoose.disconnect()
    process.exit(1)
  }
  await post.save()
  fs.writeFileSync('blog-tools/markdown.md', '')
  await mongoose.disconnect()
  process.exit(0)
}

async function listRecentPosts() {
  const posts = await Post.find({}).sort({ date: -1 }).limit(20).select('id title')
  posts.forEach((post) => {
    console.log("id:", post.id, "\ttitle:", post.title)
  })
  await mongoose.disconnect()
  process.exit(1)
}
