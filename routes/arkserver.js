/**
 * arkserver route (API)
 * Created by kc on 27.01.16.
 */

var express = require('express');
var router = express.Router();

var api = require('../lib/arkserverapi');

/* Start the server */
router.get('/start',  (req, res) => {
  api.start((err, data) => {
    res.send('Start ' + data);
  });
});

/* Stop the server */
router.get('/stop', (req, res) => {
  api.stop((err, data) => {
    res.send('Stop ' + data);
  });
});

/* Restart */
router.get('/restart', (req, res) => {
  api.restart((err, data) => {
    res.send('Status ' + data);
  });
});

/* Details */
router.get('/details', (req, res) => {
  api.details((err, data) => {
    res.send('Status ' + data);
  });
});

/* Update */
router.get('/update', (req, res) => {
  api.update((err, data) => {
    res.send('Status ' + data);
  });
});

module.exports = router;
