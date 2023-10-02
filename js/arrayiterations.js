//reduce
const array1=[23,45,67,54,43];
const array2=array1.reduce((total,value)=>{return total+value })
console.log(array2);


//filter
const array3=[23,45,67,54,43];
const array4=array3.filter((value)=>value >45)
console.log(array4);

//find
const array5=[2,3,4,5,6,7,8]
const array6=array5.find((value)=>value > 5)
console.log(array6);


//foreach
const array7=[2,3,4,5,6,7]
array7.forEach((value,index)=>console.log(index,value))


//map
const array8=[1,2,3,4,5,6,7]
const array9=array8.map((value)=>value*2)
console.log(array9);

//every
const array10=[1,2,3,4]
const every=array10.every((value)=>value>2)
console.log(every);

//some
const array11=[1,2,3,4]
const some=array11.some((value)=>value>2)
console.log(some);

//includes
const array12=[1,2,3,4]
const includes=array12.includes((value)=>value = 3)
console.log(includes);


//for //here the array display
const cars=['bmw','benz','bugati']
let text;
for (let x of cars){   
    text += x +" ";
}
console.log(text);



//In    //here only index 
const car=['bmw','benz','bugati']
for (let x in car){ 
    console.log(x);
}
