function CalculatePi(loop) {
    // var c = parseInt(loop);
    // var f = parseFloat(loop);
    // var n=1;

    // //these errors will need more work…
    // if (isNaN(c) || f != c ) {
    //   throw("errInvalidNumber");
    // } else if (c<=0) {
    //   throw("errNegativeNumber");
    // }

    // for (var i=0,Pi=0;i<=c;i++) {
    //   Pi=Pi+(4/n)-(4/(n+2));
    //   n=n+4;
    // }
    // self.postMessage({'PiValue': Pi});

    var c = parseInt(loop);
    var f = parseFloat(loop);
    var n = 1;

    if (isNaN(c) || f != c) {
        postMessage({ 'type': 'error', 'code': 'errInvalidNumber' });
        return;
    } else if (c <= 0) {
        postMessage({ 'type': 'error', 'code': 'errNegativeNumber' });
        return;
    } else {
        for (var i = 0, Pi = 0; i <= c; i++) {
            Pi = Pi + (4 / n) - (4 / (n + 2));
            n = n + 4;
        }
        self.postMessage({ 'type': 'data', 'PiValue': Pi });
    }
    //...at the end of the CalculatePi() function
    //we have to add the 'data' message type to differenciate 
    //from errors
}
//wait for the start 'CalculatePi' message
//e is the event and e.data contains the JSON object
self.onmessage = function (e) {
    CalculatePi(e.data.value);
}