if (window.innerWidth > 1199) {

    $(window).scroll(function() {

        var stickySectionWrapper = $('main').height();
        var stickySection = $('#fellowship-impact').height();
        var iexSection = $('.iex-video').height();
        var newsSection = $('.news-and-events').height();

        var aboveStickySection = stickySectionWrapper - stickySection - iexSection - newsSection + 400;
        var belowStickySection = stickySectionWrapper - iexSection - newsSection + 225;

        if ($(this).scrollTop() > aboveStickySection && $(this).scrollTop() < belowStickySection) {
            $('.sticky-div').addClass("desktop-lg:sticky");
        } else {
            $('.sticky-div').removeClass("desktop-lg:sticky");
        }

    });

} else {
    $('.sticky-div').removeClass("desktop-lg:sticky");
}