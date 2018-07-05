class Counter{
    constructor(cntBy){
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

var Cnt5 = new Counter(5);
console.log(Cnt5.next());
console.log(Cnt5.next());
console.log(Cnt5.prev());
console.log(Cnt5.next());