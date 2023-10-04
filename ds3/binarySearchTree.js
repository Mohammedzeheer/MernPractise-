

class node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}


class bst {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newnode = new node(value);
    if (!this.root) {
      this.root = newnode;
    } else {
      this.insert(this.root, newnode);
    }
  }

  insert(root, newnode) {
    if (newnode.value < root.value) {
      if (root.left == null) {
        root.left = newnode;
      } else {
        this.insert(root.left, newnode);
      }
    } else {
      if (root.right == null) {
        root.right = newnode;
      } else {
        this.insert(root.right, newnode);
      }
    }
  }


  constains(value) {
    return this.constainsNode(this.root, value);
  }
  constainsNode(root, value) {
    if (root == null) {
      return false;
    }
    if (root.value == value) {
      return true;
    }

    if (value < root.value) {
      return this.constainsNode(root.left, value);
    } else {
      return this.constainsNode(root.right, value);
    }
  }

  
  delete(value) {
    this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root.value) return;

    if (value < root.value) {
      root = this.deleteNode(root.left, value);
    } else {
      root = this.deleteNode(root.right, value);
    }
    if (!root.left || !root.right) {
      root = null;
    } else if (root.left == null) {
      root = root.right;
    } else if (root.right == null) {
      root = root.left;
    } else {
      const minvalue = 0;
    }
  }

  preTraversel() {
    return this.preNode(this.root);
  }
  preNode(root) {
    if (root == null) {
      return false;
    }
    console.log(root.value);
    this.preNode(root.left);
    this.preNode(root.right);
  }

  inorderTraversal() {
    return this.inorderNode(this.root);
  }
  inorderNode(root) {
    if (root == null) {
      return false;
    }
    this.inorderNode(root.left);
    console.log(root.value);
    this.inorderNode(root.right);
  }

   minimumValue(){
    let root= this.root
    while(root.left){
    root=root.left
    }
    console.log(`minimum value`,root.value);
   }

   secondLargest(){
    let root=this.root
    let sl=null
    while(root.right){
      sl=root.value
     root=root.right
    }
    console.log(`second largest`,sl)
   }
   
}

const b=new bst()
b.add(34)
b.add(23)
b.add(67)
b.add(21)
b.preTraversel()
b.inorderTraversal()
b.minimumValue()
b.secondLargest()
console.log(`Contains 68 : `, b.constains(68))
console.log(b)

