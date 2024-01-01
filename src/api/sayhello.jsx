async function sayhello(){
    const promise=await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return promise.json()
}
export default sayhello;