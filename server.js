var http = require('http')
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
  console.log('Connniiicted');
  var path = url.parse(request.url).pathname;

  switch(path){
    case '/':
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('SocksTut');
      break;
    case 'socket.html':
      fs.readFile(__dirname + path, function(error, data){
        if (error){
        response.writeHead(404);
        response.write('NONE SHALL PASS - 404')
        }
        else{
        }
      }
        
        }
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write('suck it, sockets');
  response.end()
});

server.listen(8001);


