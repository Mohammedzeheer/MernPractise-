//push
const array10=[2,3,4,5,6,7,8]
array10.push(9)
console.log(array10);

//pop
const array11=[1,2,3,4,5,6,7]
array11.pop(7)
console.log(array11);

//unshift
const array12=[1,2,3,4,5,6]
array12.unshift(0)
console.log(array12);

//shift
const array13=[0,1,2,3,4,5,6]
array13.shift()
console.log(array13);

//concat
const array14=[1,3]
const array15=[2,4]
const a=array14.concat(array15)
console.log(a);

//slice
 const array16=[1,2,3,4,5,6,7]
 const slice=array16.slice(3,5) 
 console.log(slice);

//splice
const array17=[1,2,3,4]
array17.splice(3,0,5)
console.log(array17);

//reverse
const array18=[1,2,3]
array18.reverse()
console.log("reverse  "  + array18);

//sort
const array19=[5,3,2,1]
array19.sort()
console.log(array19);


var palindrome="Zeheer"
const split=palindrome.split('').reverse().join('')
console.log(split);

