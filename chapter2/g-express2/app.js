var express = require('express')
var app = express()
var path = require('path')
require('dotenv').comfig()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.set('html', require('ejs').renderFile)


var port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is Starting : : http://localhost:${port}`)
})