$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        slidesToShow:3,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            variableWidth: false
            }
    }]
    });
});
$('.left').on("click", function () {
    $('.slider').slick('slickPrev');
})
$('.right').on("click", function () {
    $('.slider').slick('slickNext');
});

