"use strict"

// бургер

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu ('.burger-menu');

// меню частые вопросы

$(document).ready(function() {
    $('.accordion-item__trigger').click(function () {
        $(this).next('.accordion-item__content').toggle ();
    });
});

// slider gallery

$(document).ready(function () {
    $(".slider__gallery").slick({
        dots:false,
        arrows:true,
        infinite:true,
        touchMove:false,
        slidesToShow:4,
        responsive:[
            {
                breakpoint:868,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint:569,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
    $(".compilation__slider").slick({
        arrows:true,
        infinite:true,
        touchMove:true,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:1186,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint:841,
                settings: {
                    slidesToShow:1
                }
            },{
                breakpoint:768,
                settings: {
                    slidesToShow:3
                }
            },{
                breakpoint:578,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint:409,
                settings: {
                    slidesToShow:1
                }
            }
        ],
    });
    $(".card__slider").slick({
        arrows:true,
        infinite:true,
        touchMove:true,
        slidesToShow:5,
        responsive:[
            {
                breakpoint:990,
                settings: {
                    slidesToShow:4
                }
            },{
                breakpoint:782,
                settings: {
                    slidesToShow:3
                }
            },{
                breakpoint:578,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint:409,
                settings: {
                    slidesToShow:1
                }
            }
        ],
    });
});

// валидация формы

document.addEventListener('DOMContentLoaded', function() {
    const form  = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if(error === 0) {

        } else {
            console.log('Заполните обязательные поля')
        }

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            
        }
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});




