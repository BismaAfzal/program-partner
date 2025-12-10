// let products = [
//     {
//         name: "sarfraz",
//         id: 123,
//     },
//     {
//         name: "bisma",
//         id: 234,
//     }
// ]
// let iter = products.map((product)=>{
//     console.log(product.name)
//     console.log(product.id)
// })
// console.log(iter)

let obj = {
    products: [
        {
            id: 234,
            rollno: 333,
        }
    ],
    total: 5
}
let output = obj.products.map((product)=>{ // ye arrow function hy jo product hy ye ik event hy jis sy value nikalty hy
    // 

    //dot map method of array 
    console.log(product.id)
})
console.log(output)
