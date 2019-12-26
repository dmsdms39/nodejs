var http= require('http')
var server = http.createServer()

var port = 8000

server.listen(port, ()=>{
    console.log(`웹서버가 시작되었습니다.: ${port}`)
})
