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

$(document).ready(function () {
    navplay();
});

function bottomFooter() {
    var wh = $(window).height();
    var hh = $("#hdr-height").height();
    var fh = $("#ftr-height").height();
    console.log(hh);
    console.log(fh);
    $("#dnc-content").css("min-height", wh - 105 -(hh + fh) + 'px');
};

$(document).ready(function () {
    bottomFooter();
});

$(window).resize(function () {
    navplay();
    bottomFooter();
    console.log("resize event");
});