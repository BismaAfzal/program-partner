// write a javascript function that return array elements larger than a number
// let arr = [2,5,10,6,9]
// let n = 5
// function larger(arr, n){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>n){
//             console.log(arr[i])
//         }
//     }
// larger(arr,n);
// write a JS function count the number of vowel in a string argument?
let str = "BismaAfzaal";
function countvowel(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(
            str.charAt(i) == "a"||str.charAt(i) == "e"||
            str.charAt(i) == "i" ||str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ){
            count++
        }
    } return count;
}
console.log(countvowel(str))