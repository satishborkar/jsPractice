var $inpt = $('input[type="text"]');

// for already filled input
$inpt.each(function() {
    if ($(this).val() !== '') {
        $(this).addClass('filled')
    }
});

//for newly filles input
$inpt.on('change', function() {
    if ($(this).val() !== '') {
        $(this).addClass('filled');
    } else {
        $(this).removeClass('filled');
    }
});


function isValidField(control) {
    let controlVal = control.value || document.querySelector(control);
    let searchBtn = document.getElementById('searchBtn');
    if (controlVal.length == 0 || controlVal == '' || controlVal == Number(controlVal)) {
        control.classList.add('invalid');
        searchBtn.setAttribute('disabled', true);
    } else {
        control.classList.remove('invalid');
        searchBtn.removeAttribute('disabled');
    }
}



if (window.innerWidth >= 1000) {
    $("#outbounddate, #inbounddate").datepicker({
        numberOfMonths: 3,
        showButtonPanel: true,
        minDate: 0
    });
} else {
    $("#outbounddate, #inbounddate").datepicker({
        numberOfMonths: 1,
        showButtonPanel: true,
        minDate: 0
    });
};

$('#searchBtn').on('click', function() {
    var fromDestination = document.getElementById("fromDestination"),
        toDestination = document.getElementById('toDestination'),
        dateOfJourney = document.getElementById('outbounddate'),
        dateOfReturnJourney = document.getElementById('inbounddate'),
        isRoundTrip = document.querySelector('input[type="radio"][value="round"]').checked == true;

    isSearchable = false;

    if (fromDestination.value.length == 0 || fromDestination.value == '' || fromDestination.value == null) {
        fromDestination.classList.add('invalid');
    } else {
        fromDestination.classList.remove('invalid');
    }

    if (toDestination.value.length == 0 || toDestination.value == '' || toDestination.value == null) {
        toDestination.classList.add('invalid');
    } else {
        toDestination.classList.remove('invalid');
    }

    if (dateOfJourney.value.length == 0 || dateOfJourney.value == '' || dateOfJourney.value == null) {
        dateOfJourney.classList.add('invalid');
    } else {
        dateOfJourney.classList.remove('invalid');
    }

    if (isRoundTrip) {
        if (dateOfReturnJourney.value.length == 0 || dateOfReturnJourney.value == '' || dateOfReturnJourney.value == null) {
            dateOfReturnJourney.classList.add('invalid');
        } else {
            dateOfReturnJourney.classList.remove('invalid');
        }
    } else {
        document.querySelector('.in-bound-date').style.disply = "none";
    }

    if (document.querySelectorAll('.invalid').length == 0) {
        isSearchable = true;
    }

    if (isSearchable) {
        if (isRoundTrip) {
            roundTripDetails = {
                roundTrip: true,
                departDate: dateOfJourney.value,
                returnDate: dateOfReturnJourney.value
            }
            Flights.SearchFlights(data.routes, roundTripDetails);
        } else {
            Flights.SearchFlights(data.routes);
        }


        $('html,body').animate({
            scrollTop: $("#app").offset().top
        }, 'slow');
    }
});

$(document).on('click', '.book-now', function() {
    $('.content-panel').addClass('page-slide');
});

$(document).on('click', '.back', function() {
    $('.content-panel').removeClass('page-slide');
});

$(document).on('click', "#confirmBtn", function() {
    window.alert('Thanks your booking has been confirmed successfully!!');
    window.location.reload();
});


function resetFrm() {
    var filledItem = document.querySelectorAll('.filled');
    var invalidItem = document.querySelectorAll('.invalid');
    document.forms[0].reset;

    if (filledItem.length > 0) {
        filledItem.forEach(function(filled) {
            filled.classList.remove('filled');
        });
    }

    if (invalidItem.length > 0) {
        invalidItem.forEach(function(invalid) {
            invalid.classList.remove('invalid');
        });
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     if (document.querySelector('input[type="radio"][value="round"]') == true) {
//         console.log('satyaspb');
//         document.querySelector('.in-bound-date').style.display = 'block';
//     }
// })