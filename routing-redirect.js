//creating a simple server in nodejs
const fs = require('fs')
const http = require('http');
const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"/> <button type="submit">Submit</button></form></body>')
        res.write('<html></html>')
        return res.end();

    }

    if(url === '/message'  && method === 'POST'){
            fs.writeFileSync('message.txt', 'dummy text')
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end();

    }


    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<body> <h1> Hello world welcome from my Nodejs Server  </h1></body>')
    res.write('<html></html>')
    return res.end();

   

});
server.listen(5000, () => {
    console.log(`server listening on 5000...`)
});

