const stones= [12,11,4,5,6,3,2,1]
while(stones.length>1){
  stones.sort((a,b)=>b-a)
  console.log(stones)
  stones[1]=stones[0]-stones[1]
  stones.shift();
}

console.log(stones)