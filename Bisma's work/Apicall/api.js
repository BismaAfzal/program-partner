let url1 = "https://dummyjson.com/posts";
async function getPost(params) {
    let res = await fetch(url1)
    let data = await res.json()
    data.posts.map((post)=>{
        console.log(post.id)
        console.log(post.title)
    })
}
getPost()
