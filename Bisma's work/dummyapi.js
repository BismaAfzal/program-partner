let url = "https://dummyjson.com/products"
async function product(params) {
    let res = await fetch(url)
    let pro = await res.json()
    console.log(pro);
}
product()