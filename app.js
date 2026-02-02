// INDIANA ATWOOD

const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        // Serve HTML
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading HTML');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/styles.css') {
        // Serve CSS
        fs.readFile('styles.css', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading CSS');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } else {
        // Any other request -> 404
        res.writeHead(404);
        res.end('File not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});