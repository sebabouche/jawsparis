const mixpanel = require('mixpanel-browser');

const token = process.env.mixpanel_token || '28bd70982351b1692070b35096235acb';

mixpanel.init(token);

module.exports = mixpanel;
