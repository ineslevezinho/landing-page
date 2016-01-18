//scroll navigation bar
$('.anchor').click(function () {
    var sectionTarget = $(this).data("move-to");
    sectionTarget = $("." + sectionTarget);
    $('html, body').animate({ scrollTop : sectionTarget.offset().top - 70 } , 700 );
});

$(document).ready(function() {
 	$("#owl").owlCarousel({
 		autoPlay: true,
	    paginationSpeed : 1,
	    singleItem: true,
	    responsive: true,
	    transitionStyle : "fade"
  	});

    $ ('.testimonials-list li:even').addClass ('even');
    $ ('.testimonials-list li:odd').addClass ('odd');
});

