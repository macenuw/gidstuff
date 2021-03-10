$(function () {
    $('.custom-select, .product-show__amount-control').styler();

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

    $('.recent__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '15px',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    swipe: true,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 510,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    swipe: true,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    swipeToSlide: true,
                    swipe: true,
                }
            },
        ]
    });

    $('.product__top-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.product__color-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
            }
        }]
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
    $('.header__btn--cart, .cart__img').on('click', function () {
        $('.cart').toggleClass('cart--active');
    });

    $('.product__description .product__title-inner').on('click', function () {
        $('.product__description').toggleClass('product__description--active');
    });
    $('.product__feature .product__title-inner').on('click', function () {
        $('.product__feature').toggleClass('product__feature--active');
    });
});