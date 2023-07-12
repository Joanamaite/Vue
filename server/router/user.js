const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');

userRouter.post('/', async (req, res, next) => {
    let user = await userController.get(req.headers);
    res.status(200).send(user);
});

userRouter.post('/login', async (req, res, next) => {
    let user = await userController.login(req.body);
    res.status(200).send(user);
})

module.exports = userRouter;