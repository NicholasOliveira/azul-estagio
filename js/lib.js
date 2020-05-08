//Lib JS
// Basic
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('.navbar-nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('.navbar-nav li a').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset - 80
    }, 500);
  });

});

// Use Your Class or ID For Selection 
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position() != undefined) {
      if (refElement.position().top - 83 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.navbar-nav li a').removeClass("active");
        currLink.addClass("active");
      }
      else {
        currLink.removeClass("active");
      }
    }
  });
}

$(document).ready(function () {

  //Verifica se a Janela está no topo
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Onde a mágia acontece! rs
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

});