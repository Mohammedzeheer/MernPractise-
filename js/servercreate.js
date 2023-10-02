var fs= require('fs')
var http=require('http')

http.createServer((req,res)=>{
      res.write("hello mohammed")
      res.end()
}).listen(3000)



fs.readFile("./name.html","utf-8", (erro,data)=>{
  if(erro)
  {
      console.log("error");
  }else
  console.log(data)
})


// fs.readFile('./name.html','utf-8',function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
    
// })



// fs.writeFile('new.txt','zeheer',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("file created");
//     }
// })


// fs.appendFile('new.txt','zeheera',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("file created");
//     }
// })