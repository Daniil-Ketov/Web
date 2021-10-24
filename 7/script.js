$(function () {
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
        slidesToScroll: 2,
        slidesToShow: 2
    });
});
