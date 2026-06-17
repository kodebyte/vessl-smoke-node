const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  if (req.url === '/up') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ app: 'vessl-smoke-node', release: 'real-push-2', node: process.version }));
}).listen(PORT, '0.0.0.0', () => console.log('listening '+PORT));
