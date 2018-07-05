function Converter(toUnit, factor, offset) {
    offset = offset || 0;
    return function (input) {
        console.log([((offset + input) * factor).toFixed(2), toUnit].join(" "));
    }
}

var milesToKm = Converter('km', 1.60936);
var poundsToKg = Converter('kg', 0.45460);
var farenheitToCelsius = Converter('degrees C', 0.5556, -32);

milesToKm(10);
poundsToKg(2.5);
farenheitToCelsius(98);

function Converter1(toUnit, factor, offset, input) {
    console.log([((offset + input) * factor).toFixed(2), toUnit].join(" "));
}

var milesToKm1 = Converter1.bind(this, 'km', 1.60936, 0);
var poundsToKg1 = Converter1.bind(this, 'kg', 0.45460, 0);
var farenheitToCelsius1 = Converter1.bind(this, 'degrees C', 0.5556, -32);

milesToKm1(10);
poundsToKg1(2.5);
farenheitToCelsius1(98);