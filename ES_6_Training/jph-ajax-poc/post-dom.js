class PostDom {
    processPostData() {
        return new Promise((resolve, reject) => {
            let postObj = new JphPost();
            let postsData = [];

            postObj.getAllPosts()
                .then(data => {
                    postsData = data;
                    //return postsData;
                    resolve(postsData)
                });
        })
    }

    processAllUsers() {
        return new Promise((resolve, reject) => {
            let allUser = new JphPost();
            let userCollection = [];

            allUser.getAllUsers()
                .then(data => {
                    userCollection = data;
                    //console.log("userCollection", data)
                    resolve(userCollection);
                })
        })
    }
}