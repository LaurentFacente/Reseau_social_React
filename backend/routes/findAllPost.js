const { Post } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/posts', (req, res) => {
    Post.findAll()
      .then(posts => {
        const message = 'La liste des post a bien été récupérée.'
        res.json({ message, data: posts })
      })
  })
}