import express from 'express';
import {JWTVerification} from '../middlewares/JWTVerificationMiddleware.js'
export const usersRouter = express.Router();

usersRouter.get('/', JWTVerification, (req, res) => {
    res.send('Get all users');
});