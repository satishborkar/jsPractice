// Javascript Module Example
// IIFE (Immediately Invoked Function Expression) 
// is a JavaScript function that runs as soon as it is defined

(function (d) {
    var obj = d.getElementById('app');
    var _span = d.createElement('span');
    var _node = d.createTextNode('Testing here');

    _span.appendChild(_node);
    _span.style.color = "red";
    obj.appendChild(_span);

})(document);