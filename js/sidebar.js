$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#hi').offset().top; // pixels to the top of div1
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll >= os - 5){
            $('#sidebar').show(1000);
        } else {
            $('#sidebar').hide(300);
        }
    });
});