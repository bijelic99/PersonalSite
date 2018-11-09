$(document).ready(function () {





    $('#wrapper').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
            scrollbars: false
        },
        afterRender: function () {
            
        },
        afterLoad: function (origin, destination, direction) {
            pageAnimations(origin, destination, direction);
        }
    });

    navbarShowHide();









});

function fixMobile() {

    var pr = window.parent.document;
    $('meta', pr).attr('name', 'viewport');
    $('meta', pr).attr('content', 'width=device-width');
    $('meta', pr).attr('initial-scale', '1.0');
    console.log(pr);

}

function navbarShowHide() {
    var scrollPos = 0;

    $(window).scroll(function () {
        var curPos = $(window).scrollTop();
        if (curPos > scrollPos) {
            $("nav").removeClass("animated slideOutUp slideInDown fast").addClass("animated slideOutUp fast");


        }
        else {
            $("nav").removeClass("animated slideOutUp slideInDown fast").addClass("animated slideInDown fast");
        }
        scrollPos = curPos;
    });

}

function navColorChange() {
    var about = $('#about');

    about.waypoint(function () {
        switchNavColor();
    }, { offset: '10%' });
}

function pageAnimations(origin, destination, direction) {

    if(origin === null || origin.index=== 0){
        
        
        doAnimation("#msg", "animated bounceIn");
    }
    console.log(origin.index)
}

function doAnimation(ElementIdOrClass, Animation) {
    var animationEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";
    var element = $(ElementIdOrClass);

    element.addClass(Animation).one(animationEnd, function () {
        element.removeClass(Animation);
    });
}