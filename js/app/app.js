$(document).ready(function() {

  var min_width = 300; // minimum video width allowed
  var video_initial_width; // original video dimensions
  var video_initial_height;

  $(function() { // runs after DOM has loaded

    video_initial_width = parseInt($('video').attr('width'));
    video_initial_height = parseInt($('video').attr('height'));

    $(window).resize(function() {
      resizeToCover();
    });
    $(window).trigger('resize');
  });

  function resizeToCover() {

    // set the video holder to the window size
    $('#video-holder').width($(window).width());
    $('#video-holder').height($(window).height());

    // use largest scale factor of horizontal/vertical
    var scale_h = $(window).width() / video_initial_width;
    var scale_v = $(window).height() / video_initial_height;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * video_initial_width < min_width) {
      scale = min_width / video_initial_width;
    }

    // now scale the video
    $('video').width(scale * video_initial_width);
    $('video').height(scale * video_initial_height);
    // and center it by scrolling the video holder
    $('#video-holder').scrollLeft(($('video').width() - $(window).width()) / 2);
    $('#video-holder').scrollTop(($('video').height() - $(window).height()) / 2);

  }
});

$(document).ready(function() {

  // Set page height
  $('#preload').height($(window).height() + 100);
  $('#gradient').height($(window).height() + 100);
  $('#gallery').css({
    minHeight: ($(window).height() - 230)
  });
  $('#studio, #inner').css({
    minHeight: ($(window).height() - 100)
  });

  // Mobile nav
  $('#mobile-open').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#mobile-close').show();
    $('nav, .social').addClass('open');
  });
  $('#mobile-close').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#mobile-open').show();
    $('nav, .social').removeClass('open');
  });
  $('nav a').click(function() {
    console.log('hey!');
    $('#mobile-close').hide();
    $('#mobile-open').show();
    $('nav, .social').removeClass('open');
  });
  if ($(window).width() > 768) {
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

  // Search
  $('.icon-search').click(function(e){
    e.preventDefault();
    $('#search').addClass('open');
    $('header').addClass('search');
  });

  $('#close-search').click(function(e){
    e.preventDefault();
    $('#search').removeClass('open');
    $('header').removeClass('search');
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
  $(".work-video, .project-video, .video-wrap").fitVids();

  // Work Videos
  $('.work-video.commercials, .work-video.entertainment, .work-video.production, .work-video.interactive').hide();
  $('.projects-link.commercials, .projects-link.entertainment, .projects-link.production, .projects-link.interactive').hide();
  $('.gallery-link').click(function(e) {
    e.preventDefault();
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
        changeLayoutMode($this, options);
      } else {
        // otherwise, apply new options
        $container.isotope(options);
      }
      return false;
    });

  });

  // Video Modal
  $('.project').click(function() {
    var projectName = $(this).attr('id');
    console.log(projectName);
    $('#modal-bg').fadeIn(300);
    $('#video-' + projectName).fadeIn(300);
    window.scrollTo(0, 0);
  });
  $('.video-modal .icon-close, #filters a').click(function(e) {
    e.preventDefault();
    $('#modal-bg, .video-modal').fadeOut(300);
  });

  // Entertainment Modal
  $('.modal-open').click(function() {
    var entertainmentName = $(this).attr('id');
    $('#modal-bg').fadeIn(300);
    $('#entertainment-modal-' + entertainmentName).fadeIn(300);
    window.scrollTo(0, 0);
  });
  $('.entertainment-modal .icon-close').click(function(e) {
    e.preventDefault();
    $('#modal-bg, .entertainment-modal').fadeOut(300);
  });

  //  Blog Hover Events
  $('.title, .img-wrap, .read-more').hover(
    function() {
      $(this).parent().addClass('hover');
    },
    function() {
      $(this).parent().removeClass('hover');
    }
  );

  // Studio content selection
  $('.studio-detail').hide();
  $('.studio-detail.1').show();
  $('.studio-link').click(function(e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var hash = href.substr(1);
    $('.studio-detail').hide();
    $('#' + hash).show();
  });

  // Response
  Response.create({
    prop: "width",
    prefix: "min-width- r src",
    breakpoints: [1281,1025,961,641,481,320,0],
    lazy: true
});

});

$(window).load(function(){

  // Set intro position
  var introTop = (($('#video').height() - $('#intro').height()) / 2) - 20;
  $('#intro').css({
    top: introTop + 'px'
  });

  // Remove loader
  $('#preload').fadeOut(300);

  // Smooth Scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 90
        }, 500);
        return false;
      }
    }
  });

});

$(window).resize(function() {

  $('#gradient').height($(window).height() + 100);

  if ($(window).width() > 768) {
    $('.mobile-search, #mobile-open, #mobile-close').hide();
    $('nav').fadeIn();
    $('nav, .social').removeClass('open');
    $('nav a').click(function() {
      $('#mobile-open').hide();
    });
  } else {
    $('.mobile-search').show();
    $('#mobile-open').show();
    $('#mobile-close').hide();
    $('nav, .social').removeClass('open');
    $('nav a').click(function() {
      $('#mobile-open').show();
    });
  }

  var introTop = (($('#video').height() - $('#intro').height()) / 2) - 20;
  $('#intro').css({
    top: introTop + 'px'
  });

});
