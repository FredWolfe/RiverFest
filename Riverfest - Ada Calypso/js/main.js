/* STICKY NAVIGATION */


let navigationbar = $(".navbar");

$(window).scroll(function () {

    let topOfSect = $(".experience").offset().top - window.innerHeight;

    if ($(window).scrollTop() > topOfSect) {

        navigationbar.addClass("sticky")
    }

    else {
        navigationbar.removeClass("sticky")
    }

    /* switch ($(window).scrollTop() > topOfSect) {

        case navigationbar.addClass("sticky"):

            break;

        case navigationbar.removeClass("sticky"):

        default: "";
    } */
});





/* FROM CODEPEN */
/* $(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('.navbar').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});
 */



/* $(window).scroll(function(e){

    if($(document).scrollTop() < 1){
        $('.head').removeClass('fixed');
        $('.head').removeClass('fixed'); 
    }
    else if($(document).scrollTop() < 100){
        $('.head').removeClass('fixed');
        $('.head').addClass('fixed');   
        
    }else{
        $('.head').addClass('fixed');
    }
}); */