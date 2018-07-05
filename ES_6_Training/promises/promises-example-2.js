let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("One more Done!")
    }, 2000)
});


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Done!")
        reject("Rejected");
    }, 2000)
});



Promise.race([promise1, promise2]).then(
    (data) => {console.log("Promises Race - ", data)},
    (reason) => {console.log(reason)}
);

Promise.all([promise1, promise2]).then(
    (data) => {
        let [p1,p2]= data;
        console.log("Promises All - ", data);
        console.log("Promises All - ", p1);
        console.log("Promises All - ", p2);
    },
    (reason) => {console.log(reason)}
);