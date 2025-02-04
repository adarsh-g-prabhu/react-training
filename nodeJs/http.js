const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Thala</h1>')
        res.end('<h1>Welcome to the Home Page!</h1>');
        
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Us</h1><p>We are a cool company.</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h2>Page not found</h2>');
    }
});

server.listen(3000, (req) => {
    console.log(req)
    console.log('Server running at http://localhost:3000/');
});
