// *TRIE*

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example Usage:
let trie = new Trie();
trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); // Output: true
console.log(trie.search("world")); // Output: true
console.log(trie.search("hell")); // Output: false
console.log(trie.startsWith("he")); // Output: true
console.log(trie.startsWith("wor")); // Output: false
