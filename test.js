// 1. Write a function to generate the first n numbers in the Fibonacci sequence.

// function fibo(n){
//     let i = 1;
//     let x = 0;
//     let y = 1;
//     let sum = 0;
//     while(n>=i){
//         x = y;
//         y = sum;
//         sum = x + y;
//         console.log(sum);
//         i = i + 1;
//     }
// }
// fibo(15)

//10. Write a function to check if a given string is a palindrome.

// function pali(str){
//     str = str.replace([], '').toLowerCase();
//     let rev = str.split('').reverse().join('');
//     return str === rev;
// }
// let checkstr = "kak";
// if(pali(checkstr)){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

//5.Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// function pro(nums){
//     let n = nums.length;
//     let output = new Array(n).fill(1);
//     let le = 1;
//     for(let i = 0; i<n;i++){
//         output[i] *= le;
//         le *= nums[i] 
//     }
//     let re = 1;
//     for(let j = n-1; j>=0; j--){
//         output[j] *= re;
//         re *=nums[j];
//     }
//     return output
// }
// let nums = [1,2,3,4,5];
// let num = pro(nums);
// console.log(num);

