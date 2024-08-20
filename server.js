const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Log your name to the console
    console.log('SOURABH');

    // Send a response to the browser
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('SOURABH');
});

// Make the server listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
