const fs = require('fs');

// Asynchronously read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log('Reading file...');

// Other code can continue executing while the file is being read
