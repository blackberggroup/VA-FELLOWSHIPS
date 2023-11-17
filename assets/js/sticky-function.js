if (window.innerWidth > 1199) {

    $(window).scroll(function() {

        var stickySectionWrapper = $('main').height();
        var stickySection = $('#fellowship-impact').height();
        var newsSection = $('.news-and-events').height();

        var aboveStickySection = stickySectionWrapper - stickySection - newsSection;
        var belowStickySection = stickySectionWrapper - newsSection - 150;

        if ($(this).scrollTop() > aboveStickySection && $(this).scrollTop() < belowStickySection) {
            $('.sticky-div').addClass("desktop-lg:sticky");
        } else {
            $('.sticky-div').removeClass("desktop-lg:sticky");
        }

    });

} else {
    $('.sticky-div').removeClass("desktop-lg:sticky");
}