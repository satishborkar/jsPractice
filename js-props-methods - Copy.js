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
                                    { "name": "endsWith()", "desc": "Checks whether a string ends with specified string/characters" },

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

const data = jsCollection.data;
const plotter = document.getElementById("plotter");
const ul = document.createElement("ul");

var wrapInHref = function(elem, cssClass) {
    var link = document.createElement("a");
    link.innerText = elem;
    link.setAttribute("href", "javascript:void(0)");

    if (cssClass) {
        link.setAttribute('class', cssClass);
    }
    return link;
};

if (Array.isArray(data) && data.constructor.toString().indexOf("Array") > -1) {

    for (var index = 0; index < data.length; index++) {

        const li = document.createElement("li");
        var type1Elem = data[index];

        if (typeof type1Elem == 'object' && type1Elem.constructor.toString().indexOf("Object") > -1) {
            for (let key in type1Elem) {
                if (type1Elem.hasOwnProperty(key)) {
                    var type2Elem = type1Elem[key];
                    type1Elem = key;

                    if (typeof type2Elem == 'object' && type2Elem.constructor.toString().indexOf("Object") > -1) {
                        const type3ElemList = document.createElement("ol");
                        for (let key in type2Elem) {
                            var type3Elem = type2Elem[key];

                            if (Array.isArray(type3Elem) && type3Elem.constructor.toString().indexOf("Array") > -1) {
                                console.log("Array");
                            }

                        }
                    }

                    if (Array.isArray(type2Elem) && type2Elem.constructor.toString().indexOf("Array") > -1) {
                        console.log("Run Array method");
                    }
                }
            }
        }

        var linkHref = wrapInHref(type1Elem, 'type-1');

        li.appendChild(linkHref);
        ul.appendChild(li);
    };
};



var iterateObject = function(obj) {
    if (typeof obj == 'object' && obj.constructor.toString().indexOf("Object") > -1) {
        for (let key in obj) {
            var element = obj[key];
        }
    }
};

plotter.appendChild(ul);
//console.log(ul);