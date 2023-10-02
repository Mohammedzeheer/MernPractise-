// const array=[1,2,3,4,5]
// array.push(3)
// console.log(array)

// large=array[0]
// for(i=0;i<array.length;i++)
// {
//     if(large<array[i]){
//         large=array[i]
//     }
// }
// console.log(large)

//largest in array 
// const arr = [3, 7, 2, 9, 1, 5];
// const largest = Math.max(...arr);
// console.log(largest); 


// function fact(num){
//     if(num==0){
//         return 1
//     }else{
//         return num *fact(num-1)
//     }
//   }

//   const resul1t=fact(5)
//   console.log(resul1t)


//   let c= (num)=>{
//     if(num==0){
//         return 1
//     } else
//     {
//         return num * c(num-1)
//     }
//   }

// const result2=c(5)
//   console.log(result2)


// let fact = (num) => (num === 0 ? 1 : num * fact(num - 1));
// console.log(fact(6))

// function factorial(num){
//    if(num==0){
//     return 1
//    }else{
//     return num * fact(num-1)
//    }
// }

// console.log(factorial(5))

// const fact1= (num)=>(num==0? 1 : num*fact1(num-1))
// console.log(fact1(8))

class node{
   constructor(value){
      this.value=value 
      this.next=null  
}
}


class stack{
   constructor(){
      this.top=null
      this.size=null
   }

   add(value){
      let newnode=new node(value)
      if(!this.top){
         this.top=newnode
      }
      else{
         newnode.next=this.top
         this.top=newnode
      }
      this.size++
   }

   delete(){
      if(this.top){
         this.top=this.top.next }
   }



   print(){
      let temp=this.top
      while(temp){
          console.log(temp.value);
          temp=temp.next
      }

   }

   removemid(){
      let mid=Math.floor(this.size/2)
      for(let i=0;i<=mid;i++){
         if(i==mid){
            this.top.next=this.top.next.next
         }
      } 
   }

   secondlarge(){
      let l=-Infinity
      let sl=-Infinity
      let temp=this.top
      while(temp){
         if(temp.value>l){
            l=temp.value
         }else if(temp.value>sl){
             sl=temp.value
         }
         temp=temp.next
      }
      console.log("second large" , sl);
   }

}

let l=new stack()
l.add(24)
l.add(25)
l.add(26)
l.print()
// l.removemid()
l.secondlarge()
console.log("----after delete");

l.print()





//   class node{
//     constructor(data){
//       this.data=data
//       this.next=null
//     }
//   }
//   class stack{
//     constructor(){
//       this.top=null
//       this.size=0
//     }

//     push(data){
//       let newnode=new node(data)
//       if(this.top==null)
//       this.top=newnode
//       else{
//         newnode.next=this.top
//         this.top=newnode
//       }
//       this.size++
//     }

//     pop(){
//       if(this.top){
//         this.top=this.top.next
//       }
//     }
//     removemid(){
//       let mid=Math.floor(this.size/2)
//       let i=0;
//       let temp=this.top;
//       while (temp) {
//         i++
//         if(i==mid){
//           var remove=temp.next.data
//           temp.next=temp.next.next
//         }
//         temp=temp.next
//       }
//      console.log('removemid=',remove);
//     }
//     secondlarge(){
//      let big=-Infinity
//      let second=-Infinity
//      let temp=this.top
    
//     while (temp) {
//       if(temp.data>big)
//       big=temp.data
//       else if(temp.data>second )
//       second=temp.data    
//       temp=temp.next
//     }
     
  
//      console.log('big=',big);
//      console.log('second big=',second);
//     }
//     display(){
//       let temp=this.top
//       while(temp){
//         console.log(temp.data)
//         temp=temp.next;
//       }
//     }
//   }
  
//   let newstack=new stack()
//   newstack.push(10)
//   newstack.push(20)
//   newstack.push(30)
//   newstack.push(40)
//   newstack.push(50)
//   newstack.display()
//   newstack.pop()
//   console.log("---------after pop------------");
//   newstack.display()