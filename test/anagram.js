///anagram question string equal checking --------

let a=['f','a','y','i','z']
let b=['y','a','f','i','z'];
let count=0;

for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
            count++
            a[i]='$'
            b[j]='#'
        }
    }
}
if(count==5){
    console.log('true')
}else{
    console.log('false');
}

////converting string to array 
// let s1 = 'fayiz';
// let s2 = 'yafis';

// let a = [];
// let b = [];

// for (let i = 0; i < s1.length; i++) {
//   a[i] = s1[i];
// }

// for (let i = 0; i < s2.length; i++) {
//   b[i] = s2[i];
// }
// let count=0

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//             count++
//             a[i]='$'
//             b[j]='#'
//         }
//     }
// }
// if(count==5){
//     console.log('true')
// }else{
//     console.log('false');
// }

