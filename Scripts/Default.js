

$(document).ready(function () {
    mainHeight();
});


$(window).resize(function () {
    if(!isMobile){
        mainHeight();
    }
});


function mainHeight() {
    var hH = $('header').height();
    var mainEntryHeight = wH - hH;

    $('#mainEntry').css({ height: mainEntryHeight });
} 