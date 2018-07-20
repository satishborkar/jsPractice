function CustomHTMLElement(name) {
    this.name = name;
    this.click = function () {
        console.log('Clicked...');
    }
};

CustomHTMLElement.prototype.focus = function () {
    console.log("Focused...");
};

const elm = new CustomHTMLElement('Elm');
// console.log(elm);


function CustomHTMLSelectElement(selectElement) {
    CustomHTMLElement.call(this, 'select');
    this.items = [];

    this.addItem = function (item) {
        this.items.push(item);
        return this.items;
    };

    this.removeItems = function (item) {
        if (item && this.items.indexOf(item) > -1) {
            this.items.splice(this.items.indexOf(item), 1);
        } else {
            this.items.shift();
        }
        return this.items;
    }

};

CustomHTMLSelectElement.prototype = new CustomHTMLElement();
CustomHTMLSelectElement.prototype.constructor = CustomHTMLSelectElement;

const xSelect = new CustomHTMLSelectElement('xSelect');
console.log(xSelect);

