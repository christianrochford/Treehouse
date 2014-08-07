
$(document).ready(function(){

	// Set page height
	$('#home, #about, #team, #work, #contact').height($(window).height());

	// Mobile nav
	$('#mobile-open').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('#mobile-close').show();
		$('nav').addClass('open');
	});
	$('#mobile-close').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('#mobile-open').show();
		$('nav').removeClass('open');

	});
	$('nav a').click(function(){
		$('#mobile-close').hide();
		$('#mobile-open').show();
		$('nav').removeClass('open');
	});
	if($(window).width()>740){
		$('#mobile-open, #mobile-close').hide();
		$('nav').fadeIn();
	} else {
		$('#mobile-open').show();
	}

	// Set intro position
	var introTop = (($('#home').height() - $('#intro').height())/2) - 20;
	$('#intro').css({top: introTop + 'px'});

	// Text Box Hover
	$('.block').hover(
		function(){
			$(this).next('.text-box').addClass('on');
		},
		function(){
			$('.text-box').removeClass('on');
		}
	);

	// Initialise Flexslider
	$('.flexslider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 200,
	    itemMargin: 20,
	    minItems: 1,
	    maxItems: 4
	  });

});

$(window).resize(function(){

	$('#home, #about, #team, #work, #contact').height($(window).height());

	if($(window).width()>740){
		$('#mobile-open, #mobile-close').hide();
		$('nav').fadeIn();
	} else {
		$('#mobile-open').show();
	}
	
	var introTop = (($('#home').height() - $('#intro').height())/2) - 20;
	$('#intro').css({top: introTop + 'px'});

});
