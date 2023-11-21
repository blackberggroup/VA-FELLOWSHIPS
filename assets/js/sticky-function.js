if (window.innerWidth > 1199) {

    $(window).scroll(function() {

        var stickySectionWrapper = $('main').height();
        var stickySection = $('#fellowship-impact').height();
        var programSection = $('.program-video').height();
        var newsSection = $('.fellowship-news').height();

        var aboveStickySection = stickySectionWrapper - stickySection - programSection - newsSection + 300;
        var belowStickySection = stickySectionWrapper - programSection - newsSection + 100;

        if ($(this).scrollTop() > aboveStickySection && $(this).scrollTop() < belowStickySection) {
            $('.sticky-div').addClass("desktop-lg:sticky");
        } else {
            $('.sticky-div').removeClass("desktop-lg:sticky");
        }

    });

} else {
    $('.sticky-div').removeClass("desktop-lg:sticky");
}