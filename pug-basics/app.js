const express = require('express')
const path = require('path')

const bodyParser = require('body-parser');

const app = express()

//setting our html templating engine 
app.set('view engine' , 'pug')
app.set('views', 'views')


//get path from helper
const rootDir = require('./utils/path')


//get our routes

const adminData =require('./routes/admin')
const shopRoute = require('./routes/shop')

// app.use(bodyParser.urlencoded({ extended: false }))


app.use(adminData.routes)
app.use(shopRoute)

//get route with our static files 
app.use(express.static(path.join(rootDir, '/public')))


//adding a 404 page

app.use((req,res, next) => {
    // res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
    res.status(404).render('404', {pageTitle : '404'})
} )

app.listen(3000)

// module.exports = path.dirname(process.mainModule.filename);

// module.exports = path.dirname(require.main.filename);