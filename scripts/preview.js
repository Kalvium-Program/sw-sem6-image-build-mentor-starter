// Teaching preview: same reference health handler, without database setup.
const http = require('node:http');
const { handle } = require('../src/routes');
const server = http.createServer((req, res) => {
  if (req.url !== '/health') {
    res.writeHead(404, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({error: 'Preview supports only /health'}));
  }
  return handle(req, res);
});
server.on('error', err => {console.error(err.code || err.message); process.exit(1);});
server.listen(3000, '0.0.0.0', () => console.log('Mentor preview listening on :3000'));
