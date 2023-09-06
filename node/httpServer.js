
var http= require('http')

http.createServer(myfunction).listen(5000)

function myfunction(req,res){
    res.write('hello mohammed')
    res.end()
}