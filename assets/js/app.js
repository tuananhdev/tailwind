$(document).ready(function () {
    AOS.init({
        disable: 'phone'
    });
    // Auto show/hide header on scroll
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        var siteHeader = $('#siteHeader');
        setTimeout(function () {
            if (st > lastScrollTop) {
                siteHeader.addClass('-top-20');
            } else {
                siteHeader.removeClass('-top-20');
            }
            lastScrollTop = st;
        }, 100);
    });
})