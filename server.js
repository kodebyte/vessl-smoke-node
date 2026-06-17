const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  if (req.url === '/up') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ app: 'vessl-smoke-node', release: 'v5-scale', node: process.version, host: require('os').hostname(), path: req.url }));
}).listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT}`));
