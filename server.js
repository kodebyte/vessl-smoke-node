const http = require('http');
// v3 BROKEN ON PURPOSE: listen on the wrong port so the :3000 health check fails.
// Tests that Vessl's canary gate blocks promotion and keeps v2 live.
const PORT = 9999;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ app: 'vessl-smoke-node', release: 'v3-broken', node: process.version }));
}).listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT} (wrong port on purpose)`));
