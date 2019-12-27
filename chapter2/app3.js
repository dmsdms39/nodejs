var express = require('express')
var app = express()
var path = require('path')

require('dotenv').config()

app.set('views', path.join(__dirname,'view'));


app.use((req,res)=>{
    console.log("첫번쨰 미들웨어 요청이 들어왔습니다.")
    var userAgent = req.header('User-Agent')
    var parmName = req.query.name;

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'})
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>')
    res.write(`<div><p>User-Agent:${userAgent}</p><div>`)
    res.write(`<div><p>Param Name:${parmName}</p></div>`)
})


var port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Server is Starting at:http://localhost:%d', port)
})