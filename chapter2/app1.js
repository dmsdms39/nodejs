var express = require('express')
var app = express()
require('dotenv').config()


var port = process.env.PORT || 3000 //env의 숫자 8080없으면 3000으로 열기
app.listen(port, ()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})

app.get('/a', function(req,res){
    res.send('<img src="horse.png" alt="경로에 문제가 있음">')
})