const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 rejected'), 1000));

Promise.race([promise1, promise2])
  .then(result => {
      console.log('Result:', result); // Output: Result: Promise 2 rejected
  })
  .catch(error => {
      console.error('Error:', error); // Output: Error: Promise 2 rejected
  });

