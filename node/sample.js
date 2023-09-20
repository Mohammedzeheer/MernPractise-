// const fs = require('fs');

// // Asynchronously read a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// console.log('Reading file...');

// // Other code can continue executing while the file is being read


// const http= require('http')
// http.createServer((req,res)=>{
// res.write('hello')
// res.end()
// }).listen(3000)

const fs = require('fs') 

fs.writeFile('aa.txt','hello',(err)=>{
  if(err){
    console.log(err)
   }
})

fs.rename('aa.txt','bb.txt',(err,res)=>{
  console.log(res)
})