$(function() {
    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            console.log(target)
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    $(window).on("load resize scroll", function() {
        // get all elements to animate
        var elem = $('.emerge');
        $.each(elem, function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass('animated fadeInUp');
            }
        });
    });


});
