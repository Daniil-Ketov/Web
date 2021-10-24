$(document).ready(function(){
    $(".gallery").slick({
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4
                }
            }
        ],
        slidesToShow: 2,
        slidesToScroll: 2
    });
});
