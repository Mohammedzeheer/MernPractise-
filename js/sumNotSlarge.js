const a=[2,5,1,2,3,9]
let large = -Infinity
let sLarge= -Infinity
let sm=Infinity
let Ssm=Infinity

for(let i in a){  
    if(large<a[i]){
       sLarge=large
       large=a[i]
    }else if(sLarge<a[i] && sLarge!=large){
        sLarge=a[i]
    } 
    if(sm>a[i]){
        Ssm=sm
        sm=a[i]
    }else if(Ssm>a[i] && Ssm!=sm){
        Ssm=a[i]
    }
}

console.log(sLarge)
console.log(Ssm)
let sum=0
for(let i in a){
    if(a[i]!=sLarge && a[i]!=Ssm){
        sum=sum+a[i]
    }
}

console.log(sum);