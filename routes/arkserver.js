/**
 * arkserver route (API)
 * Created by kc on 27.01.16.
 */

var express = require('express');
var router = express.Router();

var api = require('../lib/arkserverapi');

var controlChars = /[\[][0-9]*[m]/g;

/* Start the server */
router.get('/start',  (req, res) => {
  api.start((err, data) => {
    res.send('Start: ' + data.replace(controlChars, ""));
  });
});

/* Stop the server */
router.get('/stop', (req, res) => {
  api.stop((err, data) => {
    res.send('Stop: ' + data.replace(controlChars, ""));
  });
});

/* Restart */
router.get('/restart', (req, res) => {
  api.restart((err, data) => {
    res.send('Restart: ' + data.replace(controlChars, ""));
  });
});

/* Details */
router.get('/details', (req, res) => {
  api.details((err, data) => {
    res.send('Details: ' + data.replace(controlChars, ""));
  });
});

/* Update */
router.get('/update', (req, res) => {
  api.update((err, data) => {
    res.send('Update: ' + data.replace(controlChars, ""));
  });
});

module.exports = router;
