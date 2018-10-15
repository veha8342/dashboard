;(function(){

    var menuBtn = $(".menu-btn");
    var body = $("body");
    var mobileSidebarClass = '_mobileSidebar';
    var mobileBreakPoint = 1280;
    var openInMobileClass = '_openInMobile';

    menuBtn.on('click', function(e){
        // console.log('click');
        var width = $(window).width();
        body.toggleClass(mobileSidebarClass);
        if(width < mobileBreakPoint){
            body.toggleClass(openInMobileClass);
        }

    });

    $(window).on('resize load', function (e) {
        var width = $(this).width();
        console.log(width);

        if(width < mobileBreakPoint && !body.hasClass(openInMobileClass)){
            body.addClass(mobileSidebarClass);

        } else if(width > mobileBreakPoint ){
            body.removeClass(mobileSidebarClass);
            body.removeClass(openInMobileClass);
        }
    });

})();