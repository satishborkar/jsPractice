function Calculator(){
	this.a = document.getElementById("a");
	this.b = document.getElementById("b");
	this.o = document.getElementById("output");
	this.r = "";
}

Calculator.prototype.getNum = function(item) {
	if(item != "" || item != 'undefined' && typeof item == 'string'){
		return parseInt(item);
	}else{
		return false;
	}
};

Calculator.prototype.throwError = function(msg){
	console.log(msg);
}

Calculator.prototype.isValidInput = function(item){
	if(item != 'undefined' || item != ''){
		return item;
	}else{
		this.throwError("Invalid");
	}

	console.log(item);
};

Calculator.prototype.add = function() {

	var a = this.getNum(a.value);
	var b = this.getNum(b.value);

	console.log(a);
	console.log(b);

	// if(this.a.value !="" || this.b.value != ""){
	// }
	// this.r = parseInt(this.a.value) + parseInt(this.b.value);
	// this.o.innerHTML = this.r;
};