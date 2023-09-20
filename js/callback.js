function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Task is done!");
      callback(); // This calls the callback function
    }, 2000); // Simulating an asynchronous task that takes 2 seconds
  }
  
  function afterTaskIsDone() {
    console.log("Callback function executed!");
  }
  
  // Call doSomethingAsync and pass afterTaskIsDone as the callback
  doSomethingAsync(afterTaskIsDone);
  
  console.log("Waiting for the task to complete...");
  