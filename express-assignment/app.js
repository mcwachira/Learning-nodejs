const express = require ('express')
const path = require('path')
const app = express();


//get path from helper
const rootDir = require('./utils/path')

//get my routes

const adminRoute = require('./routes/admin')
const userRoute = require('./routes/users')


app.use(adminRoute)
app.use(userRoute)

//get route path


app.use(express.static(path.join(rootDir, 'public' )))

app.use('/', (req, res, next) => {
    res.send('hello from express')
})


app.listen(5000)