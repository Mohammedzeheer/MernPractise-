class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            const sameKey = bucket.find((item) => item[0] === key)

            if (sameKey) {
                sameKey[1] = value
            }
            else {
                bucket.push([key, value])
            }
        }
    }

      
    insert(key, value) {
      const index = this.hash(key);
      if (!this.storage[index]) {
        this.storage[index] = [];
      }
      this.storage[index].push([key, value]);
    }
    
    get(key) {
        const index = this.hash(key)

        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find((item) => item[0] === key)

            if (sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)

        const bucket = this.table[index]

        if (bucket) {
            const sameKey = bucket.find((item) => item[0] === key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new hashTable(50)

table.set("name", "ridin")
table.set("mane", "mizhi")
table.set("district", "kannur")
table.set("age", 20)

// table.display()
console.log("------------------------");
// console.log(table.get("age"));
table.remove("age")
table.display()
// console.log(table.get("age"));



// class HashTable {
//     constructor(size) {
//       this.size = size;
//       this.storage = new Array(size);
//     }
  
//     hash(key) {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//         hash += key.charCodeAt(i);
//       }
//       return hash % this.size;
//     }
  
//     insert(key, value) {
//       const index = this.hash(key);
//       if (!this.storage[index]) {
//         this.storage[index] = [];
//       }
//       this.storage[index].push([key, value]);
//     }
  
//     get(key) {
//       const index = this.hash(key);
//       if (this.storage[index]) {
//         for (let i = 0; i < this.storage[index].length; i++) {
//           const [storedKey, value] = this.storage[index][i];
//           if (storedKey === key) {
//             return value;
//           }
//         }
//       }
//       return undefined;
//     }
  
//     remove(key) {
//       const index = this.hash(key);
//       if (this.storage[index]) {
//         this.storage[index] = this.storage[index].filter(
//           ([storedKey, _]) => storedKey !== key
//         );
//       }
//     }
//   }
  
//   // Example Usage
//   const myHashTable = new HashTable(10);
//   myHashTable.insert('name', 'John Doe');
//   myHashTable.insert('age', 30);
  
//   console.log(myHashTable.get('name')); // Output: John Doe
//   console.log(myHashTable.get('age')); // Output: 30
  
//   myHashTable.remove('age');
//   console.log(myHashTable.get('age')); // Output: undefined
  