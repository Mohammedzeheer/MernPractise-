const promise= require('promise')

function promisefunction(a,b){
    return new promise((resolve,reject)=>{
        if(a==0){
            reject('not allowed zero')
        }else{
            resolve(a+b)
        }
    }
    )
}

promisefunction(1,3).then((data)=>console.log(data)).catch((error)=>console.log(error)
)