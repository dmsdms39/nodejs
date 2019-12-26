var http = require('http')

var app = http.createServer()

var port = 3000;
app.listen(port, () => {
    console.log(`웹 서버가 시작되었습니다.: http://localhost:${port}`)
})

app.on('connection', (socket)=>{
    var addr = socket.address()
    console.log(`클라이언트가 접속했습니다. ${addr.family}`)
    console.log(addr)
})

app.on('request', (rqt, rsp)=>{
    console.log("웹클라이언트에서 요청이 들어왔습니다.")
    console.log(rqt)
})