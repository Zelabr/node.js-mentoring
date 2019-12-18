import express from 'express';
import {JWTVerification} from '../middlewares/JWTVerification.js'
export const productsRouter = express.Router();

productsRouter.get('/', JWTVerification, (req, res) => {
  res.send('Return all products');
});