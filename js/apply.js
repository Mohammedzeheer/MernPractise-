const person = {
    firstName: 'Mohammed',
    lastName: 'zeheer',
  };
  
  function printName(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  printName.call(person, ['Hello']);
  