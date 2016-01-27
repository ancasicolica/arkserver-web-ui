/**
 * Client side script for ark server
 * Created by kc on 27.01.16.
 */

'use strict';

// When the document is ready, attach handlers
$(document).ready(function () {
  $('#ark-start').click(startServer);

  $('#ark-restart').click(restartServer);

  $('#ark-stop').click(stopServer);

  $('#ark-details').click(showDetails);

  $('#ark-update').click(stopServer);

  // Get the status
  showDetails();
});

/**
 * Send a query to the server
 * @param url
 */
function query(url) {
  $('.btn').attr('disabled', true);
  $.ajax({url: url}).done(function (data) {
    $('#result').text(data);

  }).fail(function (err) {
    $('#result').text('Error: ' + err.statusText);
  }).always(function () {
    $('.btn').attr('disabled', false);
  });
}

// Start server
function startServer() {
  query('/arkserver/start');
}

// Restart Server
function restartServer() {
  query('/arkserver/restart');
}

// Stop the server
function stopServer() {
  query('/arkserver/stop');
}

// Show details
function showDetails() {
  query('/arkserver/details');
}

// Update Server
function stopServer() {
  query('/arkserver/update');
}
