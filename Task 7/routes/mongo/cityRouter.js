import express from 'express';
import City from '../../mongoose/models/city.js';

const cityRouter = express.Router();

cityRouter.get('/', (req, res) => {
    City.find().then(cities => res.json(cities));
});

cityRouter.post('/', (req, res) => {
    City.create(req.body, err => {
        if (err) {
            console.log(err.message);
        }
    });
});

cityRouter.get('/random', (req, res) => {
    City.countDocuments()
        .then(result => {
            City.findOne()
                .skip(Math.floor(Math.random() * result))
                .then(city => res.json(city));
        });
});

export default cityRouter;


