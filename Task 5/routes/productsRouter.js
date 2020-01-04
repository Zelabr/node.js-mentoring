import express from 'express';
import { JWTVerification } from '../middlewares/JWTVerification.js'

const productsRouter = express.Router();

productsRouter.get('/', JWTVerification, (req, res) => {
  res.send('Return all products');
});

export default productsRouter;