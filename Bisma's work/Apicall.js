// let url = "https://dummyjson.com/products/1";
// // saving url in variable

// // making async function 
// async function getData(params) {
//     let res = await fetch(url)    // data nikal ky laina aur variable mey store krwna hy

//     let data = await res.json()  // data ko json mey convert kro
//     console.log(data)
//     let Reviews = await data.reviews;
//     let data1 = Reviews.map((review) => review.rating)
//     console.log(data1)
// }
// getData();

// let url1 = "https://dummyjson.com/posts";
// async function post(){
//     let response =  await fetch(url1)
//     let post = await response.json()
//     console.log(post);
// }
// post();

let url2 = "https://dummyjson.com/quotes";
async function dummy(params) {
    let res1 = await fetch(url2)
    let quotes = await res1.json()
    console.log(quotes);
}
dummy();