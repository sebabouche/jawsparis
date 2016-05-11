const mixpanel = require('mixpanel-browser');

let token = "";

if (process.env.NODE_ENV == 'production') {
  token = "6ecc9cfd86674de43751d9b80b747dda";
} else if (process.env.NODE_ENV == 'staging') {
  token = "28bd70982351b1692070b35096235acb";
} else {
  token = "7bc9e9c4643bcf2ae9d74dbfd43632bc";
}

console.log(token);

mixpanel.init(token);

module.exports = mixpanel;
