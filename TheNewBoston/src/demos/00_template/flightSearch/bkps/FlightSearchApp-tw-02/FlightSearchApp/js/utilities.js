$(document).ready(function() {
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

    $("#outboundDate").datepicker({
        numberOfMonths: 3,
        showButtonPanel: true,
        minDate: 0
    });
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