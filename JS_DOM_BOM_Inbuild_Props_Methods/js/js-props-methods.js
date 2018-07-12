var jsCollection = {
    "data": [{
            "JavaScript": {
                "DataTypes": [{
                    "Primitive": [{
                            "String": {
                                "Properties": [
                                    { "name": "constructor", "desc": "Returns the string's constructor function" },
                                    { "name": "length", "desc": "Returns the length of a string" },
                                    { "name": "prototype", "desc": "Allows you to add properties and methods to an string object" }
                                ],
                                "Methods": [
                                    { "name": "charAt()", "desc": "Returns the character at the specified index (position)" },
                                    { "name": "charCodeAt()", "desc": "Returns the Unicode of the character at the specified index" },
                                    { "name": "concat()", "desc": "Joins two or more strings, and returns a new joined strings" },
                                    { "name": "endsWith()", "desc": "Checks whether a string ends with specified string/characters" }
                                ]
                            }
                        },
                        "Numbers",
                        "Boolean",
                        "Null",
                        "Undefined",
                        "Symbols"
                    ]
                }, {
                    "Complex": [
                        "Object",
                        "Array",
                        "Function"
                    ]
                }]
            }
        },
        "Browser BOM",
        "DOM"
    ]
};

const jsdata = jsCollection.data;
const plotter = document.getElementById("plotter");
var returnData = '';

function iterateThroughData(data) {
    if (Array.isArray(data)) {
        iterateArray(data);
    } else if (typeof data == 'object') {
        iterateObject(data);
    }

};

function wrapInHref(elem, cssClass) {
    var link = document.createElement("a");
    link.innerText = elem;
    link.setAttribute("href", "javascript:void(0)");

    if (cssClass) {
        link.setAttribute('class', cssClass);
    }
    return link;
};

function iterateObject(obj) {

    for (let key in obj) {
        var element = obj[key];

        if (typeof element == 'object' && element.constructor.toString().indexOf("Object") > -1) {
            iterateObject(element);
        }
        if (Array.isArray(element) && element.constructor.toString().indexOf("Array") > -1) {
            iterateArray(element)
        }

        return element;

        returnData += element;
        plotter.innerHTML = returnData;
    }
};

function iterateArray(arr) {
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        element = arr[index];

        if (typeof element == 'object' && element.constructor.toString().indexOf("Object") > -1) {
            iterateObject(element);
        }

        if (Array.isArray(element) && element.constructor.toString().indexOf("Array") > -1) {
            iterateArray(element)
        }

        return element;
        returnData += element;
        plotter.innerHTML = returnData;
    }
};

iterateThroughData(jsdata);