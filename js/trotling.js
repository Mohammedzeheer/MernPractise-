function throttle(func, delay) {
    let timeoutId;
    return function(...args) {
      if (!timeoutId) {
        func.apply(this, args);
        timeoutId = setTimeout(() => {
          timeoutId = undefined;
        }, delay);
      }
    };
  }
  
  const throttledPrint = throttle(() => {
    console.log('Print once every 300ms');
  }, 300);
  
  throttledPrint();
  throttledPrint();
  throttledPrint();
  