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
        $.mobile.ajaxEnabled = false; // disable ajax loading
    });

    var pathPrefix = ($('#input63').length > 0 ? "../" : "");
    document.write('<script type="text/javascript" src="Scripts/Mobile/jquery.mobile-1.4.3.min.js"><\/script>');
    //
}

else {
    document.write('<script type="text/javascript" src="ScrollerFiles/jquery.mCustomScrollbar.concat.min.js"></script><\/script>');
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
    setMainMargin();
});

$(window).load(function(){
    setMainMargin();
});

$(document).ready(function () {
    scrollEvents();
    setGlobals();
    smartphoneLandscape();
    miscImgLoader();
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

    var imgFolderPath = 'Images'

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


function scrollTop63(scrollLocation,scrollTime,selectedElement) {
    var topDistance = $(document).scrollTop();

    if (scrollLocation > ($(document).height() - wH)) {
        scrollLocation = ($(document).height() - wH)
    };
    if (scrollLocation < 0) {
        scrollLocation = 0
    };

    var scrollDistance = scrollLocation - topDistance 

    if (selectedElement == null) {
        selectedElement = 'body'
    };
    $(window).bind('mousewheel', function(e){
        e.preventDefault();
    });
    $(window).bind('touchmove', function(e){
        e.preventDefault();
    });
    $(selectedElement).css({
        '-webkit-transform':'translate3d(0px,'+(-scrollDistance)+'px,0px)',
        'transition':'transform 0.'+(scrollTime/100)+'s'
    });

    setTimeout(function(){
        $(document).scrollTop(topDistance + scrollDistance);
        $(selectedElement).css({
            '-webkit-transform':'none',
            'transition':'transform 0s'
        });
        setTimeout(function(){
            $(window).unbind('mousewheel');
            $(window).unbind('touchmove');
        })
    },scrollTime);
}



function selectCustomizer() {
    $(document).find('.SSTCustomSelectOriginal').each(function(){
        $(this).after('<ul class="SSTCustomSelectMirror">')
        var numberOfOptions = $(this).find('option').length()

    })
}


function setMainMargin() {
    $('main').css('margin-top',$('header').outerHeight());
}








