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

    Synechron.Counter = Counter;
})(Synechron = Synechron || {});

var Cnt5 = new Synechron.Counter(5);
console.log(Cnt5.next());
console.log(Cnt5.next());
console.log(Cnt5.prev());
console.log(Cnt5.next());
