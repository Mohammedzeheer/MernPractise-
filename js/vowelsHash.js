// function replaceVowelsWithHash(inputString) {
//     return inputString.replace(/[aeiouAEIOU]/g, '#');
//   }
  
//   const exampleString = "OpenAI is awesome!";
//   const result = replaceVowelsWithHash(exampleString);
  
//   console.log(result);

  

//   function replaceVowelsWithHash(inputString) {
//     let result = "";
//     for (let i = 0; i < inputString.length; i++) {
//       let char = inputString[i];
//       if ("aeiouAEIOU".includes(char)) {
//         result += "#";
//       } else {
//         result += char;
//       }
//     }
//     return result;
//   }
  
//   const exampleString = "Coding is fun!";
//   const result = replaceVowelsWithHash(exampleString); 
  
//   console.log(result);
  



function vowels(char){
    let result ="";
    for(let i=0;i<char.length;i++){
    let character = char[i]
   if("aeiouAEIOU".includes(character)){
     result += '#';
   }else{
     result += character;
   }
 } 
  return result
 }
 
 let char = "Coding is fun!";
 let print= vowels(char)
 console.log(print)
 
