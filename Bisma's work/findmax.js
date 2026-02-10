//find maximum array using reduce method
arr = [2,4,1,5,6]
let maxs = arr.reduce((max,el) =>{
    if(el > max){
        return el;
    }else{
        return max;
    }
})
console.log(maxs)