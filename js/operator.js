//ternary opererator
const num1=12
const num2=13
const check= num1>num2? "num 1 greater":"num2 greater"
console.log(check);


//math max function
array=[1,2,3,4,5]
console.log(Math.max(...array))

//math max function
array=[1,2,3,4,5]
console.log(Math.min(...array))


let y=123e5
console.log(y);



function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"


 //template iterals 
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);


//distructure
let [a,b]=[1,2]       ///array
let {c,d}={c:1,d:2}     //object
console.log(a);


//spread



