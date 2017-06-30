((function ($) {
    $(".collapsable").click(function () {
        var ctrl = $(this).next(".sub-content");
        ctrl.slideToggle();
    });

    $(".sub-content input[type='checkbox']").click(function () {

        var ctrlToDisplay = $(this).attr("data-src");
        //console.log(ctrlToDisplay);

        if ($(this).is(":checked")) {
            $("#" + ctrlToDisplay).fadeIn();
        } else {
            $("#" + ctrlToDisplay).hide();
        }
    });

    $("ul.list-first a").click(function () {
        $(this).next('ul').slideToggle();
    });

    $(".open-dialog").click(function () {
        $(".dialog-box,.block-ui").fadeIn();
    });

    $(".file-uploader").click(function () {
        $(".dialog-box,.block-ui, .archives-dialog-section").hide();
        $(".file-uploader-section").fadeIn();
    });

    $(".archives-dialog-link").click(function () {
        $(".dialog-box,.block-ui, .file-uploader-section").hide();
        $(".archives-dialog-section").fadeIn();
    });

    function disabledFrm(){
        console.log("Disabled Form");
    }

    // $("#frm_post").on('submit', function (e) {
    //     e.preventDefault();

    //     var postData = {
    //         empNumber: $("#EmployeeNumber").val(),
    //         costCenter: $("#costCenter").val(),
    //         company: $("#company").val(),
    //         registrationDateSap: $("#registrationDateSap").val(),
    //         sapdate: $("#EmployeeNumber").val(),
    //         applyTo: $("#applyTo").val()
    //     };

    //     $.ajax({
    //         url: 'http://medialibrary.technoforth.com/getmaterial.php',
    //         method:'POST',
    //         data: postData,
    //         success: function (response) {
    //             console.log(response)
    //         }

    //     });
    // });

    //  $.ajax({
    //         url: './mockData.json',
    //         method:'GET',
    //         success: function (response) {
    //             console.log(response)
    //         }

    //     });

}))(jQuery);