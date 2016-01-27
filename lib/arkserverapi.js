/**
 *
 * Created by kc on 27.01.16.
 */

'use strict';
const execFile = require('child_process').execFile;
const settings = require('../settings.json');

module.exports = {
  /**
   * Start the server
   * @param callback
   */
  start: function (callback) {
    execFile(settings.arkserver, ['start'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      callback(null, stdout)
    });
  },

  /**
   * Restart the server
   * @param callback
   */
  restart: function(callback) {
    execFile(settings.arkserver, ['restart'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      callback(null, stdout)
    });
  },

  /**
   * Update the server
   * @param callback
   */
  update: function(callback) {
    execFile(settings.arkserver, ['update'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      callback(null, stdout)
    });
  },

  /**
   * Stop the server
   * @param callback
   */
  stop: function(callback) {
    execFile(settings.arkserver, ['stop'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      callback(null, stdout)
    });
  },

  /**
   * Show details about the server
   * @param callback
   */
  details: function(callback) {
    execFile(settings.arkserver, ['details'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      callback(null, stdout)
    });
  }
};
