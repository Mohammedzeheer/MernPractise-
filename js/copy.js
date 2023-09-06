// Original object
const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Object copy (shallow copy)
const shallowCopy = { ...original };

// Deep copy using JSON
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying copies
shallowCopy.name = 'Jane';
shallowCopy.address.city = 'Los Angeles'; // Also changes original's address

deepCopy.name = 'Mike';
deepCopy.address.city = 'Chicago'; // Doesn't change original's address

console.log(`shallowCopy`,shallowCopy);
console.log(`deepCopy`,deepCopy);
console.log(`original`,original);
