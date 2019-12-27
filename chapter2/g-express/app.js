var express = require('express')
var app = express()
var router = require('./router/main.js')(app)
var path = require('path')
require('dotenv').config()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')//egs 엔진 따로 설치해줌
app.engine('html', require('ejs').renderFile)


app.get('/test', (req, res)=>{
    res.render('index', {data :{
        D1 : "조은혜님" , 
        D2 : "안녕하세요" 
    }
    })
})

var port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Sever is Starting at http://localhost:${port}`)
})