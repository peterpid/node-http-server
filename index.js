var http = require('http');
var fs   = require('fs');

var server = http.createServer();


server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/' || request.url === '/index.html') {
        fs.readFile('./index.html', 'utf8', function(err, data) {
        	if (err) throw err;
		    response.setHeader("Content-Type", "text/html; charset=utf-8");
        	response.write(data);
            response.end();
        });
        console.log('file written');

    } else {
    	fs.readFile('./img/404.png', function(err, data) {
        	if (err) throw err;
		    response.setHeader("Content-Type", "image/png;");
        	response.statusCode = 404;
        	response.write(data);
        	response.end();
    	});
    }
});

server.listen(8080);