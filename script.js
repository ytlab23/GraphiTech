$(document).ready(function(){
    $('.lta-slider').slick({
        dots: true,
        customPaging :  function(slider, i) {
                            var thumb = $(slider.$slides[i]).data();
                            var counter = i + 1;
                            return '<a class="dot">'+ counter +'</a>';
                        },
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
})