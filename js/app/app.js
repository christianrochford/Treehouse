
$(document).ready(function(){
	$('#home').height($(window).height());
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
	if($(window).width()>740){
		$('#mobile-open, #mobile-close').hide();
		$('nav').fadeIn();
	} else {
		$('#mobile-open').show();
	}
});

$(window).resize(function(){
	if($(window).width()>740){
		$('#mobile-open, #mobile-close').hide();
		$('nav').fadeIn();
	} else {
		$('#mobile-open').show();
	}
	$('#home').height($(window).height());
});