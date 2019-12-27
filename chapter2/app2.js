var express = require('express')
var app = express()
var path = require('path')
require('dotenv').config()



app.set('views', path.join(__dirname , 'views'))
// console.log(path.join(__dirname , 'views')) //콘솔에 path 찍기



app.use(function(req, res){
    console.log('첫번째 미들웨어에서 요청을 처리함')

    res.redirect('http://www.google.com')
})



var port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Server is Starting at:http://localhost:%d', port)
})