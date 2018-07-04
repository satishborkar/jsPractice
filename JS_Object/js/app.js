//import {data} from './data.js';

let js = {};

js.string = {
    "DataName": "String",
    "DataType": "Primitive",
    "Properties": [
            {
                "name": "constructor",
                "desc": "Returns the string's constructor function"
            },
            {
                "name": "length",
                "desc": "Returns the length of a string"
            },
            {
                "name": "prototype",
                "desc": "Allows you to add properties and methods to an object"
            }
        ],
        "Methods": [
            {
                "name": "charAt()",
                "desc": "Returns the character at the specified index (position)"
            },
            {
                "name": "charCodeAt()",
                "desc": "Returns the Unicode of the character at the specified index"
            },
            {
                "name": "concat()",
                "desc": "Joins two or more strings, and returns a new joined strings"
            },
            {
                "name":"endsWith()",
                "desc":"Checks whether a string ends with specified string/characters"
            },
            {
                "name": "fromCharCode()",
                "desc": "Converts Unicode values to characters"
            },
            {
                "name": "includes()",
                "desc": "Checks whether a string contains the specified string/characters"
            },
            {
                "name": "indexOf()",
                "desc": "Returns the position of the first found occurrence of a specified value in a string"
            },
            {
                "name": "lastIndexOf()",
                "desc": "Returns the position of the last found occurrence of a specified value in a string"
            },
            {
                "name": "localeCompare()",
                "desc": "Compares two strings in the current locale"
            },
            {
                "name": "match()",
                "desc": "Searches a string for a match against a regular expression, and returns the matches"
            },
            {
                "name": "repeat()",
                "desc": "Returns a new string with a specified number of copies of an existing string"
            },
            {
                "name": "replace()",
                "desc": "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced"
            },
            {
                "name": "search()",
                "desc": "Searches a string for a specified value, or regular expression, and returns the position of the match"
            },
            {
                "name": "slice()",
                "desc": "Extracts a part of a string and returns a new string"
            },
            {
                "name": "split()",
                "desc": "Splits a string into an array of substrings"
            },
            {
                "name": "startsWith()",
                "desc": "Checks whether a string begins with specified characters"
            },
            {
                "name": "substr()",
                "desc": "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character"
            },
            {
                "name": "substring()",
                "desc": "Extracts the characters from a string, between two specified indices"
            },
            {
                "name": "toLocaleLowerCase()",
                "desc": "Converts a string to lowercase letters, according to the host's locale"
            },
            {
                "name": "toLocaleUpperCase()",
                "desc": "Converts a string to uppercase letters, according to the host's locale"
            },
            {
                "name": "toLowerCase()",
                "desc": "Converts a string to lowercase letters"
            },
            {
                "name": "toUpperCase()",
                "desc": "Converts a string to uppercase letters"
            },
            {
                "name": "toString()",
                "desc": "Returns the value of a String object"
            },
            {
                "name": "trim()",
                "desc": "Removes whitespace from both ends of a string"
            },
            {
                "name": "valueOf()",
                "desc": "Returns the primitive value of a String object"
            }
        ]
};

js.boolean = {
    "DataName": "Boolean",
    "DataType": "Primitive",
    "Properties": [
            {
                "name": "constructor",
                "desc": "lorem ispum is simply dummy text"
            },
            {
                "name": "prototype",
                "desc": "lorem ispum is simply dummy text"
            }
        ],
    "Methods": [
            {
                "name": "toString()",
                "desc": "Converts a boolean value to a string, and returns the result"
            },
            {
                "name": "valueOf()",
                "desc": "Returns the primitive value of a boolean"
            }
        ]
};


js.bumber = {
    "DataName": "Number",
    "DataType": "Primitive",
    "Properties": [
            {
                "name": "constructor",
                "desc": "Returns the function that created JavaScript's Number prototype"
            },
            {
                "name": "MAX_VALUE",
                "desc": "Returns the largest number possible in JavaScript"
            },
            {
                "name": "MIN_VALUE",
                "desc": "Returns the smallest number possible in JavaScript"
            },
            {
                "name": "NEGATIVE_INFINITY",
                "desc": "Represents negative infinity (returned on overflow)"
            },
            {
                "name": "NaN",
                "desc": "Represents a 'Not-a-Number' value"
            },
            {
                "name": "POSITIVE_INFINITY",
                "desc": "Represents infinity (returned on overflow)"
            },
            {
                "name": "prototype",
                "desc": "Allows you to add properties and methods to an object"
            }
        ],
    "Methods": [
            {
                "name": "toString()",
                "desc": "Converts a boolean value to a string, and returns the result"
            },
            {
                "name": "valueOf()",
                "desc": "Returns the primitive value of a boolean"
            }
        ]
};

let list = `<ol class='section'>`;
for (x in js) {
    //console.log(js[x]);
    list += `<li>`;
    list += `<ul>`;
    for (j in js[x]) {
        list += `<li class='sub-section'> <h4>  ${j}  : </h4> `;
        //list += `${js[x][j]}`
        //console.log(j);
        if (Array.isArray(js[x][j])) {
            //console.log()
            list += `<table class='tbl-data'>`;
            list += `<thead><tr> <td> Name </td> <td>  Description </td> </tr></thead>`;
            list += `<tbody>`;
            for (var y = 0; y < js[x][j].length; y++) {
                list += `<tr> <td> ${js[x][j][y]['name']} </td> <td>  ${js[x][j][y]['desc']} </td> </tr>`;

                // for (xolo in js[x][j][y]) {
                //     list += `<li> ${xolo} : ${js[x][j][y][xolo]} </li>`;
                // }

                //list += `<li> ${js[x][j][y]['name']} -- ${js[x][j][y]['desc']} </li>`;
                //console.log(j + " : " + js[x][j][y]['name'])
            }
            list += `</tbody></table>`;
        } else {
            //console.log(j + " : " + js[x][j]);
            list += `${js[x][j]}`;
        }

        list += `</li>`;

    }
    list += `</ul>`;
    list += `</li class='section'>`;
};

list += `</ol>`;

document.querySelector("#app").innerHTML = list;



// const jsinfo = {
//     "String": [
//         {"DataName": "String"},
//         {"DataType": "Primitive"},
//         {"Properties": [{
//                 "name": "constructor",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "length",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "prototype",
//                 "desc": "lorem ispum is simply dummy text"
//             }
//         ]},

//         {"Methods": [{
//                 "name": "charAt()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "charCodeAt()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "concat()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "fromCharCode()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "indexOf()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "lastIndexOf()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "match()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "replace()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "search()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "slice()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "split()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "substr()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "substring()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "toLowerCase()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "toUpperCase()",
//                 "desc": "lorem ispum is simply dummy text"
//             },
//             {
//                 "name": "valueOf()",
//                 "desc": "lorem ispum is simply dummy text"
//             }
//         ]}
//     ],
//     "Boolean": "Boolean1",
//     "Number": "Number1",
//     "Undefined": "Undefined1",
//     "Null": "Null1",
//     "Object": "Object1",
//     "Array": "Array1",
//     "Function": "Function1",
//     "Symbols": "Symbols1",
//     "Maps": "Maps1",
//     "WeakMaps": "WeakMaps1",
//     "Sets": "Sets1"
// };


// const app = document.querySelector("#app");
// const ol = document.createElement("ol");

// // for (let x = 0; x < jsinfo.length; x++) {
// //     console.log(x);
// // }

// for (x in jsinfo) {
//     console.log(jsinfo[x]);

//     let xx = jsinfo[x];
//     if(Array.isArray(xx)){
//         for(y=0; y < xx.length; y++){
//             console.log( xx + ":" +  xx[y]);
//         }
//     }
// }

// jsData.forEach((index) => {
//     for (itemA in index) {

//         // if (xx !== null && typeof xx === 'object') {
//         //     console.log("true");
//         // }

//         var listName;
//         const li = document.createElement("li");
//         let itemB = index[itemA];
//         listName = document.createTextNode(itemB);

//         if (itemB !== null && typeof itemB === 'object') {
//             listName = itemB;
//         }


//         if (itemB.constructor.toString().indexOf('Object') > -1) {
//             for (itemC in itemB) {
//                 //console.log(itemC + " : " + itemB[itemC]);
//                 //console.log(itemB[itemC])
//                 let itemD = itemB[itemC];
//                 //console.log(itemC + "  --->  " + itemD);

//                 if (itemD.constructor.toString().indexOf('Array') > -1) {
//                     for (let index = 0; index < itemD.length; index++) {
//                         var element = itemD[index];
//                         if (element.constructor.toString().indexOf('Object') > -1) {
//                             for (x in element) {
//                                 if (element.hasOwnProperty(x)) {
//                                     elem = element[x];
//                                     //console.log(element + "  --->  " + elem);
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }


//         li.appendChild(listName);
//         ol.appendChild(li);
//     };
// });

// app.appendChild(ol);