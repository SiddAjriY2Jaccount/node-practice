const http = require('http');

const server = http.createServer((req, resp) => {
  console.log('request made!');
  console.log(req.url, req.method);
  //console.log(resp);

  //set header content type
  resp.setHeader('Content-Type', 'text/html');

  resp.write('<h1>You GUYS! YOU guys are the real heroes</h1>');
  resp.write('<h1>Homelander</h1>');
  resp.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
