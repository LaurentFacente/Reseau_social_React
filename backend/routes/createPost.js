const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.post('/api/posts', auth, (req, res) => {
    Post.create(req.body)
      .then(post => {
        const message = `Le post ${req.body.title} a bien été crée.`
        res.json({ message, data: post })
      })
  })
}