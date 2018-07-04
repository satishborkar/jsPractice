//https://www.cybersource.com/developers/getting_started/test_and_manage/best_practices/card_type_id/
//https://webstandardssherpa.com/reviews/auto-detecting-credit-card-type/

var input = document.getElementById('cc');

input.oninput = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.value = this.lastValue = parts.join(' ');
    this.selectionStart = this.selectionEnd = caretPosition;

    handleEvent(event);
};

function removeFormatting(num) {
    return num.replace(/\s/g, '');
}

input.onblur = function (e) {
    var isValidCard = false;
    var cardValidElem = document.getElementById("card-valid");
    var originalValue = removeFormatting(e.target.value);

    if (originalValue.length >= 14 && originalValue.length <= 19) {
        isValidCard = isCreditCard(originalValue);
        if (cardValidElem) {
            cardValidElem.innerHTML = isValidCard;
        }
    }

    return isValidCard;

}



input.setAttribute('onkeypress', 'return checkDigit(event)');

input.focus();

//input.onblur = isCreditCard(input.value);
//console.log(input.focusout = isCreditCard(input.value));


function checkDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}


function getCreditCardType(cardNumber) {

    //start without knowing the credit card type
    var card = {
        type: "unknown",
        maxlength: 23
    };

    //console.log(cardNumber.replace(/\s/g,'').substring(0,6));

    // Diners Club and Carte Blanche
    // Valid length: 14 digits. 
    // First digit must be 3 and second digit must be 0, 6, or 8. The ranges are:
    // 300000 through 305999
    // 309500 through 309599
    // 360000 through 369999
    // 380000 through 399999
    if (/^3[0|6|8]/.test(cardNumber) &&
        (cardNumber.replace(/\s/g, '').substring(0, 6) >= 300000 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 305999) ||
        (cardNumber.replace(/\s/g, '').substring(0, 6) >= 309500 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 309599) ||
        (cardNumber.replace(/\s/g, '').substring(0, 6) >= 360000 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 369999) ||
        (cardNumber.replace(/\s/g, '').substring(0, 6) >= 380000 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 399999)) {
        var card = {
            type: "dinersclub",
            maxlength: 17
        };
    }


    // Discover
    // Valid length: 16 digits.
    // First 6 digits must be in one of the following ranges:
    // 601100 through 601109
    // 601120 through 601149
    // 601174
    // 601177 through 601179
    // 601186 through 601199
    // 644000 through 659999
    else if (/^6/.test(cardNumber) &&
        (
            // (cardNumber.replace(/\s/g,'').substring(0,6) >= 601100 && cardNumber.replace(/\s/g,'').substring(0,6) <= 601109) ||
            // (cardNumber.replace(/\s/g,'').substring(0,6) >= 601120 && cardNumber.replace(/\s/g,'').substring(0,6) <= 601149) ||
            // (cardNumber.replace(/\s/g,'').substring(0,6) >= 601177 && cardNumber.replace(/\s/g,'').substring(0,6) <= 601179) ||
            // (cardNumber.replace(/\s/g,'').substring(0,6) >= 644000 && cardNumber.replace(/\s/g,'').substring(0,6) <= 659999) ||

            //removed due to some card was not getting identified 
            (cardNumber.replace(/\s/g, '').substring(0, 6) >= 601100 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 601199) ||
            (cardNumber.replace(/\s/g, '').substring(0, 6) >= 644000 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 659999) //||
            //(cardNumber.replace(/\s/g,'').substring(0,6) == 601174)
        )
    ) {
        var card = {
            type: "discover",
            maxlength: 19
        };
    }

    // enRoute
    // Valid length: 15 digits. First four digits must be 2014 or 2149.
    else if (/^2014|2149/.test(cardNumber)) {
        var card = {
            type: "enRoute",
            maxlength: 18
        };
    }

    // JCB
    // Valid length: 16 to 19 digits.
    // First 4 digits must be in the range 3528 through 3589.   
    else if (/^35/.test(cardNumber) &&
        (cardNumber.replace(/\s/g, '').substring(0, 4) >= 3528 && cardNumber.replace(/\s/g, '').substring(0, 4) <= 3589)
    ) {
        var card = {
            type: "jcb",
            maxlength: 23
        };
    }


    // MasterCard
    // Valid length: 16 digits.
    // First digit must be 5 and second digit must be in the range 1 through 5 inclusive. 
    // The range is 510000 through 559999.
    else if (/^5[1-5]/.test(cardNumber) &&
        (cardNumber.replace(/\s/g, '').substring(0, 6) >= 510000 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 559999)
    ) {
        var card = {
            type: "mastercard",
            maxlength: 19
        };

    }

    // First digit must be 2 and second digit must be in the range 2 through 7 inclusive. 
    // The range is 222100 through 272099.
    else if (/^2[2-7]/.test(cardNumber) &&
        (cardNumber.replace(/\s/g, '').substring(0, 6) >= 222100 && cardNumber.replace(/\s/g, '').substring(0, 6) <= 272099)
    ) {
        var card = {
            type: "mastercard",
            maxlength: 19
        };
    }

    // Maestro
    // Valid length: Up to 19 digits.
    // First digit must be 5 or 6. The ranges are:
    // 50nnnn
    // 56nnnn through 64nnnn
    // 66nnnn through 69nnnn
    // Note: The range 60nnnn to 64nnnn is also used by Discover (see above). 
    else if (/^[5|6]/.test(cardNumber) &&
        (
            (cardNumber.replace(/\s/g, '').substring(0, 2) >= 50) ||
            (cardNumber.replace(/\s/g, '').substring(0, 2) >= 56 && cardNumber.replace(/\s/g, '').substring(0, 2) <= 64) ||
            (cardNumber.replace(/\s/g, '').substring(0, 2) >= 66 && cardNumber.replace(/\s/g, '').substring(0, 2) <= 69)
        )
    ) {
        var card = {
            type: "maestro",
            maxlength: 23
        };
    }

    // Visa
    // Valid length: Up to 19 digits. First digit must be a 4.
    else if (/^4/.test(cardNumber)) {
        var card = {
            type: "visa",
            maxlength: 23
        };
    }

    //American Express
    //Valid length: 15 digits. First digit must be a 3 and second digit must be a 4 or 7. 
    else if (/^3[4|7]/.test(cardNumber)) {
        var card = {
            type: "amex",
            maxlength: 18
        };
    }

    return card;
};

function handleEvent(event) {
    var value = event.target.value,
        card = getCreditCardType(value),
        elem = document.getElementById("card-type");
    //console.log(card);
    switch (card.type) {
        case "mastercard":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            //show MasterCard icon
            break;

        case "enRoute":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            //show MasterCard icon
            break;

        case "jcb":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            //show MasterCard icon
            break;

        case "maestro":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            //show MasterCard icon
            break;

        case "discover":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            //show MasterCard icon
            break;

        case "dinersclub":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);

        case "visa":
            //show Visa icon
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            break;

        case "amex":
            //show American Express icon
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            break;

        default:
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            //clear all icons?
            //show error?
    }
}


function isCreditCard(st) {
    // Encoding only works on cards with less than 19 digits

    if (st.length > 19)
        return (false);

    sum = 0;
    mul = 1;
    l = st.length;
    for (i = 0; i < l; i++) {
        digit = st.substring(l - i - 1, l - i);
        tproduct = parseInt(digit, 10) * mul;
        if (tproduct >= 10)
            sum += (tproduct % 10) + 1;
        else
            sum += tproduct;
        if (mul == 1)
            mul++;
        else
            mul--;
    }
    // Uncomment the following line to help create credit card numbers
    // 1. Create a dummy number with a 0 as the last digit
    // 2. Examine the sum written out
    // 3. Replace the last digit with the difference between the sum and
    //    the next multiple of 10.

    //  document.writeln("<br>Sum      = ",sum,"<br>");
    //  alert("Sum      = " + sum);

    if ((sum % 10) == 0)
        return (true);
    else
        return (false);
}