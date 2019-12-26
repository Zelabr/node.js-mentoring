const express = require('express');
const User = require('../../mongoose/models/user.js');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    User.find().then(users => res.json(users));
});

userRouter.post('/', (req, res) => {
    User.create(req.body, err => {
        if(err) {
            console.log(err.message);
        }
    });
});

module.exports = userRouter;