function ClCounter(cntBy) {
    var count = 0;
    return {
        next: function () {
            return count += cntBy;
        },
        prev: function () {
            return count -= cntBy;
        }
    };
}

function FnCounter(cntBy) {
    var count = 0;

    this.next = function () {
        return count += cntBy;
    };

    this.prev = function () {
        return count -= cntBy;
    };
}

var Synechron;

(function (Synechron) {
    function Counter(cntBy) {
        this.count = 0;
        this.cntBy = cntBy;
    }

    Counter.prototype.next = function () {
        return this.count += this.cntBy;
    }

    Counter.prototype.prev = function () {
        return this.count -= this.cntBy;
    }

    Synechron.PtCounter = Counter;
})(Synechron = Synechron || {});

class CCounter {
    constructor(cntBy) {
        this.count = 0;
        this.cntBy = cntBy;
    }

    next() {
        return this.count += this.cntBy;
    }

    prev() {
        return this.count -= this.cntBy;
    }
}

function Test() {
    var clStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = ClCounter(i);
    }
    var clEnTime = new Date();

    var fnStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new FnCounter(i);
    }
    var fnEnTime = new Date();

    var ptStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new Synechron.PtCounter(i);
    }
    var ptEnTime = new Date();

    var cStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new CCounter(i);
    }
    var cEnTime = new Date();

    var clTime = clEnTime.getTime() - clStTime.getTime();
    var fnTime = fnEnTime.getTime() - fnStTime.getTime();
    var ptTime = ptEnTime.getTime() - ptStTime.getTime();
    var cTime = cEnTime.getTime() - cStTime.getTime();

    console.log("Closure: ", clTime);
    console.log("Function: ", fnTime);
    console.log("Prototype: ", ptTime);
    console.log("Class: ", cTime);
}

Test();
