function navplay() {
    if ($(window).width() >= 767) {
        $('.nav-btn .menu-btn').removeClass('active');
        $('.main-nav .nav-menu').removeAttr('style');
    } else {
        $('.nav-btn .menu-btn').click(function () {
            $(this).toggleClass('active');
            $(this).parents('.main-nav').find('.nav-menu').toggle();
        });
    }
};

function navConfig(){

    $('.nav-btn .menu-btn').click(function () {
        event.preventDefault();
        if ($(this).parent().hasClass('active')) {
            $('.nav-btn .menu-btn').removeClass('active');
        } else {
            $('.nav-btn .menu-btn').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

  $(document).click(function (e) {
      if (!$(e.target).closest('.nav-btn .menu-btn').length) {
          $('.nav-btn .menu-btn').removeClass('active');
      }
  });
  
};

function bottomFooter() {
    var wh = $(window).height();
    var hh = $("#hdr-height").outerHeight(true);
    var fh = $("#ftr-height").outerHeight(true);
    $("#dnc-content").css("min-height", wh - (hh + fh) + 'px');
};

function footerPlay() {
    if ($(window).width() >= 767) {
        $('.ftr-item .ftr-head').removeClass('active');
        $('.footer .ftr-section').removeAttr('style');
    } else {
        $('.footer .ftr-item .ftr-head').click(function () {
            $(this).parent('.ftr-item').toggleClass('active');
            $(this).parent().find('.ftr-section').toggle();
        });
    }

};
$(window).resize(function () {
     if ($(window).width() >= 767) {
        $('.nav-btn .menu-btn').removeClass('active');
        $('.main-nav .nav-menu').removeAttr('style');
        $('.ftr-item .ftr-head').removeClass('active');
        $('.footer .ftr-section').removeAttr('style');
    }
    bottomFooter();
    console.log("resize event");
});

$(document).ready(function () {
    navplay();
    navConfig();
    bottomFooter();
    footerPlay();
});

