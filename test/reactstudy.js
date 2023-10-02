
/////-------string use state ------------------
// import * as  React from 'react'
// import {useState} from 'react'


// export default function String (){
 
//   const [text,setText]=useState('hello')
  
//   function onchange(e){
//     setText(e.target.value)
//   }

//   return (
//    <div>
//      <input value={text} onChange={onchange} type="text" />
//      <p>{text}</p>   
//    </div>
//    )
   
// }



/////-------color change  ------------------
//import * as React from 'react'
// let products=[
// { title: 'Cabbage', isFruit: false, id: 1 },
// { title: 'Garlic', isFruit: false, id: 2 },
// { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
// const listItems = products.map(product =>
//   <li
//     key={product.id}
//     style={{
//       color: product.isFruit ? 'red' : 'darkgreen'
//     }}
//   >
//     {product.title}
//   </li>
// );

// return (
//   <ul>{listItems}</ul>
// );
// }







// //---- checkbox usestate -----------------
// import { useState } from 'react';

// export default function MyCheckbox() {
//   const [liked, setLiked] = useState(true);

//   function handleChange(e) {
//     setLiked(e.target.checked);
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={liked}
//           onChange={handleChange}
//         />
//         I liked this
//       </label>
//       <p>You {liked ? 'liked' : 'did not like'} this.</p>
//     </>
//   );
// }