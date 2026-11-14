// Load Node's built-in modules (no installation needed)
// http - lets us create a web server
// fs   - (File System) lets us read files from the computer
const http = require('http');
const fs = require('fs');

// Create the server.
// The function runs every time the browser sends a request.
// req (request)  - what the browser asked for (req.url is the address, e.g. "/about")
// res (response) - what the server sends back to the browser
const server = http.createServer((req, res) => {
  let file; // will hold the path of the file to send

  // Routing: choose which file to send according to the address
  if (req.url === '/') file = 'templates/page.html';                // home page
  else if (req.url === '/about') file = 'templates/about.html';     // about page
  else if (req.url === '/contact') file = 'templates/contact.html'; // contact page
  else if (req.url === '/css/style.css') file = 'css/style.css';    // the CSS file (requested by the <link> tag in the HTML)

  // If the address didn't match any route - send error 404 (page not found)
  if (!file) {
    res.writeHead(404);
    res.end('Page not found');
    return; // stop here
  }

  // Tell the browser what kind of file it gets:
  // .css file -> 'text/css', otherwise -> 'text/html'
  // (utf-8 makes all letters, including Hebrew, show correctly)
  const type = file.endsWith('.css') ? 'text/css' : 'text/html; charset=utf-8';

  // 200 = OK, the request succeeded
  res.writeHead(200, { 'Content-Type': type });

  // Read the file from the disk and send it to the browser.
  // __dirname = the folder where app.js is located
  res.end(fs.readFileSync(__dirname + '/' + file));
});

// Start the server on port 3000 (open http://localhost:3000 in the browser)
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
