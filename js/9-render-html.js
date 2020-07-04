const http = require('http');
const fs = require('fs');

const server = http.createServer((req, resp) => {
  console.log('request made!');
  console.log(req.url, req.method);
  //console.log(resp);

  //set header content type
  resp.setHeader('Content-Type', 'text/html');

  let path = './views/';

  switch(req.url) {
    case '/':
      path += '9_1.html';
      break;
    case '/page2':
      path += '9_2.html';
      break;
    default:
      path += 'error_404.html';
      break;
  }

  //send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      resp.end();
    }
    else
    {
      resp.write(data);
      resp.end();
    }
  })

});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
