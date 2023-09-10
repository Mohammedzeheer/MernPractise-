
// const fs = require('fs');

// const readableStream = fs.createReadStream('input.txt', 'utf8');

// readableStream.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data.`);
//   // Process the chunk of data here
// });

// readableStream.on('end', () => {
//   console.log('End of data.');
// });

// readableStream.on('error', (err) => {
//   console.error(`Error: ${err}`);
// });




const fs = require('fs');

// Create a readable stream to read from input.txt
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream to write to output.txt
const writableStream = fs.createWriteStream('output.txt', 'utf8');

// Transform the data (convert to uppercase) and write to output.txt
readableStream.on('data', (chunk) => {
  const transformedData = chunk.toString().toUpperCase();
  writableStream.write(transformedData);
});

// Notify when the read operation is complete
readableStream.on('end', () => {
  console.log('Read operation complete.');
  // Close the writable stream after writing is done
  writableStream.end();
});

// Handle errors
readableStream.on('error', (err) => {
  console.error(`Error reading: ${err}`);
});

writableStream.on('error', (err) => {
  console.error(`Error writing: ${err}`);
});

writableStream.on('finish', () => {
  console.log('Write operation complete.');
});
