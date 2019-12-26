var http = require('http')
var aple = http.createServer()
var fs = require('fs')

var port = 3000;
aple.listen(port, ()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})

aple.on('request', (req, res)=>{
    console.log("웹에서 요청이 들어왔습니다.");

    var imgName = "horse.png"
    var infile = fs.createReadStream(imgName,{flags:'r'})
    var fileLength = 500;
    var curLength = 0;

    res.write(200, {"Content-Type":"/images/png"})

    infile.on('readable', ()=>{
        var chunk;
        while(null !== (chunk=infile.read())){
            console.log("읽어 들인 데이터 크기: " + chunk.length)
            curLength += chunk.length
            res.lwrite(chunk,'utf8',(error)=>{
                if(error){
                    console.log(error)
                }
                else{
                    console.log(`파일 부분 쓰기 완료 ${curLength}, ${fileLength}`)
                    if(curLength>=fileLength)
                    res.end()
                }
            })
        }
    })
})