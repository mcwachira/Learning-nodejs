const express =  require('express')
const path = require('path')
const router = express.Router()

//utils path

const rootDir = require('../utils/path')

router.use('/users', (req, res, next) => {
 res.sendFile(path.join(rootDir,"views" ,'users.html'))
})


module.exports = router