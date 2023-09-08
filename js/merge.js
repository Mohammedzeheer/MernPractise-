const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

function merge(nums1, nums2) {
    let l = nums1.length - 1;
    let c = [];
    for (let i = 0; i < nums1.length; i++) {
        c[i] = nums1[i];
    }
    for (let j = 0; j < nums2.length; j++) {
        c[l + j] = nums2[j];
    }
    c.sort((a, b) => a - b); 
    return c;
}

console.log(merge(nums1, nums2));  
