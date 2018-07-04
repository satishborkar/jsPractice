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
})


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

    if (document.querySelectorAll('.invalid').length == 0) {
        isSearchable = true;
    }

    if (isSearchable) {

        Flights.SearchFlights(data.routes);

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