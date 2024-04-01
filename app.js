export default getData
// async function getData(user_id){
//     fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`).then(
//         (data) => data.json()).then(users => {
//             console.log(users)
//             fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`).then(
//                 (data) => data.json()).then(post => console.log(post))
//         });
// }

async function getData(user_id){
    const userResponse = await (await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`))
    const user = await userResponse.json()
    const postsResponse = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`))
    const posts = await postsResponse.json()
    console.log(user, posts)
}

