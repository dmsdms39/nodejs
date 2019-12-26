var http = require('http')
var files = require('fs')

var aple = http.createServer()

var port = 3000;
aple.listen(port, ()=>{
    console.log(`Server is starting at http://localhost:${port}`)
})

aple.on('request',(req,res)=>{
    console.log("웹에서 요청이 들어왔습니다.")

    var imgName = 'horse.png'
    var infile = files.createReadStream(imgName, {flags:"r"})//예상못한 요청시 종료r

    infile.pipe(res)
})