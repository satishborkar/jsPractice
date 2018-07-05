function asyncTask1() {
    let promise = new Promise(function (resolve, reject) {
        console.log("asyncTask1 Promise is an progress...");

        setTimeout(() => {
            console.log("asyncTask1 Promise resoving...");
            resolve();
        }, 2000)

    });

    return promise;
};

let resPromise1 = asyncTask1();

resPromise1.then(() => {
    // will be executed only when resolve  promise.
    console.log("resPromise1 Promise Resolve & got the out put");
},
    () => {
        // will be executed only when reject  promise
        console.log("resPromise1 Promise Reject & got the reason");
    });

console.log("resPromise1 Main thread is continued...");

console.log("------------------- resPromise1 ---------------------------");
console.log(" Another code executed");

function asyncTask2() {
    let promise = new Promise(function (resolve, reject) {
        console.log("asyncTask2 Promise is an progress...");

        setTimeout(() => {
            console.log("asyncTask2 Promise rejecting...");
            reject();
        }, 0)

    });

    return promise;
};

let rejPromise2 = asyncTask2();

rejPromise2.then(() => {
    // will be executed only when resolve  promise.
    console.log("rejPromise2 Promise Resolve & got the out put");
},
    () => {
        // will be executed only when reject  promise
        console.log("rejPromise2 Promise Reject & got the reason");
    });

console.log("rejPromise2 Main thread is continued...");

console.log("------------------ rejPromise2 ----------------------------");

function asyncTask3() {
    let promise = new Promise(function (resolve, reject) {
        console.log("asyncTask3 Promise is an progress...");

        setTimeout(() => {
            console.log("asyncTask3 Promise resoving...");
            resolve("asyncTask3 This is an promise data");
        }, 2000)

    });

    return promise;
};

let resPromise3 = asyncTask3();

resPromise3.then((data) => {
    // will be executed only when resolve  promise.
    console.log(data);
    console.log("resPromise3 Promise Resolve & got the out put");

},
    () => {
        // will be executed only when reject  promise
        console.log("resPromise3 Promise Reject & got the reason");
    });

console.log("resPromise3 Main thread is continued...");
console.log("------------------- resPromise3 ---------------------------");


function asyncTask4() {
    let promise = new Promise(function (resolve, reject) {
        console.log("asyncTask4 Promise is an progress...");

        setTimeout(() => {
            console.log("asyncTask4 Promise rejecting...");
            reject("asyncTask4 Data Not Found");
        }, 0)

    });

    return promise;
};

let resPromise4 = asyncTask4();

resPromise4.then((data) => {
    // will be executed only when resolve  promise.
    console.log(data);
    console.log("resPromise4 Promise Resolve & got the out put");

},
    (reason) => {
        // will be executed only when reject  promise
        console.log(reason);
        console.log("resPromise4 Promise Reject & got the reason");
    });

console.log("resPromise4 Main thread is continued...");
console.log("------------------ resPromise4 ----------------------------");

const employees = ["A", "B", "C"];

function asyncTask5(employeeList) {
    let promise = new Promise(function (resolve, reject) {
        console.log("asyncTask5 Promise is an progress...");

        setTimeout(() => {
            console.log("asyncTask5 Promise resoving...");
            resolve(employeeList);
        }, 2000)

    });

    return promise;
};

let resPromise5 = asyncTask5(employees);

resPromise5.then((data) => {
    // will be executed only when resolve  promise.
    if (data.length < 5) {
        throw "Error";
    }
    console.log(data);
    console.log("resPromise5  Promise Resolve & got the out put");
},
    (reason) => {
        // will be executed only when reject  promise
        console.log(reason);
        console.log("resPromise5 Promise Reject & got the reason");
    }).catch(() => {
        console.log("ERROR -  not goping to continue");
    })

console.log("resPromise5 Main thread is continued...");

console.log("------------------ resPromise5 ----------------------------");