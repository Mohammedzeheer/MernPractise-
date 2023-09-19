const person = {
  firstName: 'Mohammed',
  lastName: 'zeheer',
};

function printName() {
  console.log( this.firstName + ' ' + this.lastName);
}

printName.apply(person);






// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     printName: function() {
//       console.log(this.firstName + ' ' + this.lastName);
//     }
//   };

//   person.printName.apply(person);

  // const printFullName = person.printName.call();
  // printFullName();

// function greeting(a) {
//     console.log(`Hi ${a}, I am ${this.name} and I am ${this.age} years old`);
//   }
//   const john = {
//     name: 'John',
//     age: 24,
//   };
//   const jane = {
//     name: 'Jane',
//     age: 22,
//   };
//   // Hi, I am John and I am 24 years old
//   greeting.apply(john);
//   // greeting.call(john,['hello']);