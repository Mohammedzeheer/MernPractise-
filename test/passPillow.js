let a=[1,2,3,4,5,6,7,8,9]
let time=15;
let n=6;
let count=0;

for(let i=0;i<a.length;i++){
    count++;
    if(count==time){
        console.log(a[i]);
        break;
    }
    if(i==n){
        let c=i-1
        for(let j=c;j>0;j--){
            count ++
        }
        i=0;
    }   
}

