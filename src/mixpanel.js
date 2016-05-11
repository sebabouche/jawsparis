const mixpanel = require('mixpanel-browser');

let token = "";

if (process.env.NODE_ENV == 'production') {
  token = "6ecc9cfd86674de43751d9b80b747dda";
} else {
  token = "28bd70982351b1692070b35096235acb";
}

mixpanel.init(token);

module.exports = mixpanel;
