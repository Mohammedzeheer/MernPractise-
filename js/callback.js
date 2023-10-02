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
  




  ////callback
function add(number1, number2,callback)
{
    console.log(number1+number2);
    callback()
}

function display(){
    console.log(" this is display funcion")
}

add(23,24,display)