//this part will serve to signing up

const { Router } = require("express");
const Player = require('./model');
const bcrypt = require('bcrypt');

const router = new Router();

 //the part for signi up on url:port/player

router.post('/signup', (req, res, next) => {
    console.log('req to /post signup',req.body)
    const player = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.pass, 10),
        name: req.body.name,
        isLoggedIn: false
    }
    Player.create(player)
        .then(player => res.status(201).send(player))
        .catch(next)
});

module.exports = router;
 //-----------------------------------------------