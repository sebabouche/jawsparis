const mixpanel = require('mixpanel-browser');

let token = "";

if (__PROD__) {
  token = "6ecc9cfd86674de43751d9b80b747dda";
} else if (__STAGING__) {
  token = "28bd70982351b1692070b35096235acb";
} else {
  token = "7bc9e9c4643bcf2ae9d74dbfd43632bc";
}

mixpanel.init(token);

module.exports = mixpanel;
