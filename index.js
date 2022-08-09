var pointerCurPos = 1
var pointerDesPos = 1;
var disableScrollSense = false;

$( document ).ready( function() {
    function convertRemToPixels(rem) { return rem * parseFloat(getComputedStyle(document.documentElement).fontSize) };
    console.log("Hello There! Welcome to Tim's console!");
    // anime({
    //     targets: '#menu-pointer',
    //     top: defaultPos.top,
    //     left: defaultPos.right - 40,
    //     loop: false,
    //     duration: 100,
    //     easing: 'easeInQuad',
    // });
    const introButton = document.getElementById('select-intro').getBoundingClientRect();
    var introTopPos = $( '#block-intro' ).offset().top - 1
    const experButton = document.getElementById('select-exper').getBoundingClientRect();
    var experTopPos = $('#block-exper').offset().top - 1
    const projsButton = document.getElementById('select-projs').getBoundingClientRect();
    var projsTopPos = $('#block-projs').offset().top - 1
    const skillButton = document.getElementById('select-skill').getBoundingClientRect();
    var skillTopPos = $('#block-skill').offset().top - 1
    const contsButton = document.getElementById('select-conts').getBoundingClientRect();
    var contsTopPos = $('#block-conts').offset().top - 1
    $( "#menu-pointer" ).css({'display': 'block', 'left': `${introButton.right - convertRemToPixels(2)}px`, 'top': `${introButton.top + convertRemToPixels(1.4)}px`})
    function aniPointer(pos, clicked) {
        disableScrollSense = clicked;
        console.log(disableScrollSense)
        if (pos == 1) {
            console.log('Animating to 1');
            pointerDesPos = 1;
            anime({
                targets: '#menu-pointer',
                top: introButton.top + convertRemToPixels(1.4),
                left: introButton.right - convertRemToPixels(2),
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function(anim) {
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
                top: experButton.top + convertRemToPixels(1.4),
                left: experButton.right - convertRemToPixels(2),
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function(anim) {
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
                top: projsButton.top + convertRemToPixels(1.4),
                left: projsButton.right - convertRemToPixels(2),
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function(anim) {
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
                top: skillButton.top + convertRemToPixels(1.4),
                left: skillButton.right - convertRemToPixels(2),
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function(anim) {
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
                top: contsButton.top + convertRemToPixels(1.4),
                left: contsButton.right - convertRemToPixels(2),
                loop: false,
                duration: 500,
                easing: 'easeInCubic',
                complete: function(anim) {
                    console.log('Animation to 5 Done')
                    disableScrollSense = false;
                    pointerCurPos = pointerDesPos;
                }
            });
        } else {
            console.log('Invalid Animation Number');
        };
    };
    
    $( '#select-intro' ).click(function() {aniPointer(1, true)});
    $( '#select-exper' ).click(function() {aniPointer(2, true)});
    $( '#select-projs' ).click(function() {aniPointer(3, true)});
    $( '#select-skill' ).click(function() {aniPointer(4, true)});
    $( '#select-conts' ).click(function() {aniPointer(5, true)});

    $( window ).scroll(function() {
        if (disableScrollSense == false) {
            if ( $( window ).scrollTop() <= introTopPos & (Math.min(pointerCurPos, pointerDesPos) > 1 | 1 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(1, false);
            }
            if ( $( window ).scrollTop() >= experTopPos & $( window ).scrollTop() < projsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 2 | 2 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(2, false);
            }   
            if ( $( window ).scrollTop() >= projsTopPos & $( window ).scrollTop() < skillTopPos & (Math.min(pointerCurPos, pointerDesPos) > 3 | 3 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(3, false);
            }   
            if ( $( window ).scrollTop() >= skillTopPos & $( window ).scrollTop() < contsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 4 | 4 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(4, false);
            }  
            if ( $( window ).scrollTop() >= contsTopPos & (Math.min(pointerCurPos, pointerDesPos) > 5 | 5 > Math.max(pointerCurPos, pointerDesPos))) {
                aniPointer(5, false);
            }  
        };
    });
});

