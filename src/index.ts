import { createServer } from 'http';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain');
  res.end('Hello world!');
});

const hostname = 'localhost';
const port = Number(process.env.PORT) || 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
