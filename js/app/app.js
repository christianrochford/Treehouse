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

  // Isotope Projects Gallery
  $(function() {
    var $container = $('#gallery');
    $container.isotope({
        itemSelector: '.project'
    });
    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });

    if(window.location.hash){
      var hash = window.location.hash.substring(1);
      $('a[data-option-value=".' + hash  + '"]').click();
    } 

    // Video Modal
    $('.project').click(function(){
      $('#gallery').fadeOut(300);
      $('#video-modal').fadeIn(300);

    });       
    $('#video-modal .icon-close').click(function(e){
      e.preventDefault();
      $('#video-modal').fadeOut(300);
      $('#gallery').fadeIn(300);
    });
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
