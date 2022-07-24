const express = require('express')
const path = require('path')
const router = express.Router()


//get path from helper
const rootDir = require('../utils/path')

const products =[];

//admin add-product => get
router.get('/admin/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
    path:'/admin/add-product',
activeAddProduct:true,
formCss:true, })
  

})

//admin /add-product/ =>post
router.post('/admin/add-product', (req, res, next) => {
    console.log(req.body)
    products.push({ title: req.body  })
    res.redirect('/')
})


exports.routes =router;
exports.products = products