;(function(){

    var menuBtn = $(".menu-btn");
    var body = $("body");
    var mobileSidebarClass = '_mobileSidebar';

    menuBtn.on('click', function(e){
        // console.log('click');
        body.toggleClass(mobileSidebarClass);
    });

})();