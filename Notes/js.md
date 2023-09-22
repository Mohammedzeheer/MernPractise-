------------------------------  JAVASCRIPT  ---------------------------------
 JAVASCRIPT

  JavaScript is a high-level, interpreted programming language primarily used 
  for creating dynamic and interactive web content. It runs on the client-side 
  (in web browsers) and server-side (with Node.js).

-----------------------------------------------------------------------------

 VAR , LET ,CONST

  var: Older, has scope issues, avoid using.
  let: Modern, scoped within blocks, can be reassigned.
  const: Like let, but value can't be changed after set.

-----------------------------------------------------------------------------

 EVENT LISTENER 

  An event listener is a function that waits for and responds to 
  specific events triggered by user interactions or system actions.

-----------------------------------------------------------------------------
 SHALLOW COPY

  A shallow copy of an object or array creates a new object or array, 
  but the nested objects or arrays within the original are still referenced 
  in the copied object. In other words, changes to nested elements in the copied
  object will affect the original object and vice versa.

          const a = {
             name: 'zeheer',
             details: {
             place: 'ksd'
             }
          };
  

       const b=a
       b.details.place='kannur'
       console.log(a)

 DEEP COPY

  A deep copy of an object or array creates a completely new copy where both 
  the top-level object and all nested objects or arrays are duplicated. Changes 
  in the deep copied object will not affect the original object or any of its 
  nested elements.

     npm install rfdc
     const rfdc = require('rfdc')();

	const originalObject = {
 	 name: 'zeheer',
 	 details: {
  	  place: 'ksd'
  	}
	};

	const deepCopy = rfdc(originalObject);

	console.log(deepCopy);


-----------------------------------------------------------------------------

 CALL
  call is a JavaScript method that invokes a function with a specific this value 
  and individual arguments.

    const person = {
       firstName: 'John',
       lastName: 'Doe',
    };

    function printName() {
       console.log(this.firstName + ' ' + this.lastName);
    }

    printName.call(person);


 APPLY
  apply is a JavaScript method that invokes a function with a specific this value 
  and an array as arguments.


  const person = {
     firstName: 'John',
     lastName: 'Doe',
   };

   function printName(greeting) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
    }

   printName.apply(person, ['Hello']);



 BIND
  bind is a JavaScript method that creates a new function with a predefined this 
  value & optional pre-filled arguments,without executing the function immediately.


-----------------------------------------------------------------------------

 CURRYING
  Currying is a technique in JavaScript where a function with multiple arguments
  is transformed into a sequence of functions, each taking a single argument.

  eg:-
  function currying(a){
     return function(b){
         return a+b
      }
  }
  let result= currying(3)(6)
  console.log(result)

-----------------------------------------------------------------------------

 CLOSURE
  A closure is the combination of a function bundled together 
  with references to its surrounding state (the lexical environment).

     Applications of Closures:-
         Encapsulation and Information Hiding
         Memoization
         Functional Programming
         Callback Functions

     Drawbacks of Closures:-
         Binding Issues
         Performance Overhead
         Debugging Complexity
         Garbage Collection Challenges

-----------------------------------------------------------------------------

 MEMOIZATION
  Memoization is an optimization technique, similar to caching. 
  It works by storing the previous results of a function call and 
  using those results the next time the function runs

-----------------------------------------------------------------------------

 SHADOWING
  shadowing occurs when a variable declared in a certain scope (e.g. a local variable)
  has the same name as a variable in an outer scope (e.g. a global variable).

  Eg:
  const x = 10;
  function example() {
     const x = 20; // This variable shadows the outer 'x'
     console.log(x); // Prints 20, the inner 'x'
  }
  example();
  console.log(x); // Prints 10, the outer 'x'

-----------------------------------------------------------------------------

 PROTOTYPE
  Prototype is an object property in JavaScript that allows objects to inherit
  methods and properties from other objects.

-----------------------------------------------------------------------------

 GENERATOR FUNCTION
  Generator functions are special functions in JavaScript that can be paused and resumed,
  allowing for iterable sequences to be generated.
   
  Eg
   function* evenNumberGenerator() {
     let num = 0;
     while (true) {
       yield num;
       num += 2;
     }
   }

   const evenIterator = evenNumberGenerator();

   console.log(evenIterator.next().value); // 0
   console.log(evenIterator.next().value); // 2
   console.log(evenIterator.next().value); // 4

-----------------------------------------------------------------------------

 ANONYMOUS FUNCTION
  Anonymous functions are functions without a specified name, 
  often used as inline,arraw or callback functions.

-----------------------------------------------------------------------------

 RECURSIVE FUNCTION
  Recursive functions are functions that call themselves to repeat 
  a task until a certain condition is met

-----------------------------------------------------------------------------

 SINGLE THREAD AND MULTIPLE THREAD 

  Single thread: Executes one task at a time in a sequential manner.
  Multi-thread: Executes multiple tasks simultaneously in parallel threads.

-----------------------------------------------------------------------------

 PRIMITIVE AND NON PRIMITIVE 

  Primitive data types (e.g., numbers, strings) store their values directly, 
  non-primitive types (e.g., objects, arrays) store references to their values in 
  memory.

-----------------------------------------------------------------------------

 INVOKED FUNCTION 
  An invoked function is a function that is executed or called to perform its 
  defined tasks.

-----------------------------------------------------------------------------

 FIRST CLASS FUNCTION
  first-class functions refer to the concept of treating functions as regular values. 
  This means functions can be assigned to variables, passed as arguments to other functions, 
  and returned as values from other functions.

  Eg: CALLBACK
      ARROW FUNCTION
    

    * Assigning Functions to Variables:-
         const greet = function(name) {
         console.log("Hello, " + name + "!");
         };


    * Passing Functions as Arguments:-
         function applyOperation(a, b, operation) {
         return operation(a, b);
         }

         function add(a, b) {
             return a + b;
         }

         const result = applyOperation(5, 3, add);

-----------------------------------------------------------------------------

 CALLBACK HELL 

  Callback hell refers to the situation in asynchronous programming when 
  multiple nested callbacks make the code difficult to read and maintain.

-----------------------------------------------------------------------------

 CALLBACK

  A callback is a function that is passed as an argument to another function 
  and is executed when a certain event or task is completed.

-----------------------------------------------------------------------------

 PROMISE
  A Promise in JavaScript is an object used to handle asynchronous operations
  and manage their results using methods like then() and catch()

   It has three states: 
    pending(Initial State), fulfilled (resolved), and rejected.

-----------------------------------------------------------------------------

 LITERALS

  Literals are directly written values in code, like numbers or strings.

  TYPES:
   Numeric literals: Representing numbers, such as integers or floating-point values.
   String  literals: Sequences of characters, enclosed in single or double quotes.
   Boolean literals: Representing true or false values.

-----------------------------------------------------------------------------

 PURE FUNCTION 

  A pure function always gives the same output for the same input and doesn't have 
  any side effects or rely on external data.

  Eg:
  function add(a, b) {
      return a + b;
  }

-----------------------------------------------------------------------------

 INPURE FUNCTION 

  An impure function doesn't consistently give the same output for the same 
  input and might have side effects that affect external things.

  Eg: 
  let total = 0;

  function addToTotal(amount) {
      total += amount; // Modifying external state
      console.log("Total is now: " + total); // Side effect
  }

-----------------------------------------------------------------------------

 EVENT DELEGATION

  Attaching a single event listener to a parent element to handle event 
  for multiple child elements. This simplifies code and is efficient,
  especially for dynamic content.

  Eg:

  <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
  </ul>

  document.getElementById('list').addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          console.log('Clicked on: ' + event.target.textContent);
      }
  });


-----------------------------------------------------------------------------

 EVENT FLOW

  Sequence in which events move through the DOM

  Capturing Phase: Events start at the root and move down to the target.
  Target Phase: The event reaches the target element.
  Bubbling Phase: The event moves from the target back up to the root.

  Eg:
  document.getElementById('parent').addEventListener('click', function(event) {
      console.log('Parent clicked');
  }, true); // true for capturing phase

  document.getElementById('child').addEventListener('click', function(event) {
      console.log('Child clicked');
  });

-----------------------------------------------------------------------------
 PROMICE RACE

  Promise.race() takes an array of promises and returns a new promise that settles 
  as soon as the first promise in the array settles (either resolves or rejects).

  Eg:
  const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));
  const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 rejected'), 1000));

  Promise.race([promise1, promise2])
    .then(result => {
        console.log('Result:', result); // Output: Result: Promise 2 rejected
    })
    .catch(error => {
        console.error('Error:', error); // Output: Error: Promise 2 rejected
    });

-----------------------------------------------------------------------------

 PROMISIFY
  Promisifying in JavaScript means converting functions that use callbacks for 
  asynchronous operations into functions that return Promises. This makes it 
  easier to work with asynchronous code using modern Promise-based patterns.

-----------------------------------------------------------------------------
 PROMISE ALL
  Promise.all() takes an array of promises and returns a new promise that resolves 
  with an array of their resolved values, maintaining order. If any promise in the 
  array rejects, the whole Promise.all() rejects.

  Eg:
  const promise1 = Promise.resolve(1);
  const promise2 = Promise.resolve(2);
  const promise3 = Promise.resolve(3);

  Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // Output: [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });

-----------------------------------------------------------------------------

 PROMISE ANY 

  Promise.any() takes an array of promises and returns a new promise that 
  resolves with the first resolved promise's value. If all promises reject, 
  it rejects with an array of rejection reasons.

  Eg:
  const promise1 = Promise.reject('Error 1');
  const promise2 = Promise.resolve('Success');
  const promise3 = Promise.reject('Error 3');

  Promise.any([promise1, promise2, promise3])
    .then(value => {
        console.log(value); // Output: Success
    })
    .catch(errors => {
        console.error(errors); // Output if all promises reject: ["Error 1", "Error 3"]
    });

-----------------------------------------------------------------------------

  NULLISH COALISCO

  The nullish coalescing operator (`??`) is used to provide a default 
  value only when a value is `null` or `undefined`. 
  It avoids using falsy values like empty strings or `0` as defaults.

  Eg: 
  const name = null;
  const defaultName = name ?? 'Unknown';

  console.log(defaultName); // Output: Unknown

-----------------------------------------------------------------------------

 TERNARY OPERATOR 

  The ternary operator (`? :`) is a concise way to choose between two values 
  based on a condition. It's like a short if-else statement.

  Eg:
  const age = 18;
  const isAdult = age >= 18 ? 'Yes' : 'No';

  console.log(isAdult); // Output: Yes

-----------------------------------------------------------------------------

 FUNCTION COMPOSITION

  Function composition is combining multiple functions to create a new function. 
  The output of one function becomes the input of the next. 
  It allows you to create complex operations by chaining simple functions together.

  Eg:
  // Three simple functions
  const add = x => x + 2;
  const double = x => x * 2;
  const subtract = x => x - 5;

  const composedFunction = x => subtract(double(add(x)));

  console.log(composedFunction(10)); // Output: 17

-----------------------------------------------------------------------------

 IMMEDIATE INVOKED FUNCTION 

   An IIFE (Immediately Invoked Function Expression) is a JavaScript function that's
   defined and run immediately after creation. It's used to create private scopes 
   and execute code right away.

  Example:

  (function() {
      console.log('IIFE executed');
  })();

  // Output: IIFE executed

-----------------------------------------------------------------------------

 HIGHER ORDER FUNCTION 

  A higher-order function is a function that either accepts functions as arguments 
  or returns functions. It's used to enhance code flexibility and modularity.

  Eg:
  // Higher-order function that takes a function as an argument
  function applyOperation(x, y, operation) {
      return operation(x, y);
  }

  function add(a, b) {
      return a + b;
  }

  function subtract(a, b) {
      return a - b;
  }

  let result1 = applyOperation(5, 3, add);      // Output: 8
  let result2 = applyOperation(5, 3, subtract); // Output: 2

-----------------------------------------------------------------------------

 OBJECT FREEZE 
  
   Object.freeze() makes an object's properties unchangeable, preventing additions,
   modifications, or deletions.

  Example:
  const obj = { name: 'John' };
  Object.freeze(obj);

  obj.age = 30; // No effect
  console.log(obj.age); // Output: undefined

-----------------------------------------------------------------------------

 EVENT LOOP 

   Manages the execution of tasks in a non-blocking manner, 
   handling asynchronous operations in JavaScript.

  The event loop in JavaScript works like this:

   1- Code execution starts in the call stack.
   2- Asynchronous tasks are handed off to the Web APIs.
   3- When tasks finish, their callbacks are put in the callback queue.
   4- The event loop continuously checks the queue.
   5- If the call stack is empty, a callback is moved from the queue to the stack.
   6- The callback executes, potentially triggering more tasks.


-----------------------------------------------------------------------------

 SET VS MAP

  Set and Map are collection data structures.are built-in objects that 
  allow you to store and manage collections of data, but they serve different purposes.

  ARRAY allow duplicate elements and maintain order, 
  while SETS don't allow duplicates.

 Set:
  A Set is a collection of unique values, which means that no value can 
  appear more than once in a set. It's useful for storing a list of distinct 
  values and is often used when you need to quickly check for the existence 
  of a specific value in a collection.

     const uniqueNumbers = new Set();

     uniqueNumbers.add(1);
     uniqueNumbers.add(2);
     uniqueNumbers.add(2); // This won't be added since it's a duplicate

     console.log(uniqueNumbers); // Output: Set { 1, 2}
     console.log(uniqueNumbers.has(2)); // Output: true


 Map:
  A Map is a collection of key-value pairs, where each key is associated with a value. 
  It's useful when you need to store and retrieve data based on a specific identifier (key).
  Unlike objects, Map allows any data type to be used as a key, and the order of keys is 
  preserved.

     const userRoles = new Map();

     userRoles.set('John', 'Admin');
     userRoles.set('Alice', 'Editor');

     console.log(userRoles.get('John')); // Output: Admin
     console.log(userRoles.size); // Output: 2

-----------------------------------------------------------------------------
 WEAK SET (WeakSet)
  Collection of objects that allows automatic garbage collection when objects are no longer used.

 WEEK MAP (WeakMap): 
  Collection of key-value pairs with automatic garbage collection for both keys and their values.

-----------------------------------------------------------------------------
 UNDEFIND
  Represents a variable without a value. Occurs when a variable is declared 
  but not assigned.

  Example:
          let value;
          console.log(value);  // Output: undefined

 NULL
  Represents an intentional absence of value. Used when you want to indicate 
  that a variable has no value.

  Example:
         let data = null;
         console.log(data);  // Output: null

-----------------------------------------------------------------------------

 CALL
  Invokes a function and sets its this context, followed by individual arguments.

  Example:
  function greet(name) {
      console.log(`Hello, ${name}! I'm ${this.title}`);
  }

  const person = { title: 'Mr.' };

  greet.call(person, 'John');

------------------------------------

 APPLY
  Invokes a function with a specified this context and an array-like object as arguments.

  Example:

  function add(a, b) {
      return a + b;
  }

  const numbers = [5, 3];
  const sum = add.apply(null, numbers);

-------------------------------------

 BIND 
  Creates a new function with a fixed context (this) and optional initial arguments.

  Example:

  function logInfo(message) {
      console.log(`${this.name}: ${message}`);
  }

  const user = { name: 'Alice' };
  const logForUser = logInfo.bind(user);
  logForUser('Logged in');

-----------------------------------------------------------------------------

 ARRAY METHOD

  MAP : The map method in JavaScript creates a new array by applying a function to 
        each element of an existing array.

	Eg: const array= [1,2,3,4,5,6]
        const makeDouble= array.map((num)=>num*2)
        console.log(makeDouble)

  FOREACH:  The forEach method in JavaScript iterates over each element in an array 
            and applies a provided function to each element.It's useful for performing 
            an action on each element without creating a new array.

-----------------------------------------------------------------------------

 OPTIONAL CHAINING
  Optional chaining in JavaScript (?.) lets you safely access properties and methods of 
  potentially null or undefined values without causing errors. If the value is 
  null or undefined, the expression short-circuits and returns undefined.

-----------------------------------------------------------------------------

 TROTTLING 
  Throttling in JavaScript is like setting a timer to control how often a function can run. 
  It makes sure the function runs at most once within a certain time period, even if it's 
  triggered more frequently. This is useful for preventing functions from running too often 
  and slowing down a webpage.

 DEBOUNCING
  Debouncing in JavaScript delays the execution of a function until a brief pause occurs in
  a series of triggering events. It helps prevent rapid and unnecessary function calls,
  which can be useful for optimizing performance, especially with actions like resizing or typing.

-----------------------------------------------------------------------------

 DIFER (difer)
  HTML <script> Tag with defer Attribute: When using <script> with defer in HTML, 
  the script is executed after the HTML content is parsed, allowing content to 
  render without being blocked by the script.

       <script src="myscript.js" defer></script>

  Defer Function Execution: Using setTimeout, you can delay the execution of a function, 
  which is helpful for controlling when code runs, like waiting before performing an action.


-----------------------------------------------------------------------------

EVENT POOLING

  Event pooling in JavaScript means reusing event objects to save memory and improve performance. 
  When an event happens, instead of creating a new event object every time,
  the system can reuse existing ones. This happens automatically in web browsers, 
  making event handling more efficient. Developers usually don't need to manage this process themselves.

   document.addEventListener('click', function(event) {
    console.log(event); // The same event object is reused for every click event
  });



-------------------------- MOHAMMED ZEHEER------------------------------------