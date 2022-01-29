const { Post } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/posts/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
      const postDeleted = post;
      Post.destroy({
        where: { id: post.id }
      })
      .then(_ => {
        const message = `Le message avec l'identifiant n°${postDeleted.id} a bien été supprimé.`
        res.json({message, data: postDeleted })
      })
    })
  })
}