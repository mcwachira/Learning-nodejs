
const express =  require('express');

const app = express();


app.use((req, res, next) => {
    console.log('middleware')
    next() //allows the request to continue to the next line
})


app.use((req, res, next) => {
    console.log('middleware')
    res.send('hello from html')
})


app.listen(3000)