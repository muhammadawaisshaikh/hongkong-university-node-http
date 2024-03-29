const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion ' + req.body.name);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    // dangerous operation 
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });

    promotionsRouter.route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the details of the promotion:' + req.params.promotionId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.promotionId);
    })
    .put((req, res, next) => {
        res.end('Will update the promotion:' + req.params.promotionId);
    })
    // dangerous operation 
    .delete((req, res, next) => {
        res.end('Deleting the promotion:' + req.params.promotionId);
    });

module.exports = promotionsRouter;