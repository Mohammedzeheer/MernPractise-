// const a = [2, 3, 4, 2, 1, 1, 4, 5, 6, 3, 3, 3, 3];

// for (let i = 0; i < a.length - 1; i++) {
//     if (a[i] !== null) {
//         let count = 1;
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 count++;
//                 a[j] = null;
//             }
//         }
//         console.log(`${a[i]} is ${count} times`);
//     }
// }


const a = [2, 3, 4, 2, 1, 1, 4, 5, 6, 3, 3, 3, 3];

// Create an empty object to store the frequencies
const frequency = {};

// Loop through the array and count the occurrences of each element
for (const num of a) {
  if (frequency[num]) {
    frequency[num]++;
  } else {
    frequency[num] = 1;
  }
}

// Display the frequencies
for (const num in frequency) {
  console.log(`${num}: ${frequency[num]}`);
}
