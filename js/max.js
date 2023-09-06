const numbers = [5, 2, 9, 1, 5, 6];
const max = Math.max(...numbers);
console.log(max); // Output: 9

const a = [5, 2, 9, 1, 5, 6];
for(let i=0;i<a.length;i++){
    if(Math.abs(a[i]-1)< Math.abs(a[i]-9)){
     a[i]=Math.abs(a[i]-1)
    }else{
        a[i]=Math.abs(a[i]-9)
    }
}
console.log(a)
