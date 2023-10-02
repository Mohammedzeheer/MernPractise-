// function binarySearchRecursive(arr, find, start, end) {
//     if (start > end) {
//       return -1;
//     }
//     let mid = Math.floor(start + (end - start) / 2);
  
//     if (arr[mid] === find) {
//       return mid;
//     } else if (arr[mid] < find) {
//       return binarySearchRecursive(arr, find, mid + 1, end);
//     } else {
//       return binarySearchRecursive(arr, find, start, mid - 1);
//     }
//   }
  
//   // Example usage:
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const elementToFind = 6;
  
//   const resultIndex = binarySearchRecursive(array, elementToFind, 0, array.length - 1);
//   console.log(resultIndex);





// class node {
//     constructor(value){
//    this.value=value
//    this.next=null
//     }
// }


// class linkedlist{
//      constructor(){
//         this.head=null
//         this.tail=null
//      }


//     add(value) {
//         const newnode = new node(value)
//         if (!this.head) {
//             this.head = newnode
//             this.tail = newnode
//         }
//         this.tail.next = newnode
//         this.tail = newnode
//     }


//     middle(){
//        let mid=this.head
//        let temp= this.head
//        if(temp&&temp.next){
//         mid=mid.next
//         temp=temp.next.next
//        }
//        console.log(mid.value)
//     }


//     print(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.value)
//             curr=curr.next
//         }
//     }

//     remove(value) {
//         let curr = this.head
//         if (curr.value == value) {
//             curr=curr.next
//             return
//           }
//         while (curr) {
//             if (curr.next.value==value){
//                 curr.next=curr.next.next
//               if(!curr.next){
//                 this.tail=curr
//               }
//               return
//             }
//             curr=curr.next
//         }
//     }


//     insertafter(value,newvalue){
//         const newnode=new node(newvalue)
//         let curr=this.head
//         while(curr){
//             if(curr.value==value){
//                 if(!curr.next){
//                     curr.next=newnode
//                     this.tail=curr
//                     return 
//                 }
//                 newnode.next=curr.next
//                 curr.next=newnode           
//             }  
//             curr=curr.next        
//         }
//     }

//     insertbefore(value,newvalue){
//         const newnode=new node(newvalue)
//         let curr=this.head
//         if(curr.value==value){
//             newnode.next=curr
//             this.head=newnode
//             return
//         }
//         while(curr.next)
//         {
//             if(curr.next.value==value){
//                 newnode.next=curr.next
//                 curr.next=newnode
//                 return
//             }
//             curr=curr.next
//         }       
//     }
// }

// const list=new linkedlist()
// list.add(23)
// list.add(21)
// list.add(56)
// list.remove(21)
// list.print()

// console.log("-----------");




// // let num = [1, 2, 1, 4, 5];
// // function array1(num){
// //     for(i=0;i<num.length;i++){
// //         if(num[i]==num[i+1]){
// //             num.splice(i+1,1)
// //             i--
// //         }     
// //     }
// //     console.log(num)
// //     return num 
// // }
// // console.log(array1(num))
// // ;



// // function fact(num){
// //     if(num == 0){
// //       return 1
// //     }else{
// //       return num * fact(num-1)
// //     }
// //   }
// //  result= fact(6)
// //   console.log(result)


// const array = [2, 4,5,7,3,5]
// const string="zeheer"

// var split= string.split('')
// console.log(split)


// remove(value)
// {
//   if(!this.head)return
  
//   if(this.head.value==value)
//   {
//     this.head=this.head.next
//   }

//    let cnode=this.head
//     while(cnode){
//         if(cnode.next.value==value){
//             cnode.next=cnode.next.next
//         }
//         if(!cnode){
//             this.tail=cnode
//         }
//         cnode=cnode.next
//     }
// }


// class node {
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     construct(){
//         this.head=null
//         this.tail=null
//     }

//     add(value){
//         const newnode=new node(value)
//         if(!this.head){
//             this.head=newnode
//             this.tail=newnode
//             return
//         }
//         this.tail.next=newnode 
//         this.tail=newnode
//     }

//     print()
//     {
//         while(this.head){
//             console.log(this.head.value)
//             this.head=this.head.next
//         }
//     }


//     insertafter(value,newvalue){
//         const newnode=new node(newvalue)
//         let cnode=this.head
//         while(cnode){
//             if(cnode.value==value)
//             {
//                 if(!cnode.next){
//                     cnode.next=newnode
//                     this.tail=newnode
//                     return
//                 }
//                 newnode.next=cnode.next
//                 cnode.next=newnode
               
//                 return
//             }
//             cnode=cnode.next
//         }    
//     }

      
//     insertBefore(value,newvalue){
//         const newnode=new node(newvalue)
//         let currentnode=this.head
//         if(currentnode.value==value)
//         {
//           newnode.next=currentnode
//           this.head=newnode
//         }
//         while(currentnode.next){
//             if(currentnode.next.value==value){
//                 newnode.next=currentnode.next
//                 currentnode.next=newnode
//                 return
//             }
//             currentnode = currentnode.next
//         }
//     }

//      remove(value){
//         if(!this.head)
//         { return console.log("empty")
//        }
//        if(this.head.value==value){
//         this.head=this.head.next
//        }
//        let currentnode=this.head
//        while(currentnode){
//         if(currentnode.next.value==value){
//             currentnode.next=currentnode.next.next
//             if(!currentnode.next){
//                 this.tail=currentnode
//             }
//             return
//         }     
//        }
//        currentnode=currentnode.next
// }
// }

// const list= new linkedlist()

// list.add(23)
// list.add(24)
// list.add(25)
// list.add(27)
// // list.insertafter(27,28)
// // list.insertBefore(27,28)
// list.remove(28)
// console.log("head", list.head.value);
// console.log("tail", list.tail.value);
// list.print()

// class node {
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class Doublelinkedlist{
//      constructor(){
//         this.head=null
//         this.tail.null
//      }

//      add(value){
//         const newnode=new node(value)
//         if(!this.head){
//            this.head=newnode
//            this.tail=newnode
//            return 
//         }
//         this.tail.next=newnode
//         newnode.prev=this.tail 
//         this.tail=newnode
//      }

//     insertafter(value,newvalue)  {
//         const newnode=new node(newvalue)
//         let currentnode=this.head
//         while(currentnode){
//             if(currentnode.value==value){  
//                 currentnode.next.prev=newnode            
//                 newnode.next=currentnode.next
//                 newnode.prev=currentnode
//                 currentnode.next=newnode
//                 return
//             }          
//             if(this.tail.value==value){                  
//                 this.tail.next=newnode
//                 newnode.prev=this.tail
//                 this.tail=newnode
//                 return
//             }
//         }
//     }

// }

// //insertion sort
// const a=[4,7,1,4,9,2,3,6]
// console.log("unsorted array" ,a)
// for(i=1;i<a.length;i++){
//    let temp=a[i]
//    let j=i-1
//    while(j>=0&&a[j]>temp){
//     a[j+1]=a[j]
//     j--
//    }
//    a[j+1]=temp
// }

// console.log("sorted array",a)


// //selection sort
// const a=[4,7,1,4,9,2,3,6]
// for(i=0;i<a.length-1;i++){
//    let min=i
//    for(let j=i+1;j<a.length;j++)
//    {
//        if(a[j]<a[min]){
//         min=j
//        }    
//    }
//     if(min!=i){
//       [a[i],a[min]]=[a[min],a[i]]
//     }
// }
// console.log(a);

// //bubble sort
// const a=[4,7,1,4,9,2,3,6]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length-1-i;j++){
//         if(a[j]>a[j+1])
//         {
//             let temp=a[j]
//             a[j]=a[j+1]
//             a[j+1]=temp
//         }
//     }
// }
// console.log(a);


// //stack 
// class stack {
//     constructor(){
//         this.str=[]
//         this.string1=[]
//         this.array=[]
//         this.array1=[]
//     }

//     empty(){
//        return this.array.length===0
//     }
//     push(value){
//         this.array.push(value)
//     }

//     print(){
//         console.log(this.array)
//     }

//     pop(){
//         if(this.empty()){
//             return "empty array"
//         }
//            this.array.pop()     
//     }

//     undo(){
//             this.array1.push(this.array.pop())  
//     }

//     redo(){
//         this.array.push(this.array1.pop())
//     }

//     reverse() {
//         while (this.array.length > 0) {
//             this.array1.push(this.array.pop())
//         }
//         console.log(this.array1)
//     }

//     addString(data)  {
//       this.str.push(data)
//     }   

//     printString(){
//         console.log(this.str)
//     }

//     stringReverse(){    
//       while(this.str.length>0){
//         this.string1.push(this.str.pop())
//        }
//        let str1=this.string1.join('')
//        console.log(str1)
//     }


// }

// const l =new stack()
// l.addString("m")
// l.addString("o")
// l.addString("h")
// l.addString("a")
// l.printString()
// l.stringReverse()
// // l.push(23)
// // l.push(24)
// // l.print()
// // l.reverse()


let a=[2,3,1,5,4,3,7]

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length-1-i;j++){    
//         if(a[j]>a[j+1]){
//             let temp 
//             temp =a[j]
//             a[j]=a[j+1]
//             a[j+1]=temp
//         }
//     }
// }



// for(let i=0;i<a.length;i++){
//    let temp=a[i]
//     let j=i-1
//     while(j>=0&&a[j]>temp){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=temp
// }


// for(let i=0;i<a.length;i++){
//     let min =i
//     for(let j=i+1;j<a.length;j++){
//         if(a[j]<a[min]){
//          min =j
//         }
//     }
//     if(min!=i){
//         [a[i],a[min]]=[a[min],a[i]]
//  }
// }


// function quicksort(a){
//     if(a.length<2){
//         return a
//     }

//     let pivot=a[0]
//     let left=[]
//     let right=[]
     
//     for(let i=1;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }    
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }


function mergesort(a,lb,ub){
    if(lb<ub){
        let mid=Math.floor((lb+ub)/2)
        mergesort(a,lb,mid)
        mergesort(a,mid+1,ub)
        merge(a,lb,mid,ub)
    }
    return a
}

 function merge(a,lb,mid, ub){
     let i=lb
     let j=mid+1
      let k=lb
      let b=[]
   

      while(i<=mid&&j<=ub){
        if(a[i]<a[j]){
            b[k]=a[i]
            i++ 
        }
        else{
            b[k]=a[j]
            j++
        }
        k++
      }
      while(i<=mid){
        b[k]=a[i]
        i++
        k++
      }
      while(j<=ub){
        b[k]=a[j]
        j++
         k++
    }

    for(let c=lb;c<=ub;c++){
        a[c]=b[c]
    }

 }
console.log(mergesort(a,0,a.length-1));