const express = require('express')
const path = require('path')
const router = express.Router()


const rootDir = require('../utils/path')

router.get('/admin', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'admin.html'))
})

module.exports = router