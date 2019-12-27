var express = require('express')

module.exports = function(router){
    router.get('/', (req,res)=>{
        res.render('index')
    })


    router.get('/about',(req,res)=>{
        res.render('about');
    })
}