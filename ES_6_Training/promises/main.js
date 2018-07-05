class WebResponse {

    getSynechronWikiLinks(url) {
        let promise1 = new Promise((resolve, reject) => {
            
            // setTimeout(function () {
            //     resolve(["tags", "address", "cities"]);
            // }, 4000);


            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function () {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response text
                    resolve(req.response);
                }
                else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(req.statusText));
                }
            };
        });

        return promise1;

    }
}

class MyClient {
    printSynechronWikiLinks(links) {
        for (let link of links) {
            console.log(link);
        }
    }
}

const webRes = new WebResponse();
const myClient = new MyClient();

webRes.getSynechronWikiLinks('https://jsonplaceholder.typicode.com/posts').then(
    (data) => {
        console.log(data)
        //myClient.printSynechronWikiLinks(data);
    },
    (reason) => { console.log(reason) }
);

