var fs=require('fs')
const filePath = 'helo mohammed';
var http= require('http')

http.createServer((req,res)=>{
fs.readFile(`./read.html`, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }else{
        res.write(filePath)
        res.end()
    }
})
}).listen(5000)


fs.rename(`./index,html`,`./read.html`,(err)=>{
    if(err){
        console.log(`something Error`);
    }
})
