var pointerCurPos = 1
var pointerDesPos = 1;
var disableScrollSense = false;

$(document).ready(function () {

    // Easter Egg?
    console.log("Hello There! Welcome to Tim's console!");

    // Helper Function (Translates Rem Unit into Pixels):
    function convertRemToPixels(rem) { return rem * parseFloat(getComputedStyle(document.documentElement).fontSize) };

    // Scroll Reveal Section:
    ScrollReveal().reveal('.exper-entity', { distance: '3rem', origin: 'right', delay: 100, duration: 1000, interval: 50 });
    ScrollReveal().reveal('.proj-entity', { distance: '3rem', origin: 'right', delay: 100, duration: 1000, interval: 50 });
    ScrollReveal().reveal('#top-subtitle', { distance: '2rem', origin: 'left', delay: 100, duration: 1000, interval: 50 });
    ScrollReveal().reveal('.skill-entity', { distance: '3rem', origin: 'right', delay: 100, duration: 1000, interval: 50 });
    ScrollReveal().reveal('#bottom-subtitle', { distance: '2rem', origin: 'right', delay: 50, duration: 1250, interval: 50 });

    // Scroll Magic Reveal Experiences:
    var SMControl = new ScrollMagic.Controller()
    
    // Scroll Magic Reveal Projects:
    var projsSM = new ScrollMagic.Scene({
        triggerElement: '#block-conts',
        duration: $( '#block-conts' ).height(),
    }) 
    .setClassToggle('#block-conts', 'contact-block-inview')
    //.addIndicators() // remove this before publishing
    .addTo(SMControl);

    // Side Menu Dot Animations:
    const introButton = document.getElementById('select-intro').getBoundingClientRect();
    var introTopPos = $('#block-intro').offset().top - convertRemToPixels(1)
    const experButton = document.getElementById('select-exper').getBoundingClientRect();
    var experTopPos = $('#block-exper').offset().top - convertRemToPixels(1)
    const projsButton = document.getElementById('select-projs').getBoundingClientRect();
    var projsTopPos = $('#block-projs').offset().top - convertRemToPixels(1)
    const skillButton = document.getElementById('select-skill').getBoundingClientRect();
    var skillTopPos = $('#block-skill').offset().top - convertRemToPixels(1)
    const contsButton = document.getElementById('select-conts').getBoundingClientRect();
    var contsTopPos = $('#block-conts').offset().top - convertRemToPixels(1)
    const pointerTopVar = convertRemToPixels(1.2);
    const pointerRigVar = convertRemToPixels(2);
    $("#menu-pointer").css({ 'display': 'block', 'left': `${introButton.right - pointerRigVar}px`, 'top': `${introButton.top + pointerTopVar}px` })
    function aniPointer(pos, clicked) {
        disableScrollSense = clicked;
        if (pointerDesPos == pos) {
            return;
        };
        console.log(disableScrollSense)
        if (pos == 1) {
            console.log('Animating to 1');
            pointerDesPos = 1;
            anime({
                targets: '#menu-pointer',
                top: introButton.top + pointerTopVar,
                left: introButton.right - pointerRigVar,
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function (anim) {
                    console.log('Animation to 1 Done')
                    disableScrollSense = false;
                    pointerCurPos = pointerDesPos;
                }
            });
        } else if (pos == 2) {
            console.log('Animating to 2');
            pointerDesPos = 2;
            anime({
                targets: '#menu-pointer',
                top: experButton.top + pointerTopVar,
                left: experButton.right - pointerRigVar,
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function (anim) {
                    console.log('Animation to 2 Done')
                    disableScrollSense = false;
                    pointerCurPos = pointerDesPos;
                }
            });
        } else if (pos == 3) {
            console.log('Animating to 3');
            pointerDesPos = 3;
            anime({
                targets: '#menu-pointer',
                top: projsButton.top + pointerTopVar,
                left: projsButton.right - pointerRigVar,
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function (anim) {
                    console.log('Animation to 3 Done')
                    disableScrollSense = false;
                    pointerCurPos = pointerDesPos;
                }
            });
        } else if (pos == 4) {
            console.log('Animating to 4');
            pointerDesPos = 4;
            anime({
                targets: '#menu-pointer',
                top: skillButton.top + pointerTopVar,
                left: skillButton.right - pointerRigVar,
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function (anim) {
                    console.log('Animation to 4 Done')
                    disableScrollSense = false;
                    pointerCurPos = pointerDesPos;
                }
            });
        } else if (pos == 5) {
            console.log('Animating to 5');
            pointerDesPos = 5;
            anime({
                targets: '#menu-pointer',
                top: contsButton.top + pointerTopVar,
                left: contsButton.right - pointerRigVar,
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function (anim) {
                    console.log('Animation to 5 Done')
                    disableScrollSense = false;
                    pointerCurPos = pointerDesPos;
                }
            });
        } else {
            console.log('Invalid Animation Number');
        };
    };

    $('#select-intro').click(function () { aniPointer(1, true) });
    $('#select-exper').click(function () { aniPointer(2, true) });
    $('#select-projs').click(function () { aniPointer(3, true) });
    $('#select-skill').click(function () { aniPointer(4, true) });
    $('#select-conts').click(function () { aniPointer(5, true) });

    scrollPos = $(window).scrollTop() + $(window).innerHeight() / 2;
    if (disableScrollSense == false) {
        if (scrollPos <= introTopPos + $(window).innerHeight() / 2 & (Math.min(pointerCurPos, pointerDesPos) > 1 | 1 > Math.max(pointerCurPos, pointerDesPos))) {
            $("#menu-pointer").css({ 'display': 'block', 'left': `${introButton.right - pointerRigVar}px`, 'top': `${introButton.top + pointerTopVar}px` })
        }
        if (scrollPos >= experTopPos & scrollPos < projsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 2 | 2 > Math.max(pointerCurPos, pointerDesPos))) {
            $("#menu-pointer").css({ 'display': 'block', 'left': `${experButton.right - pointerRigVar}px`, 'top': `${experButton.top + pointerTopVar}px` })
        }
        if (scrollPos >= projsTopPos & scrollPos < skillTopPos & (Math.min(pointerCurPos, pointerDesPos) > 3 | 3 > Math.max(pointerCurPos, pointerDesPos))) {
            $("#menu-pointer").css({ 'display': 'block', 'left': `${projsButton.right - pointerRigVar}px`, 'top': `${projsButton.top + pointerTopVar}px` })
        }
        if (scrollPos >= skillTopPos & scrollPos < contsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 4 | 4 > Math.max(pointerCurPos, pointerDesPos))) {
            $("#menu-pointer").css({ 'display': 'block', 'left': `${skillButton.right - pointerRigVar}px`, 'top': `${skillButton.top + pointerTopVar}px` })
        }
        if (scrollPos >= contsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 5 | 5 > Math.max(pointerCurPos, pointerDesPos))) {
            $("#menu-pointer").css({ 'display': 'block', 'left': `${contsButton.right - pointerRigVar}px`, 'top': `${contsButton.top + pointerTopVar}px` })
        }
    };

    $(window).scroll(function () {
        scrollPos = $(window).scrollTop() + $(window).innerHeight() / 2;
        if (disableScrollSense == false) {
            if (scrollPos <= introTopPos + $(window).innerHeight() / 2 & (Math.min(pointerCurPos, pointerDesPos) > 1 | 1 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(1, false);
            }
            if (scrollPos >= experTopPos & scrollPos < projsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 2 | 2 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(2, false);
            }
            if (scrollPos >= projsTopPos & scrollPos < skillTopPos & (Math.min(pointerCurPos, pointerDesPos) > 3 | 3 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(3, false);
            }
            if (scrollPos >= skillTopPos & scrollPos < contsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 4 | 4 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(4, false);
            }
            if (scrollPos >= contsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 5 | 5 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(5, false);
            }
        };
    });
});

