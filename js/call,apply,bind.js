const person={name:"mohammed",lastname:"zeheeer" ,place:"calicut"}
const person3={ fullname: function()
    {return this.name + " " + this.lastname}
 }

const result=person3.fullname.call(person)
console.log(result)



const perso={name:"mohamed ",place:"kasaragod"}
const perso2={data: function(){return this.name + this.place}}

const res=perso2.data.apply(perso)
console.log(res);


const a={name:"ridhin",place:"kannur"}
const b={fullname: function(){
    this.name + this.place
}}

const result1=b.bind(a)


var http=require('http')
var fs=require('fs')


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