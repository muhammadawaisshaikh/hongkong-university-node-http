const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all leaders to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader ' + req.body.name);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    // dangerous operation 
    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the details of the leader:' + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.end('Will update the leader:' + req.params.leaderId);
    })
    // dangerous operation 
    .delete((req, res, next) => {
        res.end('Deleting the leader:' + req.params.leaderId);
    });

module.exports = leaderRouter;