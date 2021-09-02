var http = require ('http');
var fs = require ('fs');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer(function (req, resp) {

    if (req.url === "/home") {
        fs.readFile("./home.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Invalid Request!');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else if (req.url === "/about") {
        fs.readFile("./about.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Invalid Request!');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else if (req.url === "/contact") {
        fs.readFile("./contact.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Invalid Request!');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

            resp.end();
        });
    } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('Invalid Request!');
        resp.end();
    }
});

server.listen(port, hostname, () => {
    console.log('The NodeJS server on port 5000 is now running...');
});
