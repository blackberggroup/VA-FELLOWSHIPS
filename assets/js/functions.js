var amountScrolled = 200;

$(window).scroll(function () {
	'use strict';
	if ($(window).scrollTop() > amountScrolled) {
		$('.back-to-top::before').fadeIn('slow');
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top::before').fadeOut('slow');
		$('a.back-to-top').fadeOut('slow');
	}
});


$('.usa-footer-return-to-top a,.back-to-top, .topper').click(function () {
	'use strict';
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});


$(".smooth-scroll").on('click', function (event) {
	'use strict';
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 400, function () {

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	} // End if
});


$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});


if ($('.owl-carousel.current--fellows').length > 0) {
    $('.owl-carousel.current--fellows').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
}


if ($('.owl-carousel.alumni-senior--fellows').length > 0) {
    $('.owl-carousel.alumni-senior--fellows').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
}


if ($('.owl-carousel.alumni-erf--fellows').length > 0) {
    $('.owl-carousel.alumni-erf--fellows').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
}


if ($('.owl-carousel.home').length > 0) {
    $('.owl-carousel.home').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
}


if ($('.owl-stage').length > 0) {
    $(".owl-stage").addClass("display-flex flex-align-stretch");
}

// Accessibility functions for owl-carousel plugin
if ($('.button.owl-prev').length > 0) {
    $('.button.owl-prev').attr("aria-label", "previous");
}


if ($('.button.owl-next').length > 0) {
    $('.button.owl-next').attr("aria-label", "next");
}


if ($('.owl-dots').length > 0) {
    $('.owl-dots').hide();
}


if (window.location.href.indexOf("fellowship-application") > -1) {
	$(document).ready(function() {
		$(".accordion").on("click", function() {
		  $(this).toggleClass("active");
		  $(this).next().slideToggle(0);
		});
	});
}


if ($('.vha-video__play-action').length > 0) {
    $('.vha-video__play-action').magnificPopup({
        type: 'iframe', 
        
        iframe: {
           markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '<div class="mfp-title">Some caption</div>'+
                    '</div>'
        }
    });
}


