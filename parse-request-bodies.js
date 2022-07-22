//creating a simple server in nodejs
const routes = require('./routes')
const http = require('http');
const requestHandler = require('./routes');
const server = http.createServer(requestHandler)
server.listen(5000, () => {
    console.log(`server listening on 5000...`)
});

