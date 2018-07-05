class JphPost {
    constructor() {
    }

    getAllPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
    }

    getAllUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    }
};


// let posts = new JphPost();

// posts.getAllPosts().then((res) => {
//     return res.json();
// }).then(
//     (data) => { console.log(data) },
//     (reason) => { console.log(reason) }
// ).catch(
//     (error) => { console.log(error) }
// )
