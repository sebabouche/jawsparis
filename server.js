/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.set('port', port);

app.use(express.static(__dirname + '/dist'));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Server listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
