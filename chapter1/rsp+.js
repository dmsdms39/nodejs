var hp = require('http')

var aple = hp.createServer()

var port = 3000
aple.listen(port, ()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})

aple.on('connection', (socket)=>{
    var soc = socket.address()
    console.log(`Webclient is connceted ${soc.address},${soc.port}`)
})

aple.on('request', (rqt, rsp)=>{
    console.log("웹클라이언트에서 요청이 들어왔습니다.")
    rsp.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    rsp.write("<!DOCTYPE html>")
    rsp.write("<html>")
    rsp.write("<head>")
    rsp.write("<title>응답 페이지</title>")
    rsp.write("</head>")
    rsp.write("<body>")
    rsp.write("<p>노드제이에스로부터의 응답 페이지</p>")
    rsp.write("</body>")
    rsp.write("</html>")
    
})