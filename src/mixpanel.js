const mixpanel = require('mixpanel-browser');

const token = '28bd70982351b1692070b35096235acb';

mixpanel.init(token);

module.exports = mixpanel;
