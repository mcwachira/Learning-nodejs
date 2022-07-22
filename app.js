//creating a simple server in nodejs

const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')

    res.write('<html>')
    res.write('<body> <h1> Hello world welcome from my Nodejs Server  </h1></body>')
    res.write('<html></html>')
    res.end();

});
server.listen(5000, () => {
    console.log(`server listening on 5000...`)
});

