

$(document).ready(function () {
    mainHeight();
    triggerGallerySlider();
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






function triggerGallerySlider() { 
    jQuery(document).ready(function ($) {
        var si = $('#gallerySlider').royalSlider({
            addActiveClass: true,
            arrowsNav: false,
            controlNavigation: 'none',
            autoScaleSlider: true,
            loop: true,
            fadeinLoadedSlide: false,
            globalCaption: true,
            keyboardNavEnabled: true,
            globalCaptionInside: false,

            visibleNearby: {
                enabled: true,
                centerArea: 0.5,
                center: true,
                breakpoint: 650,
                breakpointCenterArea: 0.64,
                navigateByCenterClick: true
            }
        }).data('royalSlider');

        // link to fifth slide from slider description.
        $('.slide4link').click(function (e) {
            si.goTo(4);
            return false;
        });


        var slider = $('#gallerySlider.royalSlider').data('royalSlider');
        slider.ev.on('rsAfterContentSet', function (event) {
            var imgSrc = $('#gallerySlider .rsImg').attr('src');
            $('#gallerySlider .divSliderImg').css('background-image', 'url(' + imgSrc + ')');
        });

    });
}
