var deviceIs;
var isMobile;

var wW;
var wH;
var sW;
var sH;
var hH;
var isLandscape = false;
var isPortrait = false;

var scrollTopVal = 0;
var scrollDir;
var lastScrollAmount = 0;
var openOpener = null;




checkDevice();

if (isMobile) {
    // load jQuery Mobile dynamically
    $(document).on('mobileinit', function () {
        $.mobile.ignoreContentEnabled = true; // disable jqm styling
    });

    var pathPrefix = ($('#input63').length > 0 ? "../" : "");
    document.write('<script type="text/javascript" src="' + pathPrefix + 'Scripts/Mobile/jquery.mobile-1.4.3.min.js"><\/script>');
    //
}

$(document).ready(function () {
    $('body').css('opacity', '1');
    // $('a').click(function(e){
    //     destination = $(this).attr('href');
    //     if (destination !== '#') {
    //         e.preventDefault();
    //         $('body').css('opacity','0');
    //         setTimeout(function(){
    //             window.location.replace(destination);
    //         },550);
    //     };
    // });
    //fullscreen();
    scrollEvents();
    setGlobals();
    smartphoneLandscape();
    miscImgLoader();
    //    aggregateHeader();

    // PPI = getPPI();

    //özellikle iphone4 için menüyü scroll edilebilir kıldık.
    if (deviceIs == 'smartphone' && sH <= 500) {
        $('nav .divNav').css({ overflow: 'auto' });
        $('nav .divNav .divMenuContent').css({ height: 230 });
    }

});

function fullscreen() {
    if (isMobile) {
        document.body.requestFullscreen();
    };
}

var orientationChangeTimer = null;
$(window).on("orientationchange", function () {
    if (orientationChangeTimer == null) {
        clearTimeout(orientationChangeTimer);
    }

    orientationChangeTimer = setTimeout(function () {
        smartphoneLandscape();
    }, 300);
});

$(window).resize(function () {
    setGlobals();
});

function setGlobals() {
    wW = $(window).width();
    wH = $(window).height();
    sW = screen.width;
    sH = screen.height;
    hH = $('header').height();
    isLandscape = (wW >= wH);
    isPortrait = (wW < wH);
}

function checkDevice() {
    isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));

    if (!isMobile) {
        deviceIs = "laptop";
    }
    else if (screen.width < 580 || window.devicePixelRatio == 3) { // tablet
        deviceIs = "smartphone";
    }
    else {
        deviceIs = "tablet";
    }
}

function scrollEvents() {
    $(window).scroll(function () {
        scrollTopVal = $(window).scrollTop();

        if (scrollTopVal > lastScrollAmount) {
            scrollDir = 'down';
        }
        else {
            scrollDir = 'up';
        }
    });
}

/* mobilde yatayda gelecek ekran */
function smartphoneLandscape() {
    if (deviceIs == 'smartphone' && isLandscape) {
        $('#smartphoneLandscape').show();
        $('.divPreloader').addClass('loading');
    }
    else if (deviceIs == 'smartphone' && isPortrait) {
        $('#smartphoneLandscape').hide();
        $('.divPreloader').removeClass('loading');
    }
}



// misc imajlarını sayfa açılışında retina olup olmadığına göre yükleme fonksiyonu
function miscImgLoader() {
    var is63 = false;

    if ($('#input63').length > 0) {
        is63 = ($('#input63').val() == '63');
    }

    var imgFolderPath = (is63 ? '../Images/63' : 'Images');

    $('body').find('img[data-sixtyThree]').each(function () {

        var miscIdentifier = $(this).attr('data-sixtyThree');

        if (isMobile) {
            if ($(this).hasClass('white')) {
                $(this).attr('src', imgFolderPath + '/@2x/' + miscIdentifier + '-white@2x.png');
            }
            else {
                $(this).attr('src', imgFolderPath + '/@2x/' + miscIdentifier + '@2x.png');
            }
        }
        else {
            if ($(this).hasClass('white')) {
                $(this).attr('src', imgFolderPath + '/' + miscIdentifier + '-white.png');
            }
            else {
                $(this).attr('src', imgFolderPath + '/' + miscIdentifier + '.png');
            }
        }
    });
}
