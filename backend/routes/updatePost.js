const { Post } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/posts/:id', (req, res) => {
    const id = req.params.id
    Post.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Post.findByPk(id).then(post => {
        const message = `Le message ${post.title} a bien été modifié.`
        res.json({message, data: post })
      })
    })
  })
}