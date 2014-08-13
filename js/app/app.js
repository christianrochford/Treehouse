$(document).ready(function() {

  // Set page height
  $('#home, #about, #team, #contact').height($(window).height());

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
    console.log('hey!');
    $('#mobile-close').hide();
    $('#mobile-open').show();
    $('nav').removeClass('open');
  });
  if ($(window).width() > 740) {
    $('#mobile-open, #mobile-close').hide();
    $('nav').fadeIn();
    $('nav a').click(function() {
      $('#mobile-open').hide();
    });
  } else {
    $('#mobile-open').show();
    $('nav a').click(function() {
      $('#mobile-open').show();
    });
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
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

  // Fitvids
  $(".work-video").fitVids();

  // Work Videos
  $('.work-video.commercials, .work-video.entertainment, .work-video.production, .work-video.interactive').hide();
  $('.projects-link.commercials, .projects-link.entertainment, .projects-link.production, .projects-link.interactive').hide();
  $('.gallery-link').click(function(e) {
    e.preventDefault();
    console.log('HEY!');
    var href = $(this).attr("href");
    var hash = href.substr(1);
    $('.work-video').hide();
    $('.work-video.' + hash).show();
    $('.projects-link').hide();
    $('.projects-link.' + hash).show();
  });

  // Projects Gallery
  var $container = $('#gallery'),
    filters = {},
    colW = 226;
  $container.isotope({
    itemSelector: '.project',
    filter: ''
  });

  if(window.location.hash){
    var hash = window.location.hash.substring(1);
    $('.filter a').each(function(){
      var filterVal = $(this).attr('data-filter-value');
      if(filterVal == '.' + hash){
        $(this).click();
      }
    });
  }
  

  // filter links
  $('.filter a').click(function() {
    var $this = $(this);

    var $optionSet = $this.parents('.option-set');
    // change selected class
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // store filter value in object
    // i.e. filters.color = 'red'
    var group = $optionSet.attr('data-filter-group');
    filters[group] = $this.attr('data-filter-value');

    // convert object into array
    var isoFilters = [];
    for (var prop in filters) {
      isoFilters.push(filters[prop])
    }
    var selector = isoFilters.join('');
    $container.isotope({
      filter: selector
    });
    return false;
  });

});

$(window).load(function() {
  // Center about content
  var windowHeight = ($(window).height() - 200);
  var aboutHeight = $('#about').height();
  var aboutMargin = ((windowHeight - aboutHeight) / 2);
  if (aboutMargin > 0) {
    $('#about').css({
      paddingTop: aboutMargin
    });
  } else {
    $('#about').css({
      paddingTop: 110
    });
  }
  // Center team content
  var windowHeight = ($(window).height() - 200);
  var teamHeight = $('#team').height();
  var teamMargin = ((windowHeight - teamHeight) / 2);
  if (teamMargin > 0) {
    $('#team').css({
      paddingTop: teamMargin
    });
  } else {
    $('#team').css({
      paddingTop: 110
    });
  }
  // Center work content
  var workHeight = $('#work').height();
  var workMargin = ((windowHeight - workHeight) / 2);
  if (workMargin > 0) {
    $('#work').css({
      paddingTop: workMargin
    });
  } else {
    $('#work').css({
      paddingTop: 110
    });
  }
  // Center contact content
  var contactHeight = $('#contact').height();
  var contactMargin = ((windowHeight - contactHeight) / 2);
  if (contactMargin > 0) {
    $('#contact').css({
      marginTop: contactMargin
    });
  } else {
    $('#contact').css({
      paddingTop: 110
    });
  }
});

$(window).resize(function() {

  $('#home, #about, #team, #contact').height($(window).height());

  // Center about content
  var windowHeight = ($(window).height() - 200);
  var aboutHeight = $('#about').height();
  var aboutMargin = ((windowHeight - aboutHeight) / 2);
  if (aboutMargin > 0) {
    $('#about').css({
      paddingTop: aboutMargin
    });
  } else {
    $('#about').css({
      paddingTop: 110
    });
  }
  // Center team content
  var windowHeight = ($(window).height() - 200);
  var teamHeight = $('#team').height();
  var teamMargin = ((windowHeight - teamHeight) / 2);
  if (teamMargin > 0) {
    $('#team').css({
      paddingTop: teamMargin
    });
  } else {
    $('#team').css({
      paddingTop: 110
    });
  }
  // Center work content
  var workHeight = $('#work').height();
  var workMargin = ((windowHeight - workHeight) / 2);
  if (workMargin > 0) {
    $('#work').css({
      paddingTop: workMargin
    });
  } else {
    $('#work').css({
      paddingTop: 110
    });
  }
  // Center contact content
  var contactHeight = $('#contact').height();
  var contactMargin = ((windowHeight - contactHeight) / 2);
  if (contactMargin > 0) {
    $('#contact').css({
      paddingTop: contactMargin
    });
  } else {
    $('#contact').css({
      paddingTop: 110
    });
  }

  if ($(window).width() > 740) {
    $('#mobile-open, #mobile-close').hide();
    $('nav').fadeIn();
    $('nav').removeClass('open');
    $('nav a').click(function() {
      $('#mobile-open').hide();
    });
  } else {
    $('#mobile-open').show();
    $('nav a').click(function() {
      $('#mobile-open').show();
    });
  }

  var introTop = (($('#home').height() - $('#intro').height()) / 2) - 20;
  $('#intro').css({
    top: introTop + 'px'
  });

});
