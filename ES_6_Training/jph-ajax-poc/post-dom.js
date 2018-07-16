class PostDom {
  constructor() {
    this.dataLayer = new JphPost();
  }
  processPostData() {
    return new Promise((resolve, reject) => {
     // let postObj = new JphPost();
      let postsData = [];

      this.dataLayer.getAllPosts().then(data => {
        postsData = data;
        //return postsData;
        resolve(postsData);
      });
    });
  }

  processAllUsers() {
    return new Promise((resolve, reject) => {
     // let allUser = new JphPost();
      let userCollection = [];

      this.dataLayer.getAllUsers().then(data => {
        userCollection = data;
        //console.log("userCollection", data)
        resolve(userCollection);
      });
    });
  }
}
