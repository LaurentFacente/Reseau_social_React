const { Post } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/posts/:id', (req, res) => {
    Post.findByPk(req.params.id)
      .then(post => {
        const message = 'Un post a bien été trouvé.'
        res.json({ message, data: post })
      })
  })
}