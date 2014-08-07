

$(document).ready(function () {
    triggerSlider();
});


$(window).resize(function () {
    triggerSlider();
});



function triggerSlider() {
    jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
    $('#slider').royalSlider({
        allowCSS3: true,
        arrowsNav: false,
        arrowsNavAutoHide: false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'none',
        slidesOrientation: 'horizontal',
        slidesSpacing: 0,
        imageAlignCenter: false,
        blockLoop: false,
        loop: false,
        numImagesToPreload: 0,
        usePreloader: true,
        transitionType: 'move',
        transitionSpeed: 2000,
        navigateByClick: false,
        keyboardNavEnabled: true,
        block: { delay: 1500 },
        autoPlay: {
            enabled: true,
            pauseOnHover: true
        }
    });
    var slider = $('#slider.royalSlider').data('royalSlider');
    slider.ev.on('rsAfterContentSet', function (event) {
        var imgSrc = $('#slider .rsImg').attr('src');
        $('#slider .divSliderImg').css('background-image', 'url(' + imgSrc + ')');
    });
}

