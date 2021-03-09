$(function () {
    $('.custom-select').styler();

    $('.slider').slick({
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.brands').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });


    var menuBtn = document.querySelector('.header__menu-btn');
    menuBtn.addEventListener('click', function () {
        this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
    });

    $('.menu__link').on('click', function () {
        $('.header__menu-btn').removeClass('is-active');
    });

    $('.header__menu-btn, .menu__link').on('click', function () {
        $('.content-menu').toggleClass('content-menu--active');
    });

    $('.footer__category').on('click', function () {
        $('.footer__category').toggleClass('footer__category--active');
    });
    $('.footer__info').on('click', function () {
        $('.footer__info').toggleClass('footer__info--active');
    });
});