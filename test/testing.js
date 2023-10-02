//  let a=[7,5,1,8,2,9,3]
//  for(let i=0;i<a.length;i++){
//     let min=i
//     for(j=i+1;j<a.length;j++){
//        if(a[j]<a[min]){
//           min=j
//        }  
//     }
//     if(min!=i){
//         [a[i],a[min]]=[a[min],a[i]]
//     }
//  }

//  console.log(a);

// class node{
//  constructor(value){
//     this.value=value
//     this.next=null
//  }
// }
//  class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }

//   enque(value){
//     let newnode=new node(value)
//     if(this.front==null){
//         this.front=newnode
//         this.rear=newnode
//         return
//     }
//     this.rear.next=newnode 
//     this.node=newnode 
//   }

//   deque() {
//     if (this.front === null) {
//       return "Empty queue";
//     }
  
//     this.front = this.front.next;
  
//     if (this.front === null) {
//       this.rear = null;
//     }
//   }
  
   
  

//    print (){
//     while(this.front){
//         console.log(this.front.value);
//         this.front=this.front.next     
//     }
//    }
// }

// let q=new queue()
// q.enque(34)
// q.enque(35)
// q.print()
// console.log("hello");
// q.enque(36)
// q.print()
// q.deque()
// q.print()

// class node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         }
// }

// class stack{
//     constructor(){
//      this.top=null
//     }

//     add(value){
//         let newnode=new node(value)
//       if(!this.top){
//         this.top=newnode
//         return
//       }
//       this.top.next=newnode
//       newnode=this.top
//     }

//     pop(){
//        if(this.top){
//         this.top==null
//        }
//     }    
    
//     display(){
//         while(this.top){
//             console.log(this.top.value);
//             this.top=this.top.next
//         }

//     }
// }

// const l=new stack()
// l.add(32)
// l.add(33)
// l.display()
// l.pop()
// l.display()



class haashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let hashvalue=0
        for(let i=0;i<key.length;i++){
            hashvalue+=key.charCodeAt(i)
        }
        return hashvalue%this.size
    }


    set(key,value){
        let index=this.hash(key)
      let bucket= this.table[index]
      if(!bucket){
        this.table[index]=[[key,value]]
      }
      else{
        let samekey=bucket.find((item)=> item[0]===key)
        if(samekey){
            samekey[1]=value
        }else{
            bucket.push([key,value])
        }
      }
    }

    // get(key){
    //     let index=this.hash(key)      
    //     return this.table[index]
    // }

     get(key){
        let index=this.hash(key)      
        let bucket= this.table[index]

        if(bucket){
            let samekey=bucket.find((item)=> item[0]===key)
            if(samekey){
                return samekey[1]
            }
        }
    }

     remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
    if(bucket){
        let samekey=bucket.find((item)=>item[0]===key)
        if(samekey){
            bucket.splice(bucket.indexOf(samekey),1)
        }
    }
     }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }       
        }
    }

}

let table=new haashtable(50)

table.set("name","mohammed")
table.set("mane","zeheer")
table.set('age',20)
console.log(table.get('mane'));
table.print()
