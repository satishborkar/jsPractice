// function cc_format(value) {
//     var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
//     var matches = v.match(/\d{4,16}/g);
//     var match = matches && matches[0] || ''
//     var parts = []
//     for (i = 0, len = match.length; i < len; i += 4) {
//         parts.push(match.substring(i, i + 4))
//     }
//     if (parts.length) {
//         return parts.join(' ')
//     } else {
//         return value
//     }
// }


// function checkDigit() {
//     var allowedChars = "0123456789";
//     var entryVal = document.getElementById('cc').value();
//     var flag;

//     for (var i = 0; i < entryVal.length; i++) {
//         flag = false;

//         for (var j = 0; j < allowedChars.length; j++) {
//             if (entryVal.charAt(i) == allowedChars.charAt(j)) {
//                 flag = true;
//             }
//         }

//         if (flag == false) {
//             entryVal = entryVal.replace(entryVal.charAt(i), "");
//             i--;
//         }
//     }

//     return true;
// }

// onload = function () {
//     document.getElementById('cc').oninput = function () {
//         this.value = cc_format(this.value)
//     }
// }