$(function() {
    $(".fancybox").fancybox();

    $(window).on("load resize", function() {
        // var windowWidth = window.innerWidth;

        // if (windowWidth < 768) {
        //     var firstSection = $('.first-section');
        //     var preRegElemMargin = $('.pre-register-image-container');


        //     var newval = parseInt(windowWidth - 200);
        //     console.log(newval)
        //         // $('.container').css('margin-top',newval);

        //     //         console.log(firstSection);
        //     //         console.log(preRegElemMargin);
        //     //         console.log(window.innerWidth);

        //     // currently 500
        //     preRegElemMargin.css('margin-top', -newval);
        //     // currently 650
        //     firstSection.height(newval);
        // }
    });


});
