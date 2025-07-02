const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Docker! Hello from CI/CD world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000!');
});
// Trigger build Tue, Jul  1, 2025  6:43:53 PM
// Trigger build Tue, Jul  1, 2025  6:47:03 PM
// Trigger build Wed, Jul  2, 2025  1:04:40 PM
