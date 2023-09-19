

// var subtractProductAndSum = function (n) {
//     n = n.toString();

//     let sum = 0;
//     let product = 1;

//     for (let i = 0; i < n.length; i++) {
//       sum += parseInt(n[i]);
//       product *= parseInt(n[i]);
//     }
//     return product - sum;
//   };

function subtractProductAndSum(n) {
    let sum=0
    let pro=1
 while(n>0){
    let r=Math.floor(n%10)
    pro *=r
    sum +=r
    n = Math.floor(n / 10);
 }
  result= pro - sum;
  return result
};

console.log(subtractProductAndSum(3456))