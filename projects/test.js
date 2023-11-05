var pointerCurPos = 1;
var pointerDesPos = 1;
var disableScrollSense = false;

$(document).ready(function () {
    
    function convertRemToPixels(rem) {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    // Puts all list elements into an array for positioning
    var sectionList = [];
    $(' #side-menu ul').each(function() {
        // Gets the ID of the list element
        var elID = $(this).attr('id');

        // Gets the Button Rectangle and the top position of the Designated Section
        var secID = 'block-' + elID.split('-')[1];
        var secButtonPos = document.getElementById(elID).getBoundingClientRect();
        var secTopPos = $('#' + secID).offset().top - convertRemToPixels(1);

        // Combines the data into a section object
        var section = {
            buttonID: elID,
            secID: secID,
            buttonPos: secButtonPos,
            secPos: secTopPos
        }

        sectionList.push(section);
    });
    console.log(sectionList);
    
    if (sectionList && sectionList.length > 0) {
        // Getting position of first button
        var topButton = sectionList[0].buttonPos;

        // Pointer Position Offset
        const pointerTopVar = convertRemToPixels(1.2);
        const pointerRigVar = convertRemToPixels(2);

        $("#menu-pointer").css({
            'display': 'block',
            'left': `${topButton.right - pointerRigVar}px`,
            'top': `${topButton.top + pointerTopVar}px`
        })
    };

});