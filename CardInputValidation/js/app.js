//Standard format credit card format is XXXX XXXX XXXX XXXX XXX 

//https://www.cybersource.com/developers/getting_started/test_and_manage/best_practices/card_type_id/
//https://webstandardssherpa.com/reviews/auto-detecting-credit-card-type/

function getCreditCardType(cardNumber) {

    //start without knowing the credit card type
    var card = {
        type: "unknown",
        maxlength: 23
    };

    // Diners Club and Carte Blanche
    // Valid length: 14 digits. 
    // First digit must be 3 and second digit must be 0, 6, or 8. The ranges are:
    // 300000 through 305999
    // 309500 through 309599
    // 360000 through 369999
    // 380000 through 399999
    if (/^3[0|6|8]/.test(cardNumber)) {
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
    else if (/^6/.test(cardNumber)) {
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
    else if (/^3528|3589/.test(cardNumber)) {
        var card = {
            type: "jcb",
            maxlength: 23
        };
    }


    // MasterCard
    // Valid length: 16 digits.
    // First digit must be 5 and second digit must be in the range 1 through 5 inclusive. The range is 510000 through 559999.
    // First digit must be 2 and second digit must be in the range 2 through 7 inclusive. The range is 222100 through 272099.
    else if (/^5[1-5]/.test(cardNumber)) {
        var card = {
            type: "mastercard",
            maxlength: 19
        };
    }

    else if (/^2[2-7]/.test(cardNumber)) {
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
    else if (/^[5|6]/.test(cardNumber)) {
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

    // if(typeof callback == "function"){
    //     return cardDetails;
    // }

    return card;
};


function handleEvent(event, formatter) {
    var value = event.target.value,
        card = getCreditCardType(value),
        elem = document.getElementById("card-type");

    switch (card.type) {
        case "mastercard":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            //show MasterCard icon
            break;

        case "enRoute":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            //show MasterCard icon
            break;

        case "jcb":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            //show MasterCard icon
            break;

        case "maestro":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            //show MasterCard icon
            break;

        case "discover":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            //show MasterCard icon
            break;

        case "dinersclub":
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);

        case "visa":
            //show Visa icon
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            break;

        case "amex":
            //show American Express icon
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
            formatter(event);
            break;

        default:
            elem.innerHTML = card.type;
            event.target.setAttribute("maxlength", card.maxlength);
        //clear all icons?
        //show error?
    }
}

function formatCard(event) {
    var isformat = false;
    if (event.target.value.length == 4 || event.target.value.length == 9 || event.target.value.length == 14 || event.target.value.length == 19) {
        event.target.value += "-";
    }
}


function formatPasteNumber(e) {
    var formatted =  e.target.value.slice(0, 4) + " - " +  e.target.value.slice(4, 8) + " - " + e.target.value.slice(8, 12) + " - " + e.target.value.slice(12, 16) + " - ";
    e.target.value = formatted;
};


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

var constants = {
    format: "XXXX XXXX XXXX XXXX XXX",
    enabledCards: ["VISA", "MASTERCARD", "AMEX", "DINERSCARD"],
    card: []
}



document.addEventListener("DOMContentLoaded", function () {
    var ccCard = document.getElementById("ccCard");
    ccCard.addEventListener("keypress", function () { handleEvent(event, formatCard) }, false);
    ccCard.addEventListener("blur", function () { formatPasteNumber(event); handleEvent(event, formatPasteNumber); }, false);
    ccCard.setAttribute('placeholder', constants.format)
}, false);


