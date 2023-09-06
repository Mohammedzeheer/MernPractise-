let a=[1,2,4,2,4]

for(let i=0;i<a.length-1;i++){
    let unique=true
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
         unique= false
          break;          
    }  
    } 
      if(unique==true){
        let num= a[i]
       for(let k=i;k<a.length;k++){
        a[k]=a[k+1]    
  }   
  a[a.length-1]=num
      }  
}

console.log(a)