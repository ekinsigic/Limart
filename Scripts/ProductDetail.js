
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
    $('.zoomArtwork, .artworkImage .artworkImageActual').click(function(){
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
    var paddingProportions = wallSize / 0.07
    var imagePaddingColor = 'url(images/artwork-background-white.png) repeat'

        $('.artworkDemoActualImageCenterer').height($('.artworkBackgroundImage').height()/finalImageProportions);
        $('.artworkDemoActualImage').css({
            'margin-top': -($('.artworkBackgroundImage').height()/finalImageProportions)/2 + 'px',
            'padding': ($('.artworkBackgroundImage').height()/paddingProportions) + 'px',
            'background': imagePaddingColor
        });
        $('.artworkDemoActualImageCenterer').width($('.artworkBackgroundImage').width());
        $('.artworkDemoActualImage').after('<div class="artworkDemoActualImageWrap">');
        $('.artworkDemoActualImageWrap').css({
            'width': $('.artworkDemoActualImage').width(),
            'height': $('.artworkDemoActualImage').height(),
            'position':'absolute',
            'left':$('.artworkDemoActualImage').offset().left - $('.artworkDemoActualImageCenterer').offset().left + ($('.artworkBackgroundImage').height()/paddingProportions),
            'top':$('.artworkDemoActualImage').offset().top - $('.artworkDemoActualImageCenterer').offset().top + ($('.artworkBackgroundImage').height()/paddingProportions),
        });

        $('#demoWindowSelector').change(function(){
            artworkSize = $(this).val();
            paddingProportions = wallSize / 0.07
            finalImageProportions = wallSize / artworkSize
            $('.artworkDemoActualImageCenterer').height($('.artworkBackgroundImage').height()/finalImageProportions);
            $('.artworkDemoActualImage').css({
                'margin-top': -($('.artworkBackgroundImage').height()/finalImageProportions)/2 + 'px',
                'padding': ($('.artworkBackgroundImage').height()/paddingProportions) + 'px',
                'background': imagePaddingColor
            });
            $('.artworkDemoActualImageWrap').css({
                'width': $('.artworkDemoActualImage').width(),
                'height': $('.artworkDemoActualImage').height(),
                'position':'absolute',
                'left':$('.artworkDemoActualImage').offset().left - $('.artworkDemoActualImageCenterer').offset().left + ($('.artworkBackgroundImage').height()/paddingProportions),
                'top':$('.artworkDemoActualImage').offset().top - $('.artworkDemoActualImageCenterer').offset().top + ($('.artworkBackgroundImage').height()/paddingProportions),
            });
        });

        $(window).resize(function(){
            $('.artworkDemoActualImageCenterer').height($('.artworkBackgroundImage').height()/finalImageProportions);
            $('.artworkDemoActualImage').css({
                'margin-top': -($('.artworkBackgroundImage').height()/finalImageProportions)/2 + 'px',
                'padding': ($('.artworkBackgroundImage').height()/paddingProportions) + 'px',
                'background': imagePaddingColor
            });
            $('.artworkDemoActualImageCenterer').width($('.artworkBackgroundImage').width());
            $('.artworkDemoActualImageWrap').css({
                'width': $('.artworkDemoActualImage').width(),
                'height': $('.artworkDemoActualImage').height(),
                'position':'absolute',
                'left':$('.artworkDemoActualImage').offset().left - $('.artworkDemoActualImageCenterer').offset().left + ($('.artworkBackgroundImage').height()/paddingProportions),
                'top':$('.artworkDemoActualImage').offset().top - $('.artworkDemoActualImageCenterer').offset().top + ($('.artworkBackgroundImage').height()/paddingProportions),
            });
        });
}

