let originalObject = {
    a: 1,
    b: {
      c: 2,
      d: 3
    }
  };
  
  // Creating a deep copy
  let copiedObject = JSON.parse(JSON.stringify(originalObject));
  
  // Modifying the copied object
  copiedObject.b.c = 10;
  
  console.log(originalObject.b.c); // Output: 2
  console.log(copiedObject.b.c);   // Output: 10
  