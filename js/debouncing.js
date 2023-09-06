function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Debounce the function to execute after a 300ms pause in events
  const debouncedFunction = debounce(() => {
    console.log('Debounced function executed.');
  }, 300);
  
  // Triggering the function multiple times quickly
  debouncedFunction();
  debouncedFunction();
  debouncedFunction();
  