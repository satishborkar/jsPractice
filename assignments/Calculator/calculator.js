function Calculator(element) {
    this.el = document.querySelector(element);
    this.init();
};

Calculator.prototype.init = function () {
    this.displayOutput();
    this.buttonBack();
    this.clearButton();
    this.numricButton()
    this.mathSymbols();
    this.finalBtn();
};

Calculator.prototype.displayOutput = function () {

    this.output = document.createElement('input');
    this.output.setAttribute('type', 'text');
    this.output.setAttribute('name', 'output');
    this.output.setAttribute('id', 'output');
    this.output.setAttribute('value', '0');
    var that = this;
    this.output.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            that.el.querySelector('.eval').click();
        }
    });

    this.el.appendChild(this.output);
};

Calculator.prototype.numricButton = function () {
    for (i = 0; i < 10; i++) {

        this.btnNum = document.createElement('button');
        this.btnNumText = document.createTextNode(i);
        this.btnNum.appendChild(this.btnNumText);

        var numBtn = this.btnNum;
        var displayOutput = this.output;

        (function (i) {
            numBtn.addEventListener('click', function () {
                if (displayOutput.value == '0') {
                    displayOutput.value = i
                } else {
                    displayOutput.value += i
                }
            });
        })(i);
        this.el.appendChild(this.btnNum);
    }
};

Calculator.prototype.buttonBack = function () {
    this.btnBack = document.createElement('button');
    this.btnBackText = document.createTextNode('Back');
    this.btnBack.appendChild(this.btnBackText);

    var outputbox = this.output;

    this.btnBack.addEventListener('click', function () {

        if (outputbox.value.length > 1 && outputbox.value != 0) {
            outputbox.value = outputbox.value.slice(0, -1);
        } else if (outputbox.value.length = 1) {
            outputbox.value = '0';
        }
        else {
            return false;
            //console.log("Value is zero");
        }
    });

    this.el.appendChild(this.btnBack);
};

Calculator.prototype.mathSymbols = function () {

    this.symbolList = ["÷", "x", "-", "+"];

    for (j = 0; j < this.symbolList.length; j++) {

        this.btnOp = document.createElement('button');
        this.btnOpText = document.createTextNode(this.symbolList[j]);

        this.btnOp.appendChild(this.btnOpText);

        var opBtn = this.btnOp;
        var outputArea = this.output;
        var symbols = this.symbolList;
        (function (j) {
            opBtn.addEventListener('click', function () {

                var lastChar = outputArea.value.slice(-1);

                if (lastChar == '0' || lastChar == "+" || lastChar == "-" || lastChar == "x" || lastChar == "÷") {
                    alert('Wrong input !!')
                } else {
                    outputArea.value += symbols[j];
                }

            })
        })(j);
        this.el.appendChild(this.btnOp);
    }

};

Calculator.prototype.finalBtn = function () {

    this.evalBtn = document.createElement('button');
    this.evalBtn.setAttribute('class','eval');
    this.evelBtnText = document.createTextNode('=');
    this.evalBtn.appendChild(this.evelBtnText);

    var outputStr = this.output;

    this.evalBtn.addEventListener('click', function () {
        var evalReadyStr = outputStr.value.replace(/x/g, '*').replace(/÷/, '/')
        outputStr.value = eval(evalReadyStr);
    })
    this.el.appendChild(this.evalBtn);
};

Calculator.prototype.clearButton = function () {
    this.clearBtn = document.createElement('button');
    this.clearBtnText = document.createTextNode("Clear");
    this.clearBtn.appendChild(this.clearBtnText);
    var evalVal = this.output;
    this.clearBtn.addEventListener('click', function () {
        evalVal.value = "0";
    })
    this.el.appendChild(this.clearBtn);
}



