import express from 'express';
import {JWTVerification} from '../middlewares/JWTVerification.js'
export const usersRouter = express.Router();

usersRouter.get('/', JWTVerification, (req, res) => {
    res.send('Get all users');
});