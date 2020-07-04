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
      resp.statusCode = 200;
      break;
    case '/page2':
      path += '9_2.html';
      resp.statusCode = 200;
      break;

    // redirect
    case '/page2-me':
      resp.statusCode = 301;
      resp.setHeader('Location', '/page2');
      resp.end();
      break;

    default:
      path += 'error_404.html';
      resp.statusCode = 404;
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
