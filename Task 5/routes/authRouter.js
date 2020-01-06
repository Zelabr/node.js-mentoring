import express from 'express';
import jwt from 'jsonwebtoken';
import _ from 'underscore';

import { passportLocalAuth } from '../service/passport/passportLocalAuth.js';
import { passportFacebookAuth } from '../service/passport/passportFacebookAuth.js';
import { passportFacebookCallback } from '../service/passport/passportFacebookAuth.js';
import { passportTwitterAuth } from '../service/passport/passportTwitterAuth.js';
import { passportTwitterCallback } from '../service/passport/passportTwitterAuth.js';
import { passportGoogleAuth } from '../service/passport/passportGoogleOAuth.js';
import { passportGoogleCallback } from '../service/passport/passportGoogleOAuth.js';

const authRouter = express.Router();

const tokens = [{
  id: "1",
  token: "TOKEN"
}]

const userData = [{
  id: "1",
  username: "Yahor",
  password: "12345",
  email: "email@google.com",
  isActive: "true"
}];

const successResponse = {
  "code": 200,
  "message": "OK",
  "data": {
    "user": {
      "email": "",
      "username": ""
    }
  },
  "token": ""
}

const errorResponse = {
  "code": 404,
  "message": "Not Found"
}

authRouter.post('/JWT', (req, res) => {
  let user = _.find(userData, { username: req.body.username });
  if (user === undefined || user.password !== req.body.password) {
    res.status(404).send(errorResponse);
  } else {
    let payLoad = { "sub": user.id, "isActive": user.isActive };
    let token = jwt.sign(payLoad, 'secret', { expiresIn: 10 });

    successResponse.data.user.email = JSON.parse(JSON.stringify(userData[0]))['email'];;
    successResponse.data.user.username = user.username;
    successResponse.token = token;

    res.setHeader('x-access-token', token);
    res.send(successResponse);
  }
});

authRouter.post('/passport/local', passportLocalAuth, (req, res) => {
  let token = _.find(tokens, { id: req.user.id });
  res.json(token);
});

authRouter.get('/passport/facebook', passportFacebookAuth);
authRouter.get('/passport/facebook/callback', passportFacebookCallback, (req, res) => {
  res.redirect('/');
});

authRouter.get('/passport/twitter', passportTwitterAuth);
authRouter.get('/passport/twitter/callback', passportTwitterCallback, (req, res) => {
  res.redirect('/');
});

authRouter.get('/passport/google', passportGoogleAuth);
authRouter.get('/passport/google/callback', passportGoogleCallback, (req, res) => {
  res.redirect('/');
});

export default authRouter;