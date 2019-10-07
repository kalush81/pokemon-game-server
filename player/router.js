//this part will serve to signing up

const { Router } = require("express");
const Player = require('./model');
const bcrypt = require('bcrypt');

const router = new Router();

 //the part for signi up on url:port/player

router.post('/player', (req, res, next) => {
    const player = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    Player.create(player)
        .then(player => res.status(201).send(player))
        .catch(next)
});

module.exports = router;
 //-----------------------------------------------