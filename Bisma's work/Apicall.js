let url = "https://dummyjson.com/products/1";
// saving url in variable

// making async function 
async function getData(params) {
    let res = await fetch(url)    // data nikal ky laina aur variable mey store krwna hy

    let data = await res.json()  // data ko json mey convert kro
    console.log(data)
    let Reviews = await data.reviews;
    let data1 = Reviews.map((review) => review.rating)
    console.log(data1)
}
getData();
