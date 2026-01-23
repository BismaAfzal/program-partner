// write a javascript function that return array elements larger than a number
let arr = [2,5,10,6,9]
let n = 5
function larger(arr, n){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>n){
            console.log(arr[i])
        }
    }
}
larger(arr,n);