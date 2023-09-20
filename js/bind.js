const person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  
  function printName(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  const boundFunction = printName.bind(person, 'Hello');
  boundFunction();
  