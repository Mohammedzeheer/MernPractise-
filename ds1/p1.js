// let a = [2, 3, 4, 5, 6, 7, 8];

// let b = a.reduce((total, value) => {
//   return total + value;
// }, 0);

// console.log(b);


// place zero where odd number 
let a = [2, 3, 4, 5, 6, 7, 8];
let b = a.map(value => {
  if (value % 2 === 1) {
    return 0;
  }
  return value;
});
console.log(b);



