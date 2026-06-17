const http = require('http');
// BROKEN ON PURPOSE: listen on wrong port (9999) so :3000 health check fails.
// Verifies Traefik LB healthcheck keeps this canary OUT of the pool (no 502s).
const PORT = 9999;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ app: 'vessl-smoke-node', release: 'broken' }));
}).listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT} (wrong port)`));
