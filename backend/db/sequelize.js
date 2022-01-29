const { Sequelize, DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const PostModel = require('../models/post')
const posts = require('./importPost')


// Connecion de l'API avec la base de donnée
const sequelize = new Sequelize('groupomaniadb', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
// Importation des models
const User = UserModel(sequelize, DataTypes)
const Post = PostModel(sequelize, DataTypes)

// Creation de la fonction d'initialisation de la db + creation des messages 
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    posts.map(post => {
      Post.create({
        title: post.title,
        content: post.content,
        attachment: post.attachment
      }).then(post => console.log(post.toJSON()))
    })
  console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, User, Post
}