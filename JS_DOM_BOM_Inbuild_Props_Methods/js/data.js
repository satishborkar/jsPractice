//https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
//https://scotch.io/tutorials/learning-javascript-native-functions-and-how-to-use-them
//"Encapsulation"
// Diference between call, bind & apply.

var jsCollection = {
    "data": [{
            "JavaScript": {
                "DataTypes": [{
                        "Primitive": [{
                                "String": [{
                                        "Properties": [{
                                            "name": "String.constructor",
                                            "desc": "Returns the string's constructor function"
                                        }, {
                                            "name": "String.length",
                                            "desc": "Returns the length of a string"
                                        }, {
                                            "name": "String.prototype",
                                            "desc": "Allows you to add properties and methods to an string object"
                                        }]
                                    },
                                    {
                                        "Methods": [
                                            { "name": "Tips", "desc": "", "sub-head": "Methods unrelated to HTML" },
                                            {
                                                "name": "String.charAt()",
                                                "desc": "Returns the character at the specified index (position)"
                                            },
                                            {
                                                "name": "String.charCodeAt()",
                                                "desc": "Returns the Unicode of the character at the specified index"
                                            },
                                            {
                                                "name": "String.concat()",
                                                "desc": "Joins two or more strings, and returns a new joined strings"
                                            },
                                            {
                                                "name": "String.endsWith()",
                                                "desc": "Checks whether a string ends with specified string/characters"
                                            },

                                            {
                                                "name": "String.fromCharCode()",
                                                "desc": "Converts Unicode values to characters"
                                            },
                                            {
                                                "name": "String.includes()",
                                                "desc": "Checks whether a string contains the specified string/characters"
                                            },
                                            {
                                                "name": "String.indexOf()",
                                                "desc": "Returns the position of the first found occurrence of a specified value in a string"
                                            },
                                            {
                                                "name": "String.lastIndexOf()",
                                                "desc": "Returns the position of the last found occurrence of a specified value in a string"
                                            },
                                            {
                                                "name": "String.localeCompare()",
                                                "desc": "Compares two strings in the current locale"
                                            },
                                            {
                                                "name": "String.match()",
                                                "desc": "Searches a string for a match against a regular expression, and returns the matches"
                                            },
                                            {
                                                "name": "String.repeat()",
                                                "desc": "Returns a new string with a specified number of copies of an existing string"
                                            },
                                            {
                                                "name": "String.replace()",
                                                "desc": "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced"
                                            },
                                            {
                                                "name": "String.search()",
                                                "desc": "Searches a string for a specified value, or regular expression, and returns the position of the match"
                                            },
                                            {
                                                "name": "String.slice()",
                                                "desc": "Extracts a part of a string and returns a new string"
                                            },
                                            {
                                                "name": "String.split()",
                                                "desc": "Splits a string into an array of substrings"
                                            },
                                            {
                                                "name": "String.startsWith()",
                                                "desc": "Checks whether a string begins with specified characters"
                                            },
                                            {
                                                "name": "String.substr()",
                                                "desc": "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character"
                                            },
                                            {
                                                "name": "String.substring()",
                                                "desc": "Extracts the characters from a string, between two specified indices"
                                            },
                                            {
                                                "name": "String.toLocaleLowerCase()",
                                                "desc": "Converts a string to lowercase letters, according to the host's locale"
                                            },
                                            {
                                                "name": "String.toLocaleUpperCase()",
                                                "desc": "Converts a string to uppercase letters, according to the host's locale"
                                            },
                                            {
                                                "name": "String.toLowerCase()",
                                                "desc": "Converts a string to lowercase letters"
                                            },
                                            {
                                                "name": "String.toString()",
                                                "desc": "Returns the value of a String object"
                                            },
                                            {
                                                "name": "String.toUpperCase()",
                                                "desc": "Converts a string to uppercase letters"
                                            },
                                            {
                                                "name": "String.trim()",
                                                "desc": "Removes whitespace from both ends of a string"
                                            },
                                            {
                                                "name": "String.valueOf()",
                                                "desc": "Returns the primitive value of a String object"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Numbers": [{
                                    "Properties": [
                                        { "name": "Number.EPSILON", "desc": "The smallest interval between two representable numbers." },
                                        { "name": "Number.MAX_SAFE_INTEGER", "desc": "The maximum safe integer in JavaScript " },
                                        { "name": "Number.MIN_SAFE_INTEGER", "desc": "The minimum safe integer in JavaScript" },
                                        { "name": "Number.MAX_VALUE", "desc": "The largest positive representable number." },
                                        { "name": "Number.MIN_VALUE", "desc": "The smallest positive representable number - that is, the positive number closest to zero (without actually being zero)." },
                                        { "name": "Number.NaN", "desc": "Special 'not a number' value." },
                                        { "name": "Number.NEGATIVE_INFINITY", "desc": "Special value representing negative infinity; returned on overflow." },
                                        { "name": "Number.POSITIVE_INFINITY", "desc": "Special value representing infinity; returned on overflow." },
                                        { "name": "Number.prototype", "desc": "Allows the addition of properties to a Number object." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Number.isNaN()", "desc": "Determine whether the passed value is NaN." },
                                        { "name": "Number.isFinite()", "desc": "Determine whether the passed value is a finite number." },
                                        { "name": "Number.isInteger()", "desc": "Determine whether the passed value is an integer." },
                                        { "name": "Number.isSafeInteger()", "desc": "Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1)." },
                                        { "name": "Number.parseFloat()", "desc": "The value is the same as parseFloat() of the global object." },
                                        { "name": "Number.parseInt()", "desc": "The value is the same as parseInt() of the global object." },
                                        { "name": "Tips", "desc": "", "sub-head": "Object instances and Object prototype object" },
                                        { "name": "Number.prototype.toExponential()", "desc": "Returns a string representing the number in exponential notation." },
                                        { "name": "Number.prototype.toFixed()", "desc": "Returns a string representing the number in fixed-point notation." },
                                        { "name": "Number.prototype.toLocaleString()", "desc": "Returns a string with a language sensitive representation of this number. Overrides the Object.prototype.toLocaleString() method." },
                                        { "name": "Number.prototype.toPrecision()", "desc": "Returns a string representing the number to a specified precision in fixed-point or exponential notation." },
                                        { "name": "Number.prototype.toSource()", "desc": "Returns an object literal representing the specified Number object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method." },
                                        { "name": "Number.prototype.toString()", "desc": "Returns a string representing the specified object in the specified radix (base). Overrides the Object.prototype.toString() method." },
                                        { "name": "Number.prototype.valueOf()", "desc": "Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method." },
                                        { "name": "Tips", "desc": "All the methods above can use like [Number.toExponential()],  They are shown as above to remind that these are Number Object's methods not an Object methods which are same names for some methods and properties " },
                                        { "name": "Tips", "desc": "All number methods return a new value. They do not change the original variable." }
                                    ]
                                }]
                            },
                            {
                                "Boolean": [{
                                    "Properties": [
                                        { "name": "Boolean.length", "desc": "Length property whose value is 1." },
                                        { "name": "Boolean.prototype", "desc": "Represents the prototype for the Boolean constructor." },
                                        { "name": "Boolean.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the Boolean function by default." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Tips", "desc": "While the global Boolean object contains no methods of its own, it does inherit some methods through the prototype chain" },
                                        { "name": "Tips", "desc": "", "sub-head": "Boolean instances methods" },
                                        { "name": "Boolean.prototype.toSource()", "desc": "Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object. Overrides the Object.prototype.toSource() method." },
                                        { "name": "Boolean.prototype.toString()", "desc": "Returns a string of either 'true' or 'false' depending upon the value of the object. Overrides the Object.prototype.toString() method." },
                                        { "name": "Boolean.prototype.valueOf()", "desc": "Returns the primitive value of the Boolean object. Overrides the Object.prototype.valueOf() method." }
                                    ]
                                }]
                            },
                            "Null",
                            "Undefined",
                            {
                                "Symbols": [{
                                    "Properties": [
                                        { "name": "Symbol.length", "desc": "Length property whose value is 0." },
                                        { "name": "Symbol.prototype", "desc": "Represents the prototype for the Symbol constructor." },
                                        { "name": "Tips", "desc": "", "sub-head": "Iteration symbols" },
                                        { "name": "Symbol.iterator", "desc": "A method returning the default iterator for an object. Used by for...of." },
                                        { "name": "Symbol.asyncIterator", "desc": "A method that returns the default AsyncIterator for an object. Used by for await of." },
                                        { "name": "Tips", "desc": "", "sub-head": "Regular expression symbols" },
                                        { "name": "Symbol.match", "desc": "A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by String.prototype.match()." },
                                        { "name": "Symbol.replace", "desc": "A method that replaces matched substrings of a string. Used by String.prototype.replace()." },
                                        { "name": "Symbol.search", "desc": "A method that returns the index within a string that matches the regular expression. Used by String.prototype.search()." },
                                        { "name": "Symbol.split", "desc": "A method that splits a string at the indices that match a regular expression. Used by String.prototype.split()." },
                                        { "name": "Tips", "desc": "", "sub-head": "Other symbols" },
                                        { "name": "Symbol.hasInstance", "desc": "A method determining if a constructor object recognizes an object as its instance. Used by instanceof." },
                                        { "name": "Symbol.isConcatSpreadable", "desc": "A Boolean value indicating if an object should be flattened to its array elements. Used by Array.prototype.concat()." },
                                        { "name": "Symbol.unscopables", "desc": "An object value of whose own and inherited property names are excluded from the with environment bindings of the associated object." },
                                        { "name": "Symbol.species", "desc": "A constructor function that is used to create derived objects." },
                                        { "name": "Symbol.toPrimitive", "desc": "A method converting an object to a primitive value." },
                                        { "name": "Symbol.toStringTag", "desc": "A string value used for the default description of an object. Used by Object.prototype.toString()." },
                                        { "name": "Tips", "desc": "", "sub-head": "Symbol prototype" },
                                        { "name": "Symbol.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the Symbol function by default." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Symbol.for(key)", "desc": "Searches for existing symbols with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key." },
                                        { "name": "Symbol.keyFor(sym)", "desc": "Retrieves a shared symbol key from the global symbol registry for the given symbol." },
                                        { "name": "Tips", "desc": "", "sub-head": "Symbol prototype" },
                                        { "name": "Symbol.prototype.toSource()", "desc": "Returns a string containing the source of the Symbol object. Overrides the Object.prototype.toSource() method." },
                                        { "name": "Symbol.prototype.toString()", "desc": "Returns a string containing the description of the Symbol. Overrides the Object.prototype.toString() method." },
                                        { "name": "Symbol.prototype.valueOf()", "desc": "Returns the primitive value of the Symbol object. Overrides the Object.prototype.valueOf() method." },
                                        { "name": "Symbol.prototype[@@toPrimitive]", "desc": "Returns the primitive value of the Symbol object." }
                                    ]
                                }]
                            }
                        ]
                    },
                    {
                        "Complex": [{
                                "Object": [{
                                        "Object Constructor": [{
                                                "Properties": [
                                                    { "name": "Object.length", "desc": "Has a value of 1" },
                                                    { "name": "Object.prototype", "desc": "Allows the addition of properties to all objects of type Object." }
                                                ]
                                            },
                                            {
                                                "Methods": [
                                                    { "name": "Object.assign()", "desc": "Copies the values of all enumerable own properties from one or more source objects to a target object." },
                                                    { "name": "Object.create()", "desc": "Creates a new object with the specified prototype object and properties." },
                                                    { "name": "Object.defineProperty()", "desc": "Adds the named property described by a given descriptor to an object." },
                                                    { "name": "Object.defineProperties()", "desc": "Adds the named properties described by the given descriptors to an object." },
                                                    { "name": "Object.entries()", "desc": "Returns an array of a given object's own enumerable property [key, value] pairs." },
                                                    { "name": "Object.freeze()", "desc": "Freezes an object: other code can't delete or change any properties." },
                                                    { "name": "Object.getOwnPropertyDescriptor()", "desc": "Returns a property descriptor for a named property on an object." },
                                                    { "name": "Object.getOwnPropertyDescriptors()", "desc": "Returns an object containing all own property descriptors for an object." },
                                                    { "name": "Object.getOwnPropertyNames()", "desc": "Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties." },
                                                    { "name": "Object.getOwnPropertySymbols()", "desc": "Returns an array of all symbol properties found directly upon a given object." },
                                                    { "name": "Object.getPrototypeOf()", "desc": "Returns the prototype of the specified object." },
                                                    { "name": "Object.is()", "desc": "Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison)." },
                                                    { "name": "Object.isExtensible()", "desc": "Determines if extending of an object is allowed." },
                                                    { "name": "Object.isFrozen()", "desc": "Determines if an object was frozen." },
                                                    { "name": "Object.isSealed()", "desc": "Determines if an object is sealed." },
                                                    { "name": "Object.keys()", "desc": "Returns an array containing the names of all of the given object's own enumerable properties." },
                                                    { "name": "Object.preventExtensions()", "desc": "Prevents any extensions of an object." },
                                                    { "name": "Object.seal()", "desc": "Prevents other code from deleting properties of an object." },
                                                    { "name": "Object.setPrototypeOf()", "desc": "Sets the prototype (i.e., the internal [[Prototype]] property)" },
                                                    { "name": "Object.values()", "desc": "Returns an array of a given object's own enumerable values." }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        "Object instances and Object prototype object": [{
                                                "Properties": [
                                                    { "name": "Object.prototype.constructor", "desc": "Specifies the function that creates an object's prototype." },
                                                    { "name": "Object.prototype.__proto__", "desc": "Points to the object which was used as prototype when the object was instantiated." },
                                                    { "name": "Object.prototype.__noSuchMethod__", "desc": "Allows a function to be defined that will be executed when an undefined object member is called as a method." }
                                                ]
                                            },
                                            {
                                                "Methods": [
                                                    { "name": "Object.prototype.hasOwnProperty()", "desc": "Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain." },
                                                    { "name": "Object.prototype.isPrototypeOf()", "desc": "Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object." },
                                                    { "name": "Object.prototype.propertyIsEnumerable()", "desc": "Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set." },
                                                    { "name": "Object.prototype.toSource()", "desc": "Returns string containing the source of an object literal representing the object that this method is called upon; you can use this value to create a new object." },
                                                    { "name": "Object.prototype.toLocaleString()", "desc": "Calls toString()." },
                                                    { "name": "Object.prototype.toString()", "desc": "Returns a string representation of the object." },
                                                    { "name": "Object.prototype.unwatch() ", "desc": "Removes a watchpoint from a property of the object." },
                                                    { "name": "Object.prototype.valueOf()", "desc": "Returns the primitive value of the specified object." },
                                                    { "name": "Object.prototype.watch()", "desc": "Adds a watchpoint to a property of the object." }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        "Global Objects": [{
                                                "Promise": [{
                                                    "Properties": [
                                                        { "name": "Promise.length", "desc": "Length property whose value is always 1 (number of constructor arguments)." },
                                                        { "name": "Promise.prototype", "desc": "Represents the prototype for the Promise constructor." },
                                                        { "name": "Promise.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the Promise function by default." }



                                                    ]
                                                }, {
                                                    "Methods": [
                                                        { "name": "Promise.all(iterable)", "desc": "Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise fulfills, it is fulfilled with an array of the values from the fulfilled promises in the same order as defined in the iterable. If the returned promise rejects, it is rejected with the reason from the first promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises." },
                                                        { "name": "Promise.race(iterable)", "desc": "Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise." },
                                                        { "name": "Promise.reject(reason)", "desc": "Returns a Promise object that is rejected with the given reason." },
                                                        { "name": "Promise.resolve(value)", "desc": "Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will 'follow' that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise." },
                                                        { "name": "Promise.prototype.catch(onRejected)", "desc": "Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled." },
                                                        { "name": "Promise.prototype.then(onFulfilled, onRejected)", "desc": "Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function)." },
                                                        { "name": "", "desc": "" },
                                                        { "name": "", "desc": "" },
                                                        { "name": "", "desc": "" },
                                                        { "name": "", "desc": "" },
                                                        { "name": "", "desc": "" },
                                                        { "name": "", "desc": "" }
                                                    ]
                                                }]
                                            },
                                            "Generator",
                                            {
                                                "MATH": [{
                                                        "Properties": [
                                                            { "name": "Math.E", "desc": "Euler's constant and the base of natural logarithms, approximately 2.718." },
                                                            { "name": "Math.LN2", "desc": "Natural logarithm of 2, approximately 0.693." },
                                                            { "name": "Math.LN10", "desc": "Natural logarithm of 10, approximately 2.303." },
                                                            { "name": "Math.LOG2E", "desc": "Base 2 logarithm of E, approximately 1.443." },
                                                            { "name": "Math.LOG10E", "desc": "Base 10 logarithm of E, approximately 0.434." },
                                                            { "name": "Math.PI", "desc": "Ratio of the circumference of a circle to its diameter, approximately 3.14159." },
                                                            { "name": "Math.SQRT1_2", "desc": "Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707." },
                                                            { "name": "Math.SQRT2", "desc": "Square root of 2, approximately 1.414." }
                                                        ]
                                                    },
                                                    {
                                                        "Methods": [
                                                            { "name": "Math.abs(x)", "desc": "Returns the absolute value of a number." },
                                                            { "name": "Math.acos(x)", "desc": "Returns the arccosine of a number." },
                                                            { "name": "Math.acosh(x)", "desc": "Returns the hyperbolic arccosine of a number." },
                                                            { "name": "Math.asin(x)", "desc": "Returns the arcsine of a number." },
                                                            { "name": "Math.asinh(x)", "desc": "Returns the hyperbolic arcsine of a number." },
                                                            { "name": "Math.atan(x)", "desc": "Returns the arctangent of a number." },
                                                            { "name": "Math.atanh(x)", "desc": "Returns the hyperbolic arctangent of a number." },
                                                            { "name": "Math.atan2(y, x)", "desc": "Returns the arctangent of the quotient of its arguments." },
                                                            { "name": "Math.cbrt(x)", "desc": "Returns the cube root of a number." },
                                                            { "name": "Math.ceil(x)", "desc": "Returns the smallest integer greater than or equal to a number" },
                                                            { "name": "Math.clz32(x)", "desc": "Returns the number of leading zeroes of a 32-bit integer." },
                                                            { "name": "Math.cos(x)", "desc": "Returns the cosine of a number." },
                                                            { "name": "Math.cosh(x)", "desc": "Returns the hyperbolic cosine of a number." },
                                                            { "name": "Math.exp(x)", "desc": "Returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm." },
                                                            { "name": "Math.expm1(x)", "desc": "Returns subtracting 1 from exp(x)." },
                                                            { "name": "Math.floor(x)", "desc": "Returns the largest integer less than or equal to a number." },
                                                            { "name": "Math.fround(x)", "desc": "Returns the nearest single precision float representation of a number." },
                                                            { "name": "Math.hypot([x[, y[, …]]])", "desc": "Returns the square root of the sum of squares of its arguments." },
                                                            { "name": "Math.imul(x, y)", "desc": "Returns the result of a 32-bit integer multiplication." },
                                                            { "name": "Math.log(x)", "desc": "Returns the natural logarithm (loge, also ln) of a number." },
                                                            { "name": "Math.log1p(x)", "desc": "Returns the natural logarithm (loge, also ln) of 1 + x for a number x." },
                                                            { "name": "Math.log10(x)", "desc": "Returns the base 10 logarithm of a number." },
                                                            { "name": "Math.log2(x)", "desc": "Returns the base 2 logarithm of a number." },
                                                            { "name": "Math.max([x[, y[, …]]])", "desc": "Returns the largest of zero or more numbers." },
                                                            { "name": "Math.min([x[, y[, …]]])", "desc": "Returns the smallest of zero or more numbers." },
                                                            { "name": "Math.pow(x, y)", "desc": "Returns base to the exponent power, that is, base exponent." },
                                                            { "name": "Math.random()", "desc": "Returns a pseudo-random number between 0 and 1." },
                                                            { "name": "Math.round(x)", "desc": "Returns the value of a number rounded to the nearest integer." },
                                                            { "name": "Math.sign(x)", "desc": "Returns the sign of the x, indicating whether x is positive, negative or zero." },
                                                            { "name": "Math.sin(x)", "desc": "Returns the sine of a number." },
                                                            { "name": "Math.sinh(x)", "desc": "Returns the hyperbolic sine of a number." },
                                                            { "name": "Math.sqrt(x)", "desc": "Returns the positive square root of a number." },
                                                            { "name": "Math.tan(x)", "desc": "Returns the tangent of a number." },
                                                            { "name": "Math.tanh(x)", "desc": "Returns the hyperbolic tangent of a number." },
                                                            { "name": "Math.toSource()", "desc": "Returns the string 'Math'." },
                                                            { "name": "Math.trunc(x)", "desc": "Returns the integral part of the number x, removing any fractional digits." },
                                                            { "name": "Tips", "desc": "", "sub-head": "Extending the Math object" },
                                                            { "name": "Extend Math Object", "desc": "As most of built-in objects in JavaScript the Math object can be extended with custom properties and methods. To extend the Math object, you do not use 'prototype'. Instead you directly extend Math" },

                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                "DATE": [{
                                                        "Properties": [
                                                            { "name": "Date.prototype", "desc": "Allows the addition of properties to a JavaScript Date object." },
                                                            { "name": "Date.length", "desc": "The value of Date.length is 7. This is the number of arguments handled by the constructor." }
                                                        ]
                                                    },
                                                    {
                                                        "Methods": [
                                                            { "name": "Date.now()", "desc": "Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC, with leap seconds ignored." },
                                                            { "name": "Date.parse()", "desc": "Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC, with leap seconds ignored." },
                                                            { "name": "Date.UTC()", "desc": "Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored." },
                                                            { "name": "Tips", "desc": "", "sub-head": "JavaScript Date instances" },

                                                            { "name": "Tips", "desc": "", "section": "Getter" },
                                                            { "name": "Date.prototype.getDate()", "desc": "Returns the day of the month (1-31) for the specified date according to local time." },
                                                            { "name": "Date.prototype.getDay()", "desc": "Returns the day of the week (0-6) for the specified date according to local time." },
                                                            { "name": "Date.prototype.getFullYear()", "desc": "Returns the year (4 digits for 4-digit years) of the specified date according to local time." },
                                                            { "name": "Date.prototype.getHours()", "desc": "Returns the hour (0-23) in the specified date according to local time." },
                                                            { "name": "Date.prototype.getMilliseconds()", "desc": "Returns the milliseconds (0-999) in the specified date according to local time." },
                                                            { "name": "Date.prototype.getMinutes()", "desc": "Returns the minutes (0-59) in the specified date according to local time." },
                                                            { "name": "Date.prototype.getMonth()", "desc": "Returns the month (0-11) in the specified date according to local time." },
                                                            { "name": "Date.prototype.getSeconds()", "desc": "Returns the seconds (0-59) in the specified date according to local time." },
                                                            { "name": "Date.prototype.getTime()", "desc": "Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times)." },
                                                            { "name": "Date.prototype.getTimezoneOffset()", "desc": "Returns the time-zone offset in minutes for the current locale." },
                                                            { "name": "Date.prototype.getUTCDate()", "desc": "Returns the day (date) of the month (1-31) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCDay()", "desc": "Returns the day of the week (0-6) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCFullYear()", "desc": "Returns the year (4 digits for 4-digit years) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCHours()", "desc": "Returns the hours (0-23) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCMilliseconds()", "desc": "Returns the milliseconds (0-999) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCMinutes()", "desc": "Returns the minutes (0-59) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCMonth()", "desc": "Returns the month (0-11) in the specified date according to universal time." },
                                                            { "name": "Date.prototype.getUTCSeconds()", "desc": "Returns the seconds (0-59) in the specified date according to universal time." },

                                                            { "name": "Tips", "desc": "", "section": "Setter" },
                                                            { "name": "Date.prototype.setDate()", "desc": "Sets the day of the month for a specified date according to local time." },
                                                            { "name": "Date.prototype.setFullYear()", "desc": "Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time." },
                                                            { "name": "Date.prototype.setHours()", "desc": "Sets the hours for a specified date according to local time." },
                                                            { "name": "Date.prototype.setMilliseconds()", "desc": "Sets the milliseconds for a specified date according to local time." },
                                                            { "name": "Date.prototype.setMinutes()", "desc": "Sets the minutes for a specified date according to local time." },
                                                            { "name": "Date.prototype.setMonth()", "desc": "Sets the month for a specified date according to local time." },
                                                            { "name": "Date.prototype.setSeconds()", "desc": "Sets the seconds for a specified date according to local time." },
                                                            { "name": "Date.prototype.setTime()", "desc": "Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC, allowing for negative numbers for times prior." },
                                                            { "name": "Date.prototype.setUTCDate()", "desc": "Sets the day of the month for a specified date according to universal time." },
                                                            { "name": "Date.prototype.setUTCFullYear()", "desc": "Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time." },
                                                            {
                                                                "name": "Date.prototype.setUTCHours()",
                                                                "desc": "Sets the hour for a specified date according to universal time."
                                                            },
                                                            { "name": "Date.prototype.setUTCMilliseconds()", "desc": "Sets the milliseconds for a specified date according to universal time." },
                                                            { "name": "Date.prototype.setUTCMinutes()", "desc": "Sets the minutes for a specified date according to universal time." },
                                                            { "name": "Date.prototype.setUTCMonth()", "desc": "Sets the month for a specified date according to universal time." },
                                                            { "name": "Date.prototype.setUTCSeconds()", "desc": "Sets the seconds for a specified date according to universal time." },

                                                            { "name": "Tips", "desc": "", "section": "Conversion getter" },
                                                            { "name": "Date.prototype.toDateString()", "desc": "Returns the 'date' portion of the Date as a human-readable string." },
                                                            { "name": "Date.prototype.toISOString()", "desc": "Converts a date to a string following the ISO 8601 Extended Format." },
                                                            { "name": "Date.prototype.toJSON()", "desc": "Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify()." },
                                                            { "name": "Date.prototype.toLocaleDateString()", "desc": "Returns a string with a locality sensitive representation of the date portion of this date based on system settings." },
                                                            { "name": "Date.prototype.toLocaleFormat()", "desc": "Converts a date to a string, using a format string." },
                                                            { "name": "Date.prototype.toLocaleString()", "desc": "Returns a string with a locality sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method." },
                                                            { "name": "Date.prototype.toLocaleTimeString()", "desc": "Returns a string with a locality sensitive representation of the time portion of this date based on system settings." },
                                                            { "name": "Date.prototype.toSource()", "desc": "Returns a string representing the source for an equivalent Date object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method." },
                                                            { "name": "Date.prototype.toString()", "desc": "Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method." },
                                                            { "name": "Date.prototype.toTimeString()", "desc": "Returns the 'time' portion of the Date as a human-readable string." },
                                                            { "name": "Date.prototype.toUTCString()", "desc": "Converts a date to a string using the UTC timezone." },
                                                            { "name": "Date.prototype.valueOf()", "desc": "Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method." }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "RegExp": [{
                                                    "Properties": [
                                                        { "name": "RegExp.prototype", "desc": "Allows the addition of properties to all objects." },
                                                        { "name": "RegExp.length", "desc": "The value of RegExp.length is 2." },
                                                        { "name": "get RegExp[@@species]", "desc": "The constructor function that is used to create derived objects." },
                                                        { "name": "RegExp.lastIndex", "desc": "The index at which to start the next match." },
                                                        { "name": "Tips", "desc": "", "sub-head": "RegExp prototype objects and instances" },
                                                        { "name": "RegExp.prototype.constructor", "desc": "Specifies the function that creates an object's prototype." },
                                                        { "name": "RegExp.prototype.flags", "desc": "A string that contains the flags of the RegExp object." },
                                                        { "name": "RegExp.prototype.global", "desc": "Whether to test the regular expression against all possible matches in a string, or only against the first." },
                                                        { "name": "RegExp.prototype.ignoreCase", "desc": "Whether to ignore case while attempting a match in a string." },
                                                        { "name": "RegExp.prototype.multiline", "desc": "Whether or not to search in strings across multiple lines." },
                                                        { "name": "RegExp.prototype.source", "desc": "The text of the pattern." },
                                                        { "name": "RegExp.prototype.sticky", "desc": "Whether or not the search is sticky." },
                                                        { "name": "RegExp.prototype.unicode", "desc": "Whether or not Unicode features are enabled." }
                                                    ]
                                                }, {
                                                    "Methods": [
                                                        { "name": "Tips", "desc": "", "sub-head": "RegExp prototype objects and instances" },
                                                        { "name": "RegExp.prototype.exec()", "desc": "Executes a search for a match in its string parameter." },
                                                        { "name": "RegExp.prototype.test()", "desc": "Tests for a match in its string parameter." },
                                                        { "name": "RegExp.prototype[@@match]()", "desc": "Performs match to given string and returns match result." },
                                                        { "name": "RegExp.prototype[@@replace]()", "desc": "Replaces matches in given string with new substring." },
                                                        { "name": "RegExp.prototype[@@search]()", "desc": "Searches the match in given string and returns the index the pattern found in the string." },
                                                        { "name": "RegExp.prototype[@@split]()", "desc": "Splits given string into an array by separating the string into substring." },
                                                        { "name": "RegExp.prototype.toSource()", "desc": "Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method." },
                                                        { "name": "RegExp.prototype.toString()", "desc": "Returns a string representing the specified object. Overrides the Object.prototype.toString() method." }
                                                    ]
                                                }]
                                            },
                                            {
                                                "Error": [{
                                                    "ErrorType": [
                                                        { "name": "EvalError", "desc": "Creates an instance representing an error that occurs regarding the global function eval()." },
                                                        { "name": "InternalError", "desc": "Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. 'too much recursion'." },
                                                        { "name": "RangeError", "desc": "Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range." },
                                                        { "name": "ReferenceError", "desc": "Creates an instance representing an error that occurs when de-referencing an invalid reference." },
                                                        { "name": "SyntaxError", "desc": "Creates an instance representing a syntax error that occurs while parsing code in eval()." },
                                                        { "name": "TypeError", "desc": "Creates an instance representing an error that occurs when a variable or parameter is not of a valid type." },
                                                        { "name": "URIError", "desc": "Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters." }
                                                    ]
                                                }, {
                                                    "Properties": [
                                                        { "name": "Error.prototype", "desc": "Allows the addition of properties to Error instances." },
                                                        { "name": "Tips", "desc": "", "sub-head": "Error instances" },
                                                        { "name": "Tips", "desc": "Standard properties" },
                                                        { "name": "Error.prototype.constructor", "desc": "Specifies the function that created an instance's prototype." },
                                                        { "name": "Error.prototype.message", "desc": "Error message." },
                                                        { "name": "Error.prototype.name", "desc": "Error name." },

                                                        { "name": "Tips", "desc": "Vendor-specific extensions" },
                                                        { "name": "Tips", "desc": "Non-standard properties" },
                                                        { "name": "Tips", "desc": "", "section": "Microsoft" },

                                                        { "name": "Error.prototype.description", "desc": "Error description. Similar to message." },
                                                        { "name": "Error.prototype.number", "desc": "Error number." },
                                                        { "name": "Tips", "desc": "", "section": "Mozilla" },
                                                        { "name": "Error.prototype.fileName", "desc": "Path to file that raised this error." },
                                                        { "name": "Error.prototype.lineNumber", "desc": "Line number in file that raised this error." },
                                                        { "name": "Error.prototype.columnNumber", "desc": "Column number in line that raised this error." },
                                                        { "name": "Error.prototype.stack", "desc": "Stack trace." }
                                                    ]
                                                }, {
                                                    "Methods": [
                                                        { "name": "Error.prototype.toSource()", "desc": "Returns a string containing the source of the specified Error object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method." },
                                                        { "name": "Error.prototype.toString()", "desc": "Returns a string representing the specified object. Overrides the Object.prototype.toString() method." }
                                                    ]
                                                }]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Array": [{
                                    "Properties": [
                                        { "name": "Array.length", "desc": "The Array constructor's length property whose value is 1." },
                                        { "name": "get Array[@@species]", "desc": "The constructor function that is used to create derived objects." },
                                        { "name": "Array.prototype", "desc": "Allows the addition of properties to all array objects." },
                                        { "name": "Tips", "desc": "", "sub-head": "Array instances Properties" },
                                        { "name": "Array.prototype.constructor", "desc": "Specifies the function that creates an object's prototype." },
                                        { "name": "Array.prototype.length", "desc": "Reflects the number of elements in an array." },
                                        { "name": "Array.prototype[@@unscopables]", "desc": "A symbol containing property names to exclude from a with binding scope." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Array.from()", "desc": "Creates a new Array instance from an array-like or iterable object." },
                                        { "name": "Array.isArray()", "desc": "Returns true if a variable is an array, if not false." },
                                        { "name": "Array.of()", "desc": "Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments." },

                                        { "name": "Tips", "desc": "", "sub-head": "Array instances Methods" },

                                        { "name": "Tips", "desc": "Mutator methods - These methods modify the array" },

                                        { "name": "Array.prototype.copyWithin()", "desc": "Copies a sequence of array elements within the array." },
                                        { "name": "Array.prototype.fill()", "desc": "Fills all the elements of an array from a start index to an end index with a static value." },
                                        { "name": "Array.prototype.pop()", "desc": "Removes the last element from an array and returns that element." },
                                        { "name": "Array.prototype.push()", "desc": "Adds one or more elements to the end of an array and returns the new length of the array." },
                                        { "name": "Array.prototype.reverse()", "desc": "Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first." },
                                        { "name": "Array.prototype.shift()", "desc": "Removes the first element from an array and returns that element." },
                                        { "name": "Array.prototype.sort()", "desc": "Sorts the elements of an array in place and returns the array." },
                                        { "name": "Array.prototype.splice()", "desc": "Adds and/or removes elements from an array." },
                                        { "name": "Array.prototype.unshift()", "desc": "Adds one or more elements to the front of an array and returns the new length of the array." },

                                        { "name": "Tips", "desc": "Accessor methods - These methods do not modify the array and return some representation of the array." },

                                        { "name": "Array.prototype.concat()", "desc": "Returns a new array comprised of this array joined with other array(s) and/or value(s)." },
                                        { "name": "Array.prototype.includes() ", "desc": "Determines whether an array contains a certain element, returning true or false as appropriate." },
                                        { "name": "Array.prototype.indexOf()", "desc": "Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found." },
                                        { "name": "Array.prototype.join()", "desc": "Joins all elements of an array into a string." },
                                        { "name": "Array.prototype.lastIndexOf()", "desc": "Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found." },
                                        { "name": "Array.prototype.slice()", "desc": "Extracts a section of an array and returns a new array." },
                                        { "name": "Array.prototype.toSource()", "desc": "Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method." },
                                        { "name": "Array.prototype.toString()", "desc": "Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method." },
                                        { "name": "Array.prototype.toLocaleString()", "desc": "Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method." },

                                        { "name": "Tips", "desc": "Iteration methods - " },

                                        { "name": "Array.prototype.entries()", "desc": "Returns a new Array Iterator object that contains the key/value pairs for each index in the array." },
                                        { "name": "Array.prototype.every()", "desc": "Returns true if every element in this array satisfies the provided testing function." },
                                        { "name": "Array.prototype.filter()", "desc": "Creates a new array with all of the elements of this array for which the provided filtering function returns true." },
                                        { "name": "Array.prototype.find()", "desc": "Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found." },
                                        { "name": "Array.prototype.findIndex()", "desc": "Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found." },
                                        { "name": "Array.prototype.forEach()", "desc": "Calls a function for each element in the array." },
                                        { "name": "Array.prototype.keys()", "desc": "Returns a new Array Iterator that contains the keys for each index in the array." },
                                        { "name": "Array.prototype.map()", "desc": "Creates a new array with the results of calling a provided function on every element in this array." },
                                        { "name": "Array.prototype.reduce()", "desc": "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value." },
                                        { "name": "Array.prototype.reduceRight()", "desc": "Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value." },
                                        { "name": "Array.prototype.some()", "desc": "Returns true if at least one element in this array satisfies the provided testing function." },
                                        { "name": "Array.prototype.values()", "desc": "Returns a new Array Iterator object that contains the values for each index in the array." },
                                        { "name": "Array.prototype[@@iterator]()", "desc": "Returns a new Array Iterator object that contains the values for each index in the array." }
                                    ]
                                }]
                            },
                            {
                                "Function": [{
                                    "Properties": [
                                        { "name": "Tips", "desc": "The global Function object has no methods or properties of its own. However, since it is a function itself, it does inherit some methods and properties through the prototype chain from Function.prototype. " },
                                        { "name": "Tips", "desc": "", "sub-head": "Function prototype object" },
                                        { "name": "Function.caller ", "desc": "Specifies the function that invoked the currently executing function." },
                                        { "name": "Function.length", "desc": "Specifies the number of arguments expected by the function." },
                                        { "name": "Function.name", "desc": "The name of the function." },
                                        { "name": "Function.displayName ", "desc": "The display name of the function." },
                                        { "name": "Function.prototype.constructor", "desc": "Specifies the function that creates an object's prototype. See Object.prototype.constructor for more details." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Tips", "desc": "The global Function object has no methods or properties of its own. However, since it is a function itself, it does inherit some methods and properties through the prototype chain from Function.prototype. " },
                                        { "name": "Tips", "desc": "", "sub-head": "Function prototype object" },
                                        { "name": "Function.prototype.apply()", "desc": "Calls a function and sets its this to the provided value, arguments can be passed as an Array object." },
                                        { "name": "Function.prototype.bind()", "desc": "Creates a new function which, when called, has its this set to the provided value, with a given sequence of arguments preceding any provided when the new function was called." },
                                        { "name": "Function.prototype.call()", "desc": "Calls (executes) a function and sets its this to the provided value, arguments can be passed as they are." },
                                        { "name": "Function.prototype.isGenerator() ", "desc": "Returns true if the function is a generator; otherwise returns false." },
                                        { "name": "Function.prototype.toSource() ", "desc": "Returns a string representing the source code of the function. Overrides the Object.prototype.toSource method." },
                                        { "name": "Function.prototype.toString()", "desc": "Returns a string representing the source code of the function. Overrides the Object.prototype.toString method." }
                                    ]
                                }]
                            },
                            {
                                "Sets": [{
                                    "Properties": [
                                        { "name": "Set.length", "desc": "The value of the length property is 0." },
                                        { "name": "get Set[@@species]", "desc": "The constructor function that is used to create derived objects." },
                                        { "name": "Set.prototype", "desc": "Represents the prototype for the Set constructor. Allows the addition of properties to all Set objects." },
                                        { "name": "Tips", "desc": "", "sub-head": "Set instances" },
                                        { "name": "Set.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the Set function by default." },
                                        { "name": "Set.prototype.size", "desc": "Returns the number of values in the Set object." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Tips", "desc": "", "sub-head": "Set instances" },
                                        { "name": "Set.prototype.add(value)", "desc": "Appends a new element with the given value to the Set object. Returns the Set object." },
                                        { "name": "Set.prototype.clear()", "desc": "Removes all elements from the Set object." },
                                        { "name": "Set.prototype.delete(value)", "desc": "Removes the element associated to the value and returns the value that Set.prototype.has(value) would have previously returned. Set.prototype.has(value) will return false afterwards." },
                                        { "name": "Set.prototype.entries()", "desc": "Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. This is kept similar to the Map object, so that each entry has the same value for its key and value here." },
                                        { "name": "Set.prototype.forEach(callbackFn[, thisArg])", "desc": "Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback." },
                                        { "name": "Set.prototype.has(value)", "desc": "Returns a boolean asserting whether an element is present with the given value in the Set object or not." },
                                        { "name": "Set.prototype.keys()", "desc": "Is the same function as the values() function and returns a new Iterator object that contains the values for each element in the Set object in insertion order." },
                                        { "name": "Set.prototype.values()", "desc": "Returns a new Iterator object that contains the values for each element in the Set object in insertion order." },
                                        { "name": "Set.prototype[@@iterator]()", "desc": "Returns a new Iterator object that contains the values for each element in the Set object in insertion order." }
                                    ]
                                }]
                            },
                            {
                                "WeakSets": [{
                                    "Properties": [
                                        { "name": "WeakSet.length", "desc": "The value of the length property is 0." },
                                        { "name": "WeakSet.prototype", "desc": "Represents the prototype for the Set constructor. Allows the addition of properties to all WeakSet objects." },
                                        { "name": "Tips", "desc": "All WeakSet instances inherit from WeakSet.prototype.", "sub-head": "WeakSet instances" },
                                        { "name": "WeakSet.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the WeakSet function by default." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Tips", "desc": "All WeakSet instances inherit from WeakSet.prototype.", "sub-head": "WeakSet instances" },
                                        { "name": "WeakSet.prototype.add(value)", "desc": "Appends a new object with the given value to the WeakSet object." },
                                        { "name": "WeakSet.prototype.delete(value)", "desc": "Removes the element associated to the value. WeakSet.prototype.has(value) will return false afterwards." },
                                        { "name": "WeakSet.prototype.has(value)", "desc": "Returns a boolean asserting whether an element is present with the given value in the WeakSet object or not." }
                                    ]
                                }]
                            },
                            {
                                "Maps": [{
                                    "Properties": [
                                        { "name": "Map.length", "desc": "The value of the length property is 0." },
                                        { "name": "get Map[@@species]", "desc": "The constructor function that is used to create derived objects." },
                                        { "name": "Map.prototype", "desc": "Represents the prototype for the Map constructor. Allows the addition of properties to all Map objects." },
                                        { "name": "Tips", "desc": "", "sub-head": "Map instances" },
                                        { "name": "Map.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the Map function by default." },
                                        { "name": "Map.prototype.size", "desc": "Returns the number of key/value pairs in the Map object." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Tips", "desc": "", "sub-head": "Map instances" },
                                        { "name": "Map.prototype.clear()", "desc": "Removes all key/value pairs from the Map object." },
                                        { "name": "Map.prototype.delete(key)", "desc": "Removes any value associated to the key and returns the value that Map.prototype.has(key) would have previously returned. Map.prototype.has(key) will return false afterwards." },
                                        { "name": "Map.prototype.entries()", "desc": "Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order." },
                                        { "name": "Map.prototype.forEach(callbackFn[, thisArg])", "desc": "Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback." },
                                        { "name": "Map.prototype.get(key)", "desc": "Returns the value associated to the key, or undefined if there is none." },
                                        { "name": "Map.prototype.has(key)", "desc": "Returns a boolean asserting whether a value has been associated to the key in the Map object or not." },
                                        { "name": "Map.prototype.keys()", "desc": "Returns a new Iterator object that contains the keys for each element in the Map object in insertion order." },
                                        { "name": "Map.prototype.set(key, value)", "desc": "Sets the value for the key in the Map object. Returns the Map object." },
                                        { "name": "Map.prototype.values()", "desc": "Returns a new Iterator object that contains the values for each element in the Map object in insertion order." },
                                        { "name": "Map.prototype[@@iterator]()", "desc": "Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order." }
                                    ]
                                }]
                            },
                            {
                                "WeakMaps": [{
                                    "Properties": [
                                        { "name": "WeakMap.length", "desc": "The value of the length property is 0." },
                                        { "name": "WeakMap.prototype", "desc": "Represents the prototype for the WeakMap constructor. Allows the addition of properties to all WeakMap objects." },
                                        { "name": "Tips", "desc": "", "sub-head": "WeakMap instances" },
                                        { "name": "WeakMap.prototype.constructor", "desc": "Returns the function that created an instance's prototype. This is the WeakMap function by default." }
                                    ]
                                }, {
                                    "Methods": [
                                        { "name": "Tips", "desc": "", "sub-head": "WeakMap instances" },
                                        { "name": "WeakMap.prototype.delete(key)", "desc": "Removes any value associated to the key. WeakMap.prototype.has(key) will return false afterwards." },
                                        { "name": "WeakMap.prototype.get(key)", "desc": "Returns the value associated to the key, or undefined if there is none." },
                                        { "name": "WeakMap.prototype.has(key)", "desc": "Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not." },
                                        { "name": "WeakMap.prototype.set(key, value)", "desc": "Sets the value for the key in the WeakMap object. Returns the WeakMap object." }
                                    ]
                                }]
                            }
                        ]
                    }
                ],
                "Patterns": ["Module", "Prototype", "Observer", "Singleton"]
            }
        },
        {
            "Browser BOM": [{
                "Window": [{
                        "Properties": [
                            { "keyType": "ReadOnly", "name": "Window.applicationCache", "desc": "An OfflineResourceList object providing access to the offline resources for the window." },
                            { "keyType": "ReadOnly", "name": "Window.closed", "desc": "This property indicates whether the current window is closed or not." },
                            { "keyType": "ReadOnly", "name": "Window.console ", "desc": "Returns a reference to the console object which provides access to the browser's debugging console." },
                            { "keyType": "ReadOnly", "name": "Window.controllers", "desc": "Returns the XUL controller objects for the current chrome window." },
                            { "keyType": "ReadOnly", "name": "Window.crypto", "desc": "Returns the browser crypto object." },
                            { "keyType": "ReadOnly", "name": "Window.devicePixelRatio ", "desc": "Returns the ratio between physical pixels and device independent pixels in the current display." },
                            { "keyType": "ReadOnly", "name": "Window.dialogArguments ", "desc": "Gets the arguments passed to the window (if it's a dialog box) at the time window.showModalDialog() was called. This is an nsIArray." },
                            { "keyType": "ReadOnly", "name": "Window.document", "desc": "Returns a reference to the document that the window contains." },
                            { "keyType": "ReadOnly", "name": "Window.frameElement ", "desc": "Returns the element in which the window is embedded, or null if the window is not embedded." },
                            { "keyType": "ReadOnly", "name": "Window.frames", "desc": "Returns an array of the subframes in the current window." },
                            { "keyType": "ReadOnly", "name": "Window.fullScreen", "desc": "This property indicates whether the window is displayed in full screen or not." },
                            { "keyType": "ReadOnly", "name": "Window.history", "desc": "Returns a reference to the history object." },
                            { "keyType": "ReadOnly", "name": "Window.innerHeight", "desc": "Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar." },
                            { "keyType": "ReadOnly", "name": "Window.innerWidth", "desc": "Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar." },
                            { "keyType": "ReadOnly", "name": "Window.isSecureContext", "desc": "Indicates whether a context is capable of using features that require secure contexts." },
                            { "keyType": "ReadOnly", "name": "Window.length", "desc": "Returns the number of frames in the window. See also window.frames." },
                            { "name": "Window.location", "desc": "Gets/sets the location, or current URL, of the window object." },
                            { "keyType": "ReadOnly", "name": "Window.locationbar ", "desc": "Returns the locationbar object, whose visibility can be toggled in the window." },
                            { "keyType": "ReadOnly", "name": "Window.localStorage ", "desc": "Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it." },
                            { "keyType": "ReadOnly", "name": "Window.menubar", "desc": "Returns the menubar object, whose visibility can be toggled in the window." },
                            { "name": "Window.name", "desc": "Gets/sets the name of the window." },
                            { "keyType": "ReadOnly", "name": "Window.navigator ", "desc": "Returns a reference to the navigator object." },
                            { "name": "Window.opener", "desc": "Returns a reference to the window that opened this current window." },
                            { "keyType": "ReadOnly", "name": "Window.outerHeight ", "desc": "Gets the height of the outside of the browser window." },
                            { "keyType": "ReadOnly", "name": "Window.outerWidth", "desc": "Gets the width of the outside of the browser window." },
                            { "keyType": "ReadOnly", "name": "Window.pageXOffset ", "desc": "An alias for window.scrollX." },
                            { "keyType": "ReadOnly", "name": "Window.pageYOffset", "desc": "An alias for window.scrollY" },
                            { "keyType": "ReadOnly", "name": "Window.sessionStorage ", "desc": "Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it." },
                            { "keyType": "ReadOnly", "name": "Window.parent", "desc": "Returns a reference to the parent of the current window or subframe." },
                            { "keyType": "ReadOnly", "name": "Window.performance", "desc": "Returns a Performance object, which includes the timing and navigation attributes, each of which is an object providing performance-related data. See also Using Navigation Timing for additional information and examples." },
                            { "keyType": "ReadOnly", "name": "Window.personalbar", "desc": "Returns the personalbar object, whose visibility can be toggled in the window." },
                            { "name": "Window.returnValue", "desc": "The return value to be returned to the function that called window.showModalDialog() to display the window as a modal dialog." },
                            { "keyType": "ReadOnly", "name": "Window.screen", "desc": "Returns a reference to the screen object associated with the window." },
                            { "keyType": "ReadOnly", "name": "Window.screenX ", "desc": "Returns the horizontal distance of the left border of the user's browser from the left side of the screen." },
                            { "keyType": "ReadOnly", "name": "Window.screenY", "desc": "Returns the vertical distance of the top border of the user's browser from the top side of the screen." },
                            { "keyType": "ReadOnly", "name": "Window.scrollbars", "desc": "Returns the scrollbars object, whose visibility can be toggled in the window." },
                            { "keyType": "ReadOnly", "name": "Window.scrollMaxX", "desc": "The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width." },
                            { "keyType": "ReadOnly", "name": "Window.scrollMaxY", "desc": "The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height)." },
                            { "keyType": "ReadOnly", "name": "Window.scrollX ", "desc": "Returns the number of pixels that the document has already been scrolled horizontally." },
                            { "keyType": "ReadOnly", "name": "Window.scrollY", "desc": "Returns the number of pixels that the document has already been scrolled vertically." },
                            { "keyType": "ReadOnly", "name": "Window.self", "desc": "Returns an object reference to the window object itself." },
                            { "name": "Window.sessionStorage", "desc": "Returns a storage object for storing data within a single page session." },
                            { "keyType": "ReadOnly", "name": "Window.sidebar", "desc": "Returns a reference to the window object of the sidebar." },
                            { "keyType": "ReadOnly", "name": "Window.speechSynthesis ", "desc": "Returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality." },
                            { "name": "Window.status", "desc": "Gets/sets the text in the statusbar at the bottom of the browser." },
                            { "keyType": "ReadOnly", "name": "Window.statusbar", "desc": "Returns the statusbar object, whose visibility can be toggled in the window." },
                            { "keyType": "ReadOnly", "name": "Window.toolbar", "desc": "Returns the toolbar object, whose visibility can be toggled in the window." },
                            { "keyType": "ReadOnly", "name": "Window.top", "desc": "Returns a reference to the topmost window in the window hierarchy. This property is read only." },
                            { "keyType": "ReadOnly", "name": "Window.window", "desc": "Returns a reference to the current window." },
                            { "keyType": "ReadOnly", "name": "window[0], window[1], etc.", "desc": "Returns a reference to the window object in the frames. See Window.frames for more details." },

                            { "name": "Tips", "desc": "", "sub-head": "Properties implemented from elsewhere" },
                            { "keyType": "ReadOnly", "name": "WindowOrWorkerGlobalScope.caches", "desc": "Returns the CacheStorage object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests." },
                            { "keyType": "ReadOnly", "name": "WindowOrWorkerGlobalScope.indexedDB", "desc": "Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an IDBFactory object." },
                            { "keyType": "ReadOnly", "name": "WindowOrWorkerGlobalScope.isSecureContext ", "desc": "Returns a boolean indicating whether the current context is secure (true) or not (false)." },
                            { "keyType": "ReadOnly", "name": "WindowOrWorkerGlobalScope.origin", "desc": "Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "Window.alert()", "desc": "Displays an alert dialog." },
                            { "name": "Window.blur()", "desc": "Sets focus away from the window." },
                            { "name": "Window.cancelAnimationFrame()", "desc": "Enables you to cancel a callback previously scheduled with Window.requestAnimationFrame." },
                            { "name": "Window.cancelIdleCallback()", "desc": "Enables you to cancel a callback previously scheduled with Window.requestIdleCallback." },
                            { "name": "Window.clearImmediate()", "desc": "Cancels the repeated execution set using setImmediate." },
                            { "name": "Window.close()", "desc": "Closes the current window." },
                            { "name": "Window.confirm()", "desc": "Displays a dialog with a message that the user needs to respond to." },
                            { "name": "Window.dispatchEvent()", "desc": "Used to trigger an event." },
                            { "name": "Window.dump()", "desc": "Writes a message to the console." },
                            { "name": "Window.find()", "desc": "Searches for a given string in a window." },
                            { "name": "Window.focus()", "desc": "Sets focus on the current window." },
                            { "name": "Window.getComputedStyle()", "desc": "Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element." },
                            { "name": "Window.getDefaultComputedStyle()", "desc": "Gets default computed style for the specified element, ignoring author stylesheets." },
                            { "name": "Window.getSelection()", "desc": "Returns the selection object representing the selected item(s)." },
                            { "name": "Window.matchMedia()", "desc": "Returns a MediaQueryList object representing the specified media query string." },
                            { "name": "Window.maximize()", "desc": "Maximize the window." },
                            { "name": "Window.minimize()", "desc": "Minimizes the window." },
                            { "name": "Window.moveBy()", "desc": "Moves the current window by a specified amount." },
                            { "name": "Window.moveTo()", "desc": "Moves the window to the specified coordinates." },
                            { "name": "Window.open()", "desc": "Opens a new window." },
                            { "name": "Window.postMessage()", "desc": "Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first." },
                            { "name": "Window.print()", "desc": "Opens the Print Dialog to print the current document." },
                            { "name": "Window.prompt()", "desc": "Returns the text entered by the user in a prompt dialog." },
                            { "name": "Window.requestAnimationFrame()", "desc": "Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame." },
                            { "name": "Window.requestIdleCallback()", "desc": "Enables the scheduling of tasks during a browser's idle periods." },
                            { "name": "Window.resizeBy()", "desc": "Resizes the current window by a certain amount." },
                            { "name": "Window.resizeTo()", "desc": "Dynamically resizes window." },
                            { "name": "Window.scroll()", "desc": "Scrolls the window to a particular place in the document." },
                            { "name": "Window.scrollBy()", "desc": " Scrolls the document in the window by the given amount." },
                            { "name": "Window.scrollByLines()", "desc": "Scrolls the document by the given number of lines." },
                            { "name": "Window.scrollByPages() ", "desc": "Scrolls the current document by the specified number of pages." },
                            { "name": "Window.scrollTo()", "desc": "Scrolls to a particular set of coordinates in the document." },
                            { "name": "Window.setCursor()", "desc": "Changes the cursor for the current window" },
                            { "name": "Window.setImmediate()", "desc": "Executes a function after the browser has finished other heavy tasks" },
                            { "name": "Window.setResizable()", "desc": "Toggles a user's ability to resize a window." },
                            { "name": "Window.sizeToContent()", "desc": "Sizes the window according to its content." },
                            { "name": "Window.stop()", "desc": "This method stops window loading." },
                            { "name": "Window.updateCommands()", "desc": "Updates the state of commands of the current chrome window (UI)." },
                            { "name": "Tips", "desc": "", "sub-head": "Methods implemented from elsewhere" },
                            { "name": "EventTarget.addEventListener()", "desc": "Register an event handler to a specific event type on the window." },
                            { "name": "WindowOrWorkerGlobalScope.atob()", "desc": "Decodes a string of data which has been encoded using base-64 encoding." },
                            { "name": "WindowOrWorkerGlobalScope.btoa()", "desc": "Creates a base-64 encoded ASCII string from a string of binary data." },
                            { "name": "WindowOrWorkerGlobalScope.clearInterval()", "desc": "Cancels the repeated execution set using WindowOrWorkerGlobalScope.setInterval()." },
                            { "name": "WindowOrWorkerGlobalScope.clearTimeout()", "desc": "Cancels the delayed execution set using WindowOrWorkerGlobalScope.setTimeout()." },
                            { "name": "WindowOrWorkerGlobalScope.createImageBitmap()", "desc": "Accepts a variety of different image sources, and returns a Promise which resolves to an ImageBitmap. Optionally the source is cropped to the rectangle of pixels originating at (sx, sy) with width sw, and height sh." },
                            { "name": "WindowOrWorkerGlobalScope.fetch()", "desc": "Starts the process of fetching a resource from the network." },
                            { "name": "EventTarget.removeEventListener", "desc": "Removes an event listener from the window." },
                            { "name": "WindowOrWorkerGlobalScope.setInterval()", "desc": "Schedules a function to execute every time a given number of milliseconds elapses." },
                            { "name": "WindowOrWorkerGlobalScope.setTimeout()", "desc": "Schedules a function to execute in a given amount of time." }
                        ]
                    },
                    {
                        "Event Handlers / WindowEventHandlers": [
                            { "name": "window.onabort", "desc": "Called when the loading of a resource has been aborted, such as by a user canceling the load while it is still in progress" },
                            { "name": "WindowEventHandlers.onafterprint", "desc": "Called when the print dialog box is closed. See afterprint event." },
                            { "name": "WindowEventHandlers.onbeforeprint", "desc": "Called when the print dialog box is opened. See beforeprint event." },
                            { "name": "Window.onbeforeinstallprompt", "desc": "An event handler property dispatched before a user is prompted to save a web site to a home screen on mobile." },
                            { "name": "WindowEventHandlers.onbeforeunload", "desc": "An event handler property for before-unload events on the window." },
                            { "name": "GlobalEventHandlers.onblur", "desc": "Called after the window loses focus, such as due to a popup." },
                            { "name": "GlobalEventHandlers.onchange", "desc": "An event handler property for change events on the window." },
                            { "name": "GlobalEventHandlers.onclick", "desc": "Called after the ANY mouse button is pressed & released" },
                            { "name": "GlobalEventHandlers.ondblclick", "desc": "Called when a double click is made with ANY mouse button." },
                            { "name": "GlobalEventHandlers.onclose", "desc": "Called after the window is closed" },
                            { "name": "GlobalEventHandlers.oncontextmenu", "desc": "Called when the RIGHT mouse button is pressed" },
                            { "name": "Window.ondevicelight", "desc": "An event handler property for any ambient light levels changes" },
                            { "name": "Window.ondevicemotion", "desc": "Called if accelerometer detects a change (For mobile devices)" },
                            { "name": "Window.ondeviceorientation", "desc": "Called when the orientation is changed (For mobile devices)" },
                            { "keyType": "ChromeOnly", "name": "Window.ondeviceorientationabsolute", "desc": "An event handler property for any device orientation changes." },
                            { "name": "Window.ondeviceproximity", "desc": "An event handler property for device proximity event" },
                            { "name": "GlobalEventHandlers.onerror", "desc": "Called when a resource fails to load OR when an error occurs at runtime. See error event." },
                            { "name": "GlobalEventHandlers.onfocus", "desc": "Called after the window receives or regains focus. See focus events." },
                            { "name": "WindowEventHandlers.onhashchange", "desc": "An event handler property for hashchange events on the window; called when the part of the URL after the hash mark ('#') changes." },
                            { "name": "Window.onappinstalled", "desc": "Called when the page is installed as a webapp. See appinstalled event." },
                            { "name": "Window.ongamepadconnected", "desc": "Represents an event handler that will run when a gamepad is connected (when the gamepadconnected event fires)." },
                            { "name": "Window.ongamepaddisconnected", "desc": "Represents an event handler that will run when a gamepad is disconnected (when the gamepaddisconnected event fires)." },
                            { "name": "Window.oninput", "desc": "Called when the value of an input element changes" },
                            { "name": "GlobalEventHandlers.onkeydown", "desc": "Called when you begin pressing ANY key. See keydown event." },
                            { "name": "GlobalEventHandlers.onkeypress", "desc": "Called when a key (except Shift, Fn, and CapsLock) is in pressed position. See keypress event." },
                            { "name": "GlobalEventHandlers.onkeyup", "desc": "Called when you finish releasing ANY key. See keyup event." },
                            { "name": "WindowEventHandlers.onlanguagechange", "desc": "An event handler property for languagechange events on the window." },
                            { "name": "GlobalEventHandlers.onload", "desc": "Called after all resources and the DOM are fully loaded. WILL NOT get called when the page is loaded from cache, such as with back button." },
                            { "name": "WindowEventHandlers.onmessage", "desc": "Is an EventHandler representing the code to be called when the message event is raised." },
                            { "name": "GlobalEventHandlers.onmousedown", "desc": "Called when ANY mouse button is pressed." },
                            { "name": "GlobalEventHandlers.onmousemove", "desc": "Called continously when the mouse is moved inside the window." },
                            { "name": "GlobalEventHandlers.onmouseout", "desc": "Called when the pointer leaves the window." },
                            { "name": "GlobalEventHandlers.onmouseover", "desc": "Called when the pointer enters the window" },
                            { "name": "GlobalEventHandlers.onmouseup", "desc": "Called when ANY mouse button is released" },
                            { "name": "Window.onmozbeforepaint", "desc": "An event handler property for the MozBeforePaint event, which is sent before repainting the window if the event has been requested by a call to the Window.mozRequestAnimationFrame() method." },
                            { "name": "WindowEventHandlers.onoffline", "desc": "Called when network connection is lost. See offline event." },
                            { "name": "WindowEventHandlers.ononline", "desc": "Called when network connection is established. See online event." },
                            { "name": "WindowEventHandlers.onpagehide", "desc": "Called when the user navigates away from the page, before the onunload event. See pagehide event. <a href='https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent' target='_blank'> link </a> " },
                            { "name": "WindowEventHandlers.onpageshow", "desc": "Called after all resources and the DOM are fully loaded. See  <a href='https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent' target='_blank'> link </a> " },
                            { "name": "Window.onpaint", "desc": "An event handler property for paint events on the window." },
                            { "name": "WindowEventHandlers.onpopstate", "desc": "Called when a back putton is pressed." },
                            { "name": "Window.onrejectionhandled ", "desc": "An event handler for handled Promise rejection events." },
                            { "name": "GlobalEventHandlers.onreset", "desc": "Called when a form is reset" },
                            { "name": "GlobalEventHandlers.onresize", "desc": "Called continuously as you are resizing the window." },
                            { "name": "GlobalEventHandlers.onscroll", "desc": "Called when the scroll bar is moved via ANY means. If the resource fully fits in the window, then this event cannot be invoked" },
                            { "name": "GlobalEventHandlers.onwheel", "desc": "Called when the mouse wheel is rotated around any axis" },
                            { "name": "GlobalEventHandlers.onselect", "desc": "Called after text in an input field is selected" },
                            { "name": "GlobalEventHandlers.onselectionchange", "desc": "Is an EventHandler representing the code to be called when the selectionchange event is raised." },
                            { "name": "WindowEventHandlers.onstorage", "desc": "Called when there is a change in session storage or local storage. See storage event" },
                            { "name": "GlobalEventHandlers.onsubmit", "desc": "Called when a form is submitted" },
                            { "name": "WindowEventHandlers.onunhandledrejection ", "desc": "An event handler for unhandled Promise rejection events." },
                            { "name": "WindowEventHandlers.onunload", "desc": "Called when the user navigates away from the page." },
                            { "name": "Window.onuserproximity", "desc": "An event handler property for user proximity events." },
                            { "name": "Window.onvrdisplayconnect", "desc": "Represents an event handler that will run when a compatible VR device has been connected to the computer (when the vrdisplayconnected event fires)." },
                            { "name": "Window.onvrdisplaydisconnect", "desc": "Represents an event handler that will run when a compatible VR device has been disconnected from the computer (when the vrdisplaydisconnected event fires)." },
                            { "name": "Window.onvrdisplayactivate", "desc": "Represents an event handler that will run when a display is able to be presented to (when the vrdisplayactivate event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on." },
                            { "name": "Window.onvrdisplaydeactivate", "desc": "Represents an event handler that will run when a display can no longer be presented to (when the vrdisplaydeactivate event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity." },
                            { "name": "Window.onvrdisplayblur", "desc": "Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the vrdisplayblur event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience." },
                            { "name": "Window.onvrdisplayfocus", "desc": "Represents an event handler that will run when presentation to a display has resumed after being blurred (when the vrdisplayfocus event fires)." },
                            { "name": "Window.onvrdisplaypresentchange", "desc": "represents an event handler that will run when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa (when the vrdisplaypresentchange event fires)." }
                        ]
                    }
                ]
            }, {
                "Navigator": [{
                    "Properties": [
                        { "keyType": "ReadOnly", "name": "Navigator.activeVRDisplays ", "desc": "Returns an array containing every VRDisplay object that is currently presenting (VRDisplay.ispresenting is true)." },
                        { "keyType": "ReadOnly", "name": "NavigatorID.appCodeName ", "desc": "Returns the internal 'code' name of the current browser. Do not rely on this property to return the correct value." },
                        { "keyType": "ReadOnly", "name": "NavigatorID.appName ", "desc": "Returns a DOMString with the official name of the browser. Do not rely on this property to return the correct value." },
                        { "keyType": "ReadOnly", "name": "NavigatorID.appVersion", "desc": "Returns the version of the browser as a DOMString. Do not rely on this property to return the correct value." },
                        { "keyType": "ReadOnly", "name": "Navigator.battery", "desc": "Returns a BatteryManager object you can use to get information about the battery charging status." },
                        { "keyType": "ReadOnly", "name": "Navigator.connection", "desc": "Provides a NetworkInformation object containing information about the network connection of a device." },
                        { "keyType": "ReadOnly", "name": "Navigator.cookieEnabled ", "desc": "Returns false if setting a cookie will be ignored and true otherwise." },
                        { "keyType": "ReadOnly", "name": "Navigator.geolocation ", "desc": "Returns a Geolocation object allowing accessing the location of the device." },
                        { "keyType": "ReadOnly", "name": "NavigatorConcurrentHardware.hardwareConcurrency ", "desc": "Returns the number of logical processor cores available." },
                        { "keyType": "ReadOnly", "name": "NavigatorPlugins.javaEnabled", "desc": "Returns a Boolean flag indicating whether the host browser is Java-enabled or not." },
                        { "keyType": "ReadOnly", "name": "NavigatorLanguage.language", "desc": "Returns a DOMString representing the preferred language of the user, usually the language of the browser UI. The null value is returned when this is unknown." },
                        { "keyType": "ReadOnly", "name": "NavigatorLanguage.languages", "desc": "Returns an array of DOMString representing the languages known to the user, by order of preference." },
                        { "keyType": "ReadOnly", "name": "NavigatorPlugins.mimeTypes ", "desc": "Returns an MimeTypeArray listing the MIME types supported by the browser." },
                        { "keyType": "ReadOnly", "name": "NavigatorOnLine.onLine", "desc": "Returns a Boolean indicating whether the browser is working online." },
                        { "name": "Navigator.oscpu", "desc": "Returns a string that represents the current operating system." },
                        { "keyType": "ReadOnly", "name": "Navigator.permissions ", "desc": "Returns a Permissions object that can be used to query and update permission status of APIs covered by the Permissions API." },
                        { "keyType": "ReadOnly", "name": "NavigatorID.platform ", "desc": "Returns a string representing the platform of the browser. Do not rely on this function to return a significant value." },
                        { "keyType": "ReadOnly", "name": "NavigatorPlugins.plugins ", "desc": "Returns a PluginArray listing the plugins installed in the browser." },
                        { "keyType": "ReadOnly", "name": "NavigatorID.product", "desc": "Always returns 'Gecko', on any browser. This property is kept only for compatibility purpose." },
                        { "keyType": "ReadOnly", "name": "Navigator.serviceWorker", "desc": "Returns a ServiceWorkerContainer object, which provides access to registration, removal, upgrade, and communication with the ServiceWorker objects for the associated document." },
                        { "keyType": "ReadOnly", "name": "Navigator.storage", "desc": "Returns the singleton StorageManager object used for managing persistance permissions and estimating available storage on a site-by-site/app-by-app basis." },
                        { "keyType": "ReadOnly", "name": "NavigatorID.userAgent ", "desc": "Returns the user agent string for the current browser." }
                    ]
                }, {
                    "Methods": [
                        { "name": "Navigator.getVRDisplays()", "desc": "Returns a promise that resolves to an array of VRDisplay objects representing any available VR devices connected to the computer." },
                        { "name": "Navigator.getUserMedia() ", "desc": "After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer." },
                        { "name": "Navigator.registerContentHandler()", "desc": "Allows web sites to register themselves as a possible handler for a given MIME type." },
                        { "name": "Navigator.registerProtocolHandler()", "desc": "Allows web sites to register themselves as a possible handler for a given protocol." },
                        { "name": "Navigator.requestMediaKeySystemAccess()", "desc": "Returns a Promise for a MediaKeySystemAccess object." },
                        { "name": "Navigator.sendBeacon()", "desc": "Used to asynchronously transfer a small amount of data using HTTP from the User Agent to a web server." },
                        { "name": "Navigator.share()", "desc": "Invokes the native sharing mechanism of the current platform." },
                        { "name": "Navigator.vibrate()", "desc": "Causes vibration on devices with support for it. Does nothing if vibration support isn't available." }
                    ]
                }]
            }, {
                "Screen": [{
                    "Properties": [
                        { "name": "Screen.availTop", "desc": "Specifies the y-coordinate of the first pixel that is not allocated to permanent or semipermanent user interface features." },
                        { "name": "Screen.availLeft", "desc": "Returns the first available pixel available from the left side of the screen." },
                        { "name": "Screen.availHeight", "desc": "Specifies the height of the screen, in pixels, minus permanent or semipermanent user interface features displayed by the operating system, such as the Taskbar on Windows." },
                        { "name": "Screen.availWidth", "desc": "Returns the amount of horizontal space in pixels available to the window." },
                        { "name": "Screen.colorDepth", "desc": "Returns the color depth of the screen." },
                        { "name": "Screen.height", "desc": "Returns the height of the screen in pixels." },
                        { "name": "Screen.left", "desc": "Returns the distance in pixels from the left side of the main screen to the left side of the current screen." },
                        { "name": "Screen.orientation", "desc": "Returns the current orientation of the screen." },
                        { "name": "Screen.pixelDepth", "desc": "Gets the bit depth of the screen." },
                        { "name": "Screen.top", "desc": "Returns the distance in pixels from the top side of the current screen." },
                        { "name": "Screen.width", "desc": "Returns the width of the screen." },
                        { "name": "Screen.mozEnabled", "desc": "Boolean. Setting to false will turn off the device's screen." },
                        { "name": "Screen.mozBrightness", "desc": "Controls the brightness of a device's screen. A double between 0 and 1.0 is expected." },
                        { "keyType": "Events handler", "name": "Screen.onorientationchange", "desc": "A handler for the orientationchange events." }
                    ]
                }, {
                    "Methods": [
                        { "name": "Screen.lockOrientation", "desc": "Lock the screen orientation (only works in fullscreen or for installed apps)" },
                        { "name": "Screen.unlockOrientation", "desc": "Unlock the screen orientation (only works in fullscreen or for installed apps)" },
                        { "name": "EventTarget.addEventListener()", "desc": "Register an event handler of a specific event type on the EventTarget." },
                        { "name": "EventTarget.removeEventListener()", "desc": "Removes an event listener from the EventTarget." },
                        { "name": "EventTarget.dispatchEvent()", "desc": "Dispatch an event to this EventTarget." }
                    ]
                }]
            }, {
                "History": [{
                    "Properties": [
                        { "keyType": "ReadOnly", "name": "History.length", "desc": "Returns an Integer representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns 1." },
                        { "name": "History.scrollRestoration ", "desc": "Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either auto or manual." },
                        { "keyType": "ReadOnly", "name": "History.state", "desc": "Returns an any value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a popstate event." }
                    ]
                }, {
                    "Methods": [
                        { "name": "History.back()", "desc": "Goes to the previous page in session history, the same action as when the user clicks the browser's Back button. Equivalent to history.go(-1)." },
                        { "name": "History.forward()", "desc": "Goes to the next page in session history, the same action as when the user clicks the browser's Forward button; this is equivalent to history.go(1)." },
                        { "name": "History.go()", "desc": "Loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1  for the next page. If you specify an out-of-bounds value (for instance, specifying -1 when there are no previously-visited pages in the session history), this method silently has no effect. Calling go() without parameters or a value of 0 reloads the current page. Internet Explorer lets you also specify a string to go to a specific page in the history list." },
                        { "name": "History.pushState()", "desc": "Pushes the given data onto the session history stack with the specified title and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.  Note that Firefox currently ignores the title parameter; for more information, see manipulating the browser history." },
                        { "name": "History.replaceState()", "desc": "Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.  Note that Firefox currently ignores the title parameter; for more information, see manipulating the browser history." }
                    ]
                }]
            }, {
                "Location": [{
                    "Properties": [
                        { "name": "Location.href", "desc": "Is a DOMString containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document." },
                        { "name": "Location.protocol", "desc": "Is a DOMString containing the protocol scheme of the URL, including the final ':'." },
                        { "name": "Location.host", "desc": "Is a DOMString containing the host, that is the hostname, a ':', and the port of the URL." },
                        { "name": "Location.hostname", "desc": "Is a DOMString containing the domain of the URL." },
                        { "name": "Location.port", "desc": "Is a DOMString containing the port number of the URL." },
                        { "name": "Location.pathname", "desc": "Is a DOMString containing an initial '/' followed by the path of the URL." },
                        { "name": "Location.search", "desc": "Is a DOMString containing a '?' followed by the parameters or 'querystring' of the URL. Modern browsers provide URLSearchParams and URL.searchParams to make it easy to parse out the parameters from the querystring." },
                        { "name": "Location.hash", "desc": "Is a DOMString containing a '#' followed by the fragment identifier of the URL." },
                        { "name": "Location.username", "desc": "Is a DOMString containing the username specified before the domain name." },
                        { "name": "Location.password", "desc": "Is a DOMString containing the password specified before the domain name." },
                        { "keyType": "Readonly", "name": "Location.origin ", "desc": "Returns a DOMString containing the canonical form of the origin of the specific location." }
                    ]
                }, {
                    "Methods": [
                        { "name": "Location.assign()", "desc": "Loads the resource at the URL provided in parameter." },
                        { "name": "Location.reload()", "desc": "Reloads the resource from the current URL. Its optional unique parameter is a Boolean, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache." },
                        { "name": "Location.replace()", "desc": "Replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it." },
                        { "name": "Location.toString()", "desc": "Returns a DOMString containing the whole URL. It is a synonym for URLUtils.href, though it can't be used to modify the value." }
                    ]
                }]
            }]
        },
        {
            "HTML DOM": [{
                    "Document": [{
                        "Properties": [
                            { "keyType": "Readonly", "name": "Document.characterSet ", "desc": "Returns the character set being used by the document." },
                            { "keyType": "Readonly", "name": "Document.charset ", "desc": "Alias of Document.characterSet. Use this property instead." },
                            { "keyType": "Readonly", "name": "Document.compatMode", "desc": "Indicates whether the document is rendered in quirks or strict mode." },
                            { "keyType": "Readonly", "name": "Document.contentType", "desc": "Returns the Content-Type from the MIME Header of the current document." },
                            { "keyType": "Readonly", "name": "Document.doctype", "desc": "Returns the Document Type Definition (DTD) of the current document." },
                            { "keyType": "Readonly", "name": "Document.documentElement", "desc": "Returns the Element that is a direct child of the document. For HTML documents, this is normally the <html> element." },
                            { "keyType": "Readonly", "name": "Document.documentURI", "desc": "Returns the document location as a string." },
                            { "keyType": "Readonly", "name": "Document.hidden", "desc": "--" },
                            { "keyType": "Readonly", "name": "Document.implementation ", "desc": "Returns the DOM implementation associated with the current document." },
                            { "keyType": "Readonly", "name": "Document.lastStyleSheetSet", "desc": "Returns the name of the style sheet set that was last enabled. Has the value null until the style sheet is changed by setting the value of selectedStyleSheetSet." },
                            { "keyType": "Readonly", "name": "Document.mozSyntheticDocument ", "desc": "Returns a Boolean that is true only if this document is synthetic, such as a standalone image, video, audio file, or the like." },
                            { "keyType": "Readonly", "name": "Document.mozFullScreenElement", "desc": "The element that's currently in full screen mode for this document." },
                            { "keyType": "Readonly", "name": "Document.mozFullScreenEnabled", "desc": "true if calling Element.mozRequestFullscreen() would succeed in the curent document." },
                            { "keyType": "Readonly", "name": "Document.pointerLockElement", "desc": "Returns the element set as the target for mouse events while the pointer is locked. null if lock is pending, pointer is unlocked, or if the target is in another document." },
                            { "keyType": "Readonly", "name": "Document.preferredStyleSheetSet", "desc": "Returns the preferred style sheet set as specified by the page author." },
                            { "keyType": "Readonly", "name": "Document.scrollingElement", "desc": "Returns a reference to the Element that scrolls the document." },
                            { "keyType": "Readonly", "name": "Document.selectedStyleSheetSet", "desc": "Returns which style sheet set is currently in use." },
                            { "keyType": "Readonly", "name": "Document.styleSheets ", "desc": "Returns a list of the style sheet objects on the current document." },
                            { "keyType": "Readonly", "name": "Document.styleSheetSets", "desc": "Returns a list of the style sheet sets available on the document." },
                            { "keyType": "Readonly", "name": "Document.timeline ", "desc": "..." },
                            { "keyType": "Readonly", "name": "Document.undoManager", "desc": "..." },
                            { "keyType": "Readonly", "name": "Document.visibilityState", "desc": "Returns a string denoting the visibility state of the document. Possible values are visible,  hidden,  prerender, and unloaded." },
                            { "keyType": "Readonly", "name": "ParentNode.children", "desc": "Returns a live HTMLCollection containing all objects of type Element that are children of this ParentNode." },
                            { "keyType": "Readonly", "name": "ParentNode.firstElementChild", "desc": "Returns the Element that is the first child of this ParentNode, or null if there is none." },
                            { "keyType": "Readonly", "name": "ParentNode.lastElementChild ", "desc": "Returns the Element that is the last child of this ParentNode, or null if there is none." },
                            { "keyType": "Readonly", "name": "ParentNode.childElementCount ", "desc": "Returns an unsigned long giving the amount of children that the object has." },
                            { "keyType": "Readonly", "name": "Document.activeElement", "desc": "Returns the currently focused element." },
                            { "name": "Document.anchors", "desc": "Returns a list of all of the anchors in the document." },
                            { "name": "Document.body", "desc": "Returns the <body> element of the current document." },
                            { "name": "Document.cookie", "desc": "Returns a semicolon-separated list of the cookies for that document or sets a single cookie." },
                            { "keyType": "Readonly", "name": "Document.defaultView ", "desc": "Returns a reference to the window object." },
                            { "name": "Document.designMode", "desc": "Gets/sets the ability to edit the whole document." },
                            { "keyType": "Readonly", "name": "Document.dir", "desc": "Gets/sets directionality (rtl/ltr) of the document." },
                            { "name": "Document.domain", "desc": "Gets/sets the domain of the current document." },
                            { "keyType": "Readonly", "name": "Document.embeds", "desc": "eturns a list of the embedded <embed> elements within the current document." },
                            { "keyType": "Readonly", "name": "Document.forms ", "desc": "Returns a list of the <form> elements within the current document." },
                            { "keyType": "Readonly", "name": "Document.head ", "desc": "Returns the <head> element of the current document." },
                            { "keyType": "Readonly", "name": "Document.images", "desc": "Returns a list of the images in the current document." },
                            { "keyType": "Readonly", "name": "Document.lastModified ", "desc": "Returns the date on which the document was last modified." },
                            { "keyType": "Readonly", "name": "Document.links", "desc": "Returns a list of all the hyperlinks in the document." },
                            { "keyType": "Readonly", "name": "Document.location", "desc": "Returns the URI of the current document." },
                            { "keyType": "Readonly", "name": "Document.plugins", "desc": "Returns a list of the available plugins." },
                            { "keyType": "Readonly", "name": "Document.readyState", "desc": "Returns loading status of the document." },
                            { "keyType": "Readonly", "name": "Document.referrer ", "desc": "Returns the URI of the page that linked to this page." },
                            { "keyType": "Readonly", "name": "Document.scripts", "desc": "Returns all the script elements on the document." },
                            { "keyType": "Readonly", "name": "Document.title", "desc": "Sets or gets the title of the current document." },
                            { "keyType": "Readonly", "name": "Document.URL", "desc": "Returns the document location as a string." },
                            { "name": "Tips", "desc": "", "sub-head": "Event handlers" },
                            { "name": "Document.onafterscriptexecute", "desc": "Represents the event handling code for the afterscriptexecute event." },
                            { "name": "Document.onbeforescriptexecute", "desc": "Represents the event handling code for the beforescriptexecute event." },
                            { "name": "Document.oncopy", "desc": "Represents the event handling code for the copy event." },
                            { "name": "Document.oncut ", "desc": "Represents the event handling code for the cut event." },
                            { "name": "Document.onfullscreenchange", "desc": "Is an EventHandler representing the code to be called when the fullscreenchange event is raised." },
                            { "name": "Document.onfullscreenerror", "desc": "Is an EventHandler representing the code to be called when the fullscreenerror event is raised." },
                            { "name": "Document.onpaste ", "desc": "Represents the event handling code for the paste event." },
                            { "name": "Document.onpointerlockchange", "desc": "Represents the event handling code for the pointerlockchange event." },
                            { "name": "Document.onpointerlockerror", "desc": "Represetnts the event handling code for the pointerlockerror event." },
                            { "name": "Document.onreadystatechange", "desc": "Represents the event handling code for the readystatechange event." },
                            { "name": "Document.onselectionchange", "desc": "Is an EventHandler representing the code to be called when the selectionchange event is raised." },
                            { "name": "Document.onvisibilitychange", "desc": "Is an EventHandler representing the code to be called when the visibilitychange event is raised." },
                            { "name": "Document.onwheel", "desc": "Represents the event handling code for the wheel event." },
                            { "name": "GlobalEventHandlers.onabort", "desc": "Is an EventHandler representing the code to be called when the abort event is raised." },
                            { "name": "GlobalEventHandlers.onanimationcancel ", "desc": "An EventHandler called when an animationcancel event is sent, indicating that a running CSS animation has been canceled." },
                            { "name": "GlobalEventHandlers.onanimationend", "desc": "An EventHandler called when an animationend event is sent, indicating that a CSS animation has stopped playing." },
                            { "name": "GlobalEventHandlers.onanimationiteration", "desc": "An EventHandler called when an animationiteration event has been sent, indicating that a CSS animation has begun playing a new iteration of the animation sequence." },
                            { "name": "GlobalEventHandlers.onanimationstart ", "desc": "An EventHandler called when an animationstart event is sent, indicating that a CSS animation has started playing." },
                            { "name": "GlobalEventHandlers.onauxclick", "desc": "An EventHandler called when an auxclick event is sent, indicating that a non-primary button has been pressed on an input device (e.g. a middle mouse button)." },
                            { "name": "GlobalEventHandlers.onblur", "desc": "Is an EventHandler representing the code to be called when the blur event is raised." },
                            { "name": "GlobalEventHandlers.onerror", "desc": "Is an OnErrorEventHandler representing the code to be called when the error event is raised." },
                            { "name": "GlobalEventHandlers.onfocus", "desc": "Is an EventHandler representing the code to be called when the focus event is raised." },
                            { "name": "GlobalEventHandlers.oncancel", "desc": "Is an EventHandler representing the code to be called when the cancel event is raised." },
                            { "name": "GlobalEventHandlers.oncanplay", "desc": "Is an EventHandler representing the code to be called when the canplay event is raised." },
                            { "name": "GlobalEventHandlers.oncanplaythrough", "desc": "Is an EventHandler representing the code to be called when the canplaythrough event is raised." },
                            { "name": "GlobalEventHandlers.onchange", "desc": "Is an EventHandler representing the code to be called when the change event is raised." },
                            { "name": "GlobalEventHandlers.onclick", "desc": "Is an EventHandler representing the code to be called when the click event is raised." },
                            { "name": "GlobalEventHandlers.onclose", "desc": "Is an EventHandler representing the code to be called when the close event is raised." },
                            { "name": "GlobalEventHandlers.oncontextmenu", "desc": "Is an EventHandler representing the code to be called when the contextmenu event is raised." },
                            { "name": "GlobalEventHandlers.oncuechange", "desc": "Is an EventHandler representing the code to be called when the cuechange event is raised." },
                            { "name": "GlobalEventHandlers.ondblclick", "desc": "Is an EventHandler representing the code to be called when the dblclick event is raised." },
                            { "name": "GlobalEventHandlers.ondrag", "desc": "Is an EventHandler representing the code to be called when the drag event is raised." },
                            { "name": "GlobalEventHandlers.ondragend", "desc": "Is an EventHandler representing the code to be called when the dragend event is raised." },
                            { "name": "GlobalEventHandlers.ondragenter", "desc": "Is an EventHandler representing the code to be called when the dragenter event is raised." },
                            { "name": "GlobalEventHandlers.ondragexit", "desc": "Is an EventHandler representing the code to be called when the dragexit event is raised." },
                            { "name": "GlobalEventHandlers.ondragleave", "desc": "Is an EventHandler representing the code to be called when the dragleave event is raised." },
                            { "name": "GlobalEventHandlers.ondragover", "desc": "Is an EventHandler representing the code to be called when the dragover event is raised." },
                            { "name": "GlobalEventHandlers.ondragstart", "desc": "Is an EventHandler representing the code to be called when the dragstart event is raised." },
                            { "name": "GlobalEventHandlers.ondrop", "desc": "Is an EventHandler representing the code to be called when the drop event is raised." },
                            { "name": "GlobalEventHandlers.ondurationchange", "desc": "Is an EventHandler representing the code to be called when the durationchange event is raised." },
                            { "name": "GlobalEventHandlers.onemptied", "desc": "Is an EventHandler representing the code to be called when the emptied event is raised." },
                            { "name": "GlobalEventHandlers.onended", "desc": "Is an EventHandler representing the code to be called when the ended event is raised." },
                            { "name": "GlobalEventHandlers.ongotpointercapture", "desc": "Is an EventHandler representing the code to be called when the gotpointercapture event type is raised." },
                            { "name": "GlobalEventHandlers.oninput", "desc": "Is an EventHandler representing the code to be called when the input event is raised." },
                            { "name": "GlobalEventHandlers.oninvalid", "desc": "Is an EventHandler representing the code to be called when the invalid event is raised." },
                            { "name": "GlobalEventHandlers.onkeydown", "desc": "Is an EventHandler representing the code to be called when the keydown event is raised." },
                            { "name": "GlobalEventHandlers.onkeypress", "desc": "Is an EventHandler representing the code to be called when the keypress event is raised." },
                            { "name": "GlobalEventHandlers.onkeyup", "desc": "Is an EventHandler representing the code to be called when the keyup event is raised." },
                            { "name": "GlobalEventHandlers.onload", "desc": "Is an EventHandler representing the code to be called when the load event is raised." },
                            { "name": "GlobalEventHandlers.onloadeddata", "desc": "Is an EventHandler representing the code to be called when the loadeddata event is raised." },
                            { "name": "GlobalEventHandlers.onloadedmetadata", "desc": "Is an EventHandler representing the code to be called when the loadedmetadata event is raised." },
                            { "name": "GlobalEventHandlers.onloadend", "desc": "Is an EventHandler representing the code to be called when the loadend event is raised (when progress has stopped on the loading of a resource.)" },
                            { "name": "GlobalEventHandlers.onloadstart", "desc": "Is an EventHandler representing the code to be called when the loadstart event is raised (when progress has begun on the loading of a resource.)" },
                            { "name": "GlobalEventHandlers.onlostpointercapture", "desc": "Is an EventHandler representing the code to be called when the lostpointercapture event type is raised." },
                            { "name": "GlobalEventHandlers.onmousedown", "desc": "Is an EventHandler representing the code to be called when the mousedown event is raised." },
                            { "name": "GlobalEventHandlers.onmouseenter", "desc": "Is an EventHandler representing the code to be called when the mouseenter event is raised." },
                            { "name": "GlobalEventHandlers.onmouseleave", "desc": "Is an EventHandler representing the code to be called when the mouseleave event is raised." },
                            { "name": "GlobalEventHandlers.onmousemove", "desc": "Is an EventHandler representing the code to be called when the mousemove event is raised." },
                            { "name": "GlobalEventHandlers.onmouseout", "desc": "Is an EventHandler representing the code to be called when the mouseout event is raised." },
                            { "name": "GlobalEventHandlers.onmouseover", "desc": "Is an EventHandler representing the code to be called when the mouseover event is raised." },
                            { "name": "GlobalEventHandlers.onmouseup", "desc": "Is an EventHandler representing the code to be called when the mouseup event is raised." },
                            { "name": "GlobalEventHandlers.onmousewheel", "desc": "Is an EventHandler representing the code to be called when the mousewheel event is raised." },
                            { "name": "GlobalEventHandlers.onwheel", "desc": "Is an EventHandler representing the code to be called when the wheel event is raised." },
                            { "name": "GlobalEventHandlers.onpause", "desc": "Is an EventHandler representing the code to be called when the pause event is raised." },
                            { "name": "GlobalEventHandlers.onplay", "desc": "Is an EventHandler representing the code to be called when the play event is raised." },
                            { "name": "GlobalEventHandlers.onplaying", "desc": "Is an EventHandler representing the code to be called when the playing event is raised." },
                            { "name": "GlobalEventHandlers.onpointerdown", "desc": "Is an EventHandler representing the code to be called when the pointerdown event is raised." },
                            { "name": "GlobalEventHandlers.onpointermove", "desc": "Is an EventHandler representing the code to be called when the pointermove event is raised." },
                            { "name": "GlobalEventHandlers.onpointerup", "desc": "Is an EventHandler representing the code to be called when the pointerup event is raised." },
                            { "name": "GlobalEventHandlers.onpointercancel", "desc": "Is an EventHandler representing the code to be called when the pointercancel event is raised." },
                            { "name": "GlobalEventHandlers.onpointerover", "desc": "Is an EventHandler representing the code to be called when the pointerover event is raised." },
                            { "name": "GlobalEventHandlers.onpointerout", "desc": "Is an EventHandler representing the code to be called when the pointerout event is raised." },
                            { "name": "GlobalEventHandlers.onpointerenter", "desc": "Is an EventHandler representing the code to be called when the pointerevent event is raised." },
                            { "name": "GlobalEventHandlers.onpointerleave", "desc": "Is an EventHandler representing the code to be called when the pointerleave event is raised." },
                            { "name": "GlobalEventHandlers.onpointerlockchange ", "desc": "Is an EventHandler representing the code to be called when the pointerlockchange event is raised." },
                            { "name": "GlobalEventHandlers.onpointerlockerror", "desc": "Is an EventHandler representing the code to be called when the pointerlockerror event is raised." },
                            { "name": "GlobalEventHandlers.onprogress", "desc": "Is an EventHandler representing the code to be called when the progress event is raised." },
                            { "name": "GlobalEventHandlers.onratechange", "desc": "Is an EventHandler representing the code to be called when the ratechange event is raised." },
                            { "name": "GlobalEventHandlers.onreset", "desc": "Is an EventHandler representing the code to be called when the reset event is raised." },
                            { "name": "GlobalEventHandlers.onscroll", "desc": "Is an EventHandler representing the code to be called when the scroll event is raised." },
                            { "name": "GlobalEventHandlers.onseeked", "desc": "Is an EventHandler representing the code to be called when the seeked event is raised." },
                            { "name": "GlobalEventHandlers.onseeking", "desc": "Is an EventHandler representing the code to be called when the seeking event is raised." },
                            { "name": "GlobalEventHandlers.onselect", "desc": "Is an EventHandler representing the code to be called when the select event is raised." },
                            { "name": "GlobalEventHandlers.onselectstart", "desc": "Is an EventHandler representing the code to be called when the selectionchange event is raised, i.e. when the user starts to make a new text selection on a web page." },
                            { "name": "GlobalEventHandlers.onselectionchange", "desc": "Is an EventHandler representing the code to be called when the selectionchange event is raised, i.e. when the text selected on a web page changes." },
                            { "name": "GlobalEventHandlers.onsubmit", "desc": "Is an EventHandler representing the code to be called when the submit event is raised." },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }]
                }, {
                    "Elements": [{
                        "Properties": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }]
                },
                {
                    "Node": [{
                        "Properties": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }]
                }, {
                    "Attributes": [{
                        "Properties": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }]
                }, {
                    "Events": [{
                        "Properties": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }]
                }, {
                    "Style": [{
                        "Properties": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }, {
                        "Methods": [
                            { "name": "", "desc": "" },
                            { "name": "", "desc": "" }
                        ]
                    }]
                }
            ]
        },
        {
            "HTML APIs": [{
                    "Web Storage": [{
                        "Cookies": [{
                            "Properties": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }, {
                            "Methods": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }]
                    }, {
                        "LocalStorage": [{
                            "Properties": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }, {
                            "Methods": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }]
                    }, {
                        "SessionStorage": [{
                            "Properties": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }, {
                            "Methods": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }]
                    }, {
                        "IndexedDB": [{
                            "Properties": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }, {
                            "Methods": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }]
                    }, {
                        "WebSQL": [{
                            "Properties": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }, {
                            "Methods": [
                                { "name": "", "desc": "" },
                                { "name": "", "desc": "" }
                            ]
                        }]
                    }]
                },
                "Geolocation",
                "Drag/Drop",
                "Web Workers",
                "ServerSentEvents [SSE]"
            ]
        }
    ]
}