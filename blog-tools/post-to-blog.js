import {config} from 'dotenv'
import mongoose from 'mongoose'
import readline from 'readline'
import fs from 'fs'
import _ from 'lodash'

config()
mongoose.connect(process.env.DB_URL)

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
})
const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Did you add an image for post to /public/images/blog? (y/n) ', (imageAdded) => {
  if (imageAdded.toLowerCase() !== 'y') {
    console.log('Come back when you have an image.')
    rl.close()
    mongoose.disconnect()
    process.exit(1)
  }

  rl.question('Did you add markdown for post to /blog-tools/markdown.md? (y/n) ', (markdownAdded) => {
    if (markdownAdded.toLowerCase() !== 'y') {
      console.log('Come back when you have markdown.')
      rl.close()
      mongoose.disconnect()
      process.exit(1)
    }
    
    rl.question('What\'s the title for the blog post? ', async (title) => {
      console.log('Currently existing categories:\n')
      const categories = await Post.distinct('category')
      console.log(categories.join('\n'))
  
      rl.question('What\'s the category for the blog post? ', async (category) => {
        let cat_extended_descript
        if (!categories.includes(category)) {
          cat_extended_descript = await new Promise((resolve) => {
            rl.question('What\'s the extended description for the category? ', (input) => {
              resolve(input)
            })
          })
        } else {
          const post = await Post.findOne({category})
          cat_extended_descript = post?.cat_extended_descript
          console.log("Extended description for category: ", cat_extended_descript)
        }
        console.log('Posting to blog...')
  
        const newPost = new Post({
          title,
          content: '', // old content from old version of the site
          markup_content: fs.readFileSync('blog-tools/markdown.md', 'utf-8'),
          url: _.kebabCase(title),
          date: new Date(),
          category,
          cat_extended_descript: cat_extended_descript || '',
          cat_url: _.kebabCase(category),
          img_url: getLastImageUrl('public/images/blog')
        })
  
        await newPost.save()
        console.log('Post successfully added')
        fs.writeFileSync('blog-tools/markdown.md', '')
        rl.close()
        mongoose.disconnect()
        process.exit(0)
      })
    })
  })
})

function getLastImageUrl(directory) {
  const files = fs.readdirSync(directory).filter(file => file.match(/^i\d+\.jpg$/))
  if (files.length === 0) return ''
  files.sort()
  return `/images/blog/${files[files.length - 1]}`
}
