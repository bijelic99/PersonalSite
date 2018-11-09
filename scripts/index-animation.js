$(document).ready(function () {

    fixMobile()
    
    //$('nav').show();
    navColorChange();
    navbarShowHide();

    doAnimation("#msg", "animated bounceIn")
    addScreenEnterAnimationOnElement("#msg", "animated bounceIn", "10");
    addScreenEnterAnimationOnElement(".social-container-container", "animated bounceIn", "90");
    addScreenEnterAnimationOnElement(".description-container", "animated bounceIn", "90");
    //addScreenEnterAnimationOnElement("#contactMe", "animated bounceIn");
    


   
    

});

function fixMobile(){

    var pr = window.parent.document;
    $('meta',pr).attr('name','viewport');
    $('meta',pr).attr('content','width=device-width');
    $('meta',pr).attr('initial-scale','1.0');
    console.log(pr);

}

function navbarShowHide(){
    var scrollPos=0;

    $(window).scroll(function(){
        var curPos = $(window).scrollTop();
        if(curPos > scrollPos){
            $("nav").removeClass("animated slideOutUp slideInDown fast").addClass("animated slideOutUp fast");
            
            
        }
        else{
            $("nav").removeClass("animated slideOutUp slideInDown fast").addClass("animated slideInDown fast");
        }
        scrollPos = curPos;
    });

}

function navColorChange() {
    var about = $('#about');

    about.waypoint(function () {
        switchNavColor();
    },{offset: '10%'});
}
function switchNavColor() {
    var color1 = "rgba(0, 0, 0, 0)"
    var color2 = "rgb(86, 82, 225)"
    var nav = $('.navbar-custom');

    if (nav.css("background-color") === color1) {
        nav.css("background-color", color2,);
    }
    else {
        nav.css("background-color", color1);
    }
}

function addScreenEnterAnimationOnElement(ElementIdOrClass, Animation, Offset) {
    var element = $(ElementIdOrClass);
    var animationEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

    var downWPT = new Waypoint({
        element: element,
        handler: function (direction) {
            if (direction === "down") {
                element.addClass(Animation).one(animationEnd, function () {
                    element.removeClass(Animation);
                });
        }
        },
        offset: Offset
    });

    var upWPT = new Waypoint({
        element: element,
        handler: function (direction) {
            
            if (direction === "up") {
                element.addClass(Animation).one(animationEnd, function () {
                    element.removeClass(Animation);
                });
            }
        },
        offset: '-'+Offset
    });



}

function doAnimation(ElementIdOrClass, Animation){
    var animationEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";
    var element = $(ElementIdOrClass);

    element.addClass(Animation).one(animationEnd, function () {
        element.removeClass(Animation);
    });
}