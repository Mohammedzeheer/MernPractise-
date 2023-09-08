const b = [[1,2],[2,1],[3,4],[5,6]]
const a = [[1,1],[1,1],[1,1],[5,6]]
  let count=0
for(let i=0;i<a.length-1;i++){
  for(let j=i+1;j<a.length;j++){
    if((a[i][0]==a[j][0] && a[i][1]==a[j][1])|| (a[i][0]==a[j][1] && a[i][1]==a[j][0])){
      count++
    }
  }
}
console.log(count)