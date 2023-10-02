function firstMissingPositive(nums){
    nums.sort();

    let curPos=1; 
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==curPos) 
        curPos++;
    }

    return curPos;

}
     
let arr = [0, 10, 2,1, -10, -20]
let result =firstMissingPositive(arr);
console.log(result);