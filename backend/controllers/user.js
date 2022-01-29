//Import
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
// let models = require('../models')
let utils = require('../utils/jwtUtils');
let verifInput = require('../utils/verifInput')

//Création d'un user
exports.signup = (req, res) => {
    // Valider les paramètres de la requète
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    if (email == null || username == null || password == null) {
        res.status(400).json({ error: 'il manque un paramètre' })
    }

    //TO DO => Vérification des saisies user
    let emailOk = verifInput.validEmail(email);
    console.log(emailOk)
    let mdpOK = verifInput.validPassword(password);
    console.log(mdpOK)
    let usernameOk = verifInput.validUsername(username);
    console.log(usernameOk)
    if (emailOk == true && mdpOK == true && usernameOk == true) {
        //Vérification si user n'existe pas déjà
        //TO DO => Vérifier l'username et l'email
        models.User.findOne({
            attributes: ['email'],
            where: { email: email }
        })
            .then(user => {
                if (!user) {
                    bcrypt.hash(password, 10, function (err, bcryptPassword) {
                        // Création de l'user
                        const newUser = models.User.create({
                            email: email,
                            username: username,
                            password: bcryptPassword,
                            isAdmin: false
                        })
                            .then(newUser => { res.status(201).json({ 'id': newUser.id }) })
                            .catch(err => {
                                res.status(500).json({ err })
                            })
                    })
                }
                else {
                    res.status(409).json({ error: 'Cette utilisateur existe déjà ' })
                }
            })
            .catch(err => { res.status(500).json({ err }) })
    } else {
        console.log('pas cette fois')
    }
};

//Login d'un user
exports.login = (req, res) => {
    //Récupération et validation des paramètres
    let username = req.body.username;
    let password = req.body.password;
    if (username == null || password == null) {
        res.status(400).json({ error: 'Il manque un paramètre' })
    }
    //Vérification si user existe
    models.User.findOne({
        where: { username: username }
    })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (errComparePassword, resComparePassword) => {
                    if (resComparePassword) {
                        res.status(200).json({
                            userId: user.id,
                            token: utils.generateToken(user),
                            isAdmin: user.isAdmin
                        })
                    } else {
                        res.status(403).json({ error: 'invalid password' });
                    };
                })
            } else {
                res.status(404).json({ 'erreur': 'Cet utilisateur n\'existe pas' })
            }
        })
        .catch(err => { res.status(500).json({ err }) })
};

