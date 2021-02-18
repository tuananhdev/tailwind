$(document).ready(function () {
    // Auto show/hide header on scroll
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        var siteHeader = $('#siteHeader');
        setTimeout(function () {
            if (st > lastScrollTop) {
                siteHeader.addClass('-top-16');
            } else {
                siteHeader.removeClass('-top-16');
            }
            lastScrollTop = st;
        }, 100);
    });
})