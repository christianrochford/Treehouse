$(document).ready(function() {

  // Set page height
  $('#home, #about, #team, #work, #contact').height($(window).height());

  // Mobile nav
  $('#mobile-open').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#mobile-close').show();
    $('nav').addClass('open');
  });
  $('#mobile-close').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#mobile-open').show();
    $('nav').removeClass('open');

  });
  $('nav a').click(function() {
    $('#mobile-close').hide();
    $('#mobile-open').show();
    $('nav').removeClass('open');
  });
  if ($(window).width() > 740) {
    $('#mobile-open, #mobile-close').hide();
    $('nav').fadeIn();
  } else {
    $('#mobile-open').show();
  }

  // Set intro position
  var introTop = (($('#home').height() - $('#intro').height()) / 2) - 20;
  $('#intro').css({
    top: introTop + 'px'
  });

  // Text Box Hover
  $('.block').hover(
    function() {
      $(this).next('.text-box').addClass('on');
    },
    function() {
      $('.text-box').removeClass('on');
    }
  );

  // Initialise Carousel
  $('.carousel').slick({
    arrows: true,
    dots: false,
    infinite: false,
    centerMode: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

});

$(window).resize(function() {

  $('#home, #about, #team, #work, #contact').height($(window).height());

  if ($(window).width() > 740) {
    $('#mobile-open, #mobile-close').hide();
    $('nav').fadeIn();
  } else {
    $('#mobile-open').show();
  }

  var introTop = (($('#home').height() - $('#intro').height()) / 2) - 20;
  $('#intro').css({
    top: introTop + 'px'
  });

});
