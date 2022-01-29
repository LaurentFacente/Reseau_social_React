const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.get('/api/posts', auth, (req, res) => {
    Post.findAll()
      .then(posts => {
        const message = 'La liste des post a bien été récupérée.'
        res.json({ message, data: posts })
      })
  })
}