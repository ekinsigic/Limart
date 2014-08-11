$(document).ready(function () {
    mainHeight();
    triggerGallerySlider();
    triggerArtistSlider(true);
});



$(window).resize(function () {
    if (!isMobile) {
        mainHeight();
    }

    triggerArtistSlider(false);
});



function mainHeight() {
    // giris kisminin, ekran cozunurlugune gore yuksekliginin ayarlanmasini sagliyoruz.
    $('#mainEntry').css({ height: wH - hH });
}



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
            navigateByCenterClick: true
        }
    });
}



// ArtistSlider i dinamik olarak olusturuyoruz. 
// 1. divArtists elementinden slider icerigi cekiliyor
// 2. Cozunurluge gore 2 ya da 4 lu kolon yapisi saptaniyor.
var artistSlider = null;
var artistSliderColNo = -1;
var artistSliderResBase = 950;
var artistSliderResizeIsOnCheck = null;

function triggerArtistSlider(isInitiation) {
    if (isInitiation) {
        $('#artists .divArtistSliderContainer').css({ opacity: 0 });
        artistSliderColNo = wW > artistSliderResBase ? 4 : 2;
        var artistItemLength = $('#artists .divArtists .divArtist').length;
        var sliderContent = '<div id="artistSlider" class="royalSlider rsMinW ' + (artistSliderColNo == 2 ? "min" : "") + '">' +
                            '<div class="rsContent"><div class="divArtists">';

        // divArtists havuzundaki icerigi cekip sliderContent degiskeninde html i hazirla
        $('#artists .divArtists .divArtist').each(function (index, elem) {
            sliderContent += '<div class="divArtist">' + $(this).html() + '</div>';
            
            if ((index + 1) % artistSliderColNo == 0 && (index + 1) != artistItemLength) {
                sliderContent += '<div class="separator"></div>' +
                                 '</div></div>' + 
                                 '<div class="rsContent"><div class="divArtists">';
            }
        });
        sliderContent += '</div>';

        // artistSlider i icin icerigi kapsayiciya ekle
        $('#artists .divArtistSliderContainer').html(sliderContent);

        // kisa bir sure sonra artistSlider i kur
        setTimeout(function () {
            triggerArtistSliderNow(artistSliderColNo);
        }, 100);
    }
    else {
        if (artistSliderResizeIsOnCheck != null) {
            // resize devam ediyorsa timeri guncelle
            clearTimeout(artistSliderResizeIsOnCheck);
        }

        artistSliderResizeIsOnCheck = setTimeout(function () {
            var artistSliderCurrentColNo = wW > artistSliderResBase ? 4 : 2;

            // eger zaten ayni kolon yapisi mevcutsa, tekrar slider i kurmaya gerek yok
            if (artistSliderCurrentColNo != artistSliderColNo) {
                artistSlider.destroy();
                $('#artistSlider').remove();
                triggerArtistSlider(true);
            }
        }, 200);
    }


}

function triggerArtistSliderNow(colNo) {
    $('#artistSlider').royalSlider({
        addActiveClass: true,
        arrowsNav: true,
        arrowsNavAutoHide: false,
        controlsInside: false,
        controlNavigation: 'none',
        autoScaleSlider: true,
        autoScaleSliderWidth: parseInt(480 * colNo),
        autoScaleSliderHeight: 480,
        loop: true,
        fadeinLoadedSlide: false,
        globalCaption: false,
        keyboardNavEnabled: true,
        imgWidth: 480,
        imgHeight: 480,
        slidesSpacing:0
    });

    artistSlider = $("#artistSlider").data('royalSlider');
    $('#artists .divArtistSliderContainer').css({ opacity: 1 });
}