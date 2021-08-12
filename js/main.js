"use strict"

// Бургер меню

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

// меню спойлер

$(document).ready(function() {
    $('.accordion-item__trigger').click(function () {
        $(this).next('.accordion-item__content').toggle ();
    });
});

// Слайдеры

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

// Валидация формы

document.addEventListener("DOMContentLoaded", () => {
    "use strict"

    const form = document.querySelector(".footer__form");

    const regName = /^[a-z0-9_-]{3,16}$/;
    const regTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    const validateElem = (elem) => {
        if (elem.name ===  "name") {
            if (!regName.test(elem.value) && elem.value !== "" ) {
                elem.nextElementSibling.textContent = "Введите корректное имя";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }
        if (elem.name ===  "tel") {
            if (!regTel.test(elem.value) && elem.value !== "" ) {
                elem.nextElementSibling.textContent = "Введите верный телефон";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }
        if (elem.name ===  "email") {
            if (!regEmail.test(elem.value) && elem.value !== "" ) {
                elem.nextElementSibling.textContent = "Введите корректный email";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }

    };

    for (let elem of form.elements) {
        if (
            !elem.classList.contains("form-check-input") &&
            elem.tagName !== "BUTTON"
        ) {
            elem.addEventListener("blur", () => {
                validateElem(elem);
            });
        }
    }

    form.addEventListener("submit", (even) => {
        even.preventDefault();

        for (let elem of form.elements) {
            if (
                !elem.classList.contains("form-check-input") &&
                elem.tagName !== "BUTTON"
            ) {
                if (elem.value ===  "") {
                    elem.nextElementSibling.textContent = "Данное поле не заполнено";
                } else  {
                    elem.nextElementSibling.textContent = "";
                }
            }
        }
    });
});






