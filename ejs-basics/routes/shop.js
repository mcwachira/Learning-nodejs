const express = require('express')
const path = require('path')

const router = express.Router()
const adminData = require('./admin')
//get path from helper
const rootDir = require('../utils/path')

router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', {
         prods: products,
          pageTitle: 'My Shop', 
          path: '/',
           hasProducts: products.length > 0,
        activeShop:true,
    productCss:true, })
console.log(adminData.products)

})

module.exports = router