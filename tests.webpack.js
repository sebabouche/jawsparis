var context = require.context('./spec', true, /.js$/); // Load files in /test with filename matching * .test.js
context.keys().forEach(context);
