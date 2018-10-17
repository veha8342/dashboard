;(function(){
// sidebar mobile
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
    })

    //loaderHide

    var loader = $('#loading');

    $(window).on('load', function(){
        loader.addClass('hide');
    })
    //dropdown menu

    var dropdownWrap = $('.dropdown-wrap');

    dropdownWrap.on('click', function(e){
        e.preventDefault();

        var dropdown = $(this).find('.dropdown-menu');
        console.log(dropdown);
        dropdown.slideToggle();
    })

})();















