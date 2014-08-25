$(document).ready(function() {

  // Set page height
  $('#home').height($(window).height());
  $('#gradient').height($(window).height() + 100);
  $('#gallery').css({
    minHeight: ($(window).height() - 230)
  });
  $('#studio').css({
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

  // Smooth Scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

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
  $(".work-video, .project-video").fitVids();

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

    if (window.location.hash) {
      var hash = window.location.hash.substring(1);
      $('a[data-option-value=".' + hash + '"]').click();
    }

    // Video Modal
    $('.project').click(function() {
      $('#modal-bg, #video-modal').fadeIn(300);
      window.scrollTo(0, 0);
    });
    $('#video-modal .icon-close, #filters a').click(function(e) {
      e.preventDefault();
      $('#modal-bg, #video-modal').fadeOut(300);
    });
  });

  //  Blog Hover Events
  $('.title, .img-wrap, .read-more').hover(
    function(){
      $(this).parent().addClass('hover');
    },
    function(){
      $(this).parent().removeClass('hover');
    }
  );

  // Studio content selection
  $('.studio-detail').hide();
  $('#facilities').show();
  $('.studio-link').click(function(e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var hash = href.substr(1);
    $('.studio-detail').hide();
    $('#' + hash).show();
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
 
});

$(window).resize(function() {

  $('#home').height($(window).height());
  $('#gradient').height($(window).height() + 100);

  if ($(window).width() > 768) {
    $('#mobile-open, #mobile-close').hide();
    $('nav').fadeIn();
    $('nav, .social').removeClass('open');
    $('nav a').click(function() {
      $('#mobile-open').hide();
    });
  } else {
    $('#mobile-open').show();
    $('#mobile-close').hide();
    $('nav, .social').removeClass('open');
    $('nav a').click(function() {
      $('#mobile-open').show();
    });
  }

  var introTop = (($('#home').height() - $('#intro').height()) / 2) - 20;
  $('#intro').css({
    top: introTop + 'px'
  });

});