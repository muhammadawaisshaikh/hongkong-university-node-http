const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish ' + req.body.name);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    // dangerous operation 
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the details of the dish:' + req.params.dishId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishId);
    })
    .put((req, res, next) => {
        res.end('Will update the dish:' + req.params.dishId);
    })
    // dangerous operation 
    .delete((req, res, next) => {
        res.end('Deleting the dish:' + req.params.dishId);
    });

module.exports = dishRouter;