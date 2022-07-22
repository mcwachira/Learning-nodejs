const fs = require('fs')

const requestHandler = (req, res) => {
    const method = req.method
    const url = req.url

    if (url === '/') {
        res.write('<html>')
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"/> <button type="submit">Submit</button></form></body>')
        res.write('<html></html>')
        return res.end();

    }

    if (url === '/message' && method === 'POST') {
        //getting data from my request
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log(parsedBody)
            // fs.writeFileSync('message.txt',message) //blocks code execution until the file is executed 
            fs.writeFile('message.txt', message, error => { //blocks code execution until the file is executed by using a cALLBACK FUNCTION
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            })


        })


    }


    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<body> <h1> Hello world welcome from my Nodejs Server  </h1></body>')
    res.write('<html></html>')
    return res.end();


}

module.exports = requestHandler