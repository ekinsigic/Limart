
$(document).ready(function () {
    triggerGallerySlider();
    productDetailPopUps()
    if ($('.topFullWidth h5').css('display') == 'none') {
        carryHeading();
    }
});
$(window).resize(function(){
    if ($('.topFullWidth h5').css('display') == 'none') {
        carryHeading();
    }
    else {
        $('.topFullWidth .artworkHeading').remove();
    }
});
function triggerGallerySlider() {
    $('#gallerySlider').royalSlider({
        addActiveClass: true,
        arrowsNav: !isMobile,
        arrowsNavAutoHide: false,
        controlsInside: false,
        controlNavigation: 'none',
        autoScaleSlider: true,
        autoScaleSliderWidth: 960,
        autoScaleSliderHeight: 340,
        loop: true,
        fadeinLoadedSlide: false,
        globalCaption: true,
        keyboardNavEnabled: true,
        globalCaptionInside: false,
        dragUsingMouse: true,
        numImagesToPreload: 8,
        usePreloader: true,
        slidesSpacing:0,
        visibleNearby: {
            enabled: true,
            centerArea: isMobile ? 0.60 : 0.45,
            center: true,
            breakpoint: 0,
            breakpointCenterArea: 0,
            navigateByCenterClick: false
        }
    });
}

function carryHeading() {
    var itemsToCarry = $('.artworkHeading')
    $('.topFullWidth').append(itemsToCarry);
}

function openPopUps(elementSelector) {
    $(elementSelector).removeClass('noDisplay');
    setTimeout(function(){
        $(elementSelector).css({
            'opacity':'1'
        })
    });

    $(elementSelector + ' .closeWindow').click(function(){
        $(elementSelector).css({
            'opacity':'0'
        });
        setTimeout(function(){
            $(elementSelector).addClass('noDisplay');
        },500);
    })
}

function productDetailPopUps() {
    $('.zoomArtwork').click(function(){
        openPopUps('.zoomWindow');
    });
}







