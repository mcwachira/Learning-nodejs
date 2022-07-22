const http = require ('http');
const fs =require('fs')

const server = http.createServer( (req, res) => {
    const url = req.url
    const method =req.method

if(url === "/"){

    res.write('<html>')
    res.write('<body> <h1> Hello users </h1> <form action="/create-user" method="POST"> <input type="text" name="message" /> <button type="submit">Submit</button></form> </body>')
    res.write('</htm>')
   return  res.end

}
if(url === "/users"){

    res.write('<html>')
    res.write('<body> <ul> <li>user 1</li> <li> user 2</li> <li>user 3</li></ul></body>')
    res.write('</htm>')
    return res.end

}
if (url === '/create-user' && method === 'POST') {
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

     
       
    console.log("hello world")
})

server.listen(8000, () => {
    console.log(`server listening on 8000...`)
});