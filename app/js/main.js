$(function () {
    $('.custom-select').styler();

    $('.slider').slick({
        dots: true,

    });

    $('.brands').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});