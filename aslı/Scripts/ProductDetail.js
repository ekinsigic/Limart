
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
        var itemsToCarry = $('.topFullWidth .artworkHeading');
        $('.topFullWidth .artworkHeading').remove();
        $('.artworkInfo').prepend(itemsToCarry);
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
    $('.zoomArtwork, .artworkImage img').click(function(){
        openPopUps('.zoomWindow');
    });

    $('.roomViewArtwork').click(function(){
        openPopUps('.demoWindow');
        setTimeout(function(){
            demoPreview();
        },50)
    });
}


function demoPreview() {
var artworkSize = $('#demoWindowSelector').val();
var wallSize = $('.demoSingleArtworkImageContainer .artworkBackgroundImage').attr('data-wallsize');
var finalImageProportions = wallSize / artworkSize
    $('#demoWindowSelector').change(function(){
        artworkSize = $(this).val();
        finalImageProportions = wallSize / artworkSize
        $('.artworkDemoActualImageCenterer').height($('.artworkBackgroundImage').height()/finalImageProportions);
        $('.artworkDemoActualImage').css({
            'margin-top': -($('.artworkBackgroundImage').height()/finalImageProportions)/2 + 'px'
        });
    })
$('.artworkDemoActualImageCenterer').height($('.artworkBackgroundImage').height()/finalImageProportions);
$('.artworkDemoActualImage').css({
    'margin-top': -($('.artworkBackgroundImage').height()/finalImageProportions)/2 + 'px'
});
$('.artworkDemoActualImageCenterer').width($('.artworkBackgroundImage').width());
$(window).resize(function(){
    $('.artworkDemoActualImageCenterer').height($('.artworkBackgroundImage').height()/finalImageProportions);
    $('.artworkDemoActualImage').css({
        'margin-top': -($('.artworkBackgroundImage').height()/finalImageProportions)/2 + 'px'
    });
    $('.artworkDemoActualImageCenterer').width($('.artworkBackgroundImage').width());
});
}




