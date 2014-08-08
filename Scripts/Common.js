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
var ppi = 0;

$(document).ready(function () {
    checkDevice();
    scrollEvents();
    setGlobals();
    popupSettings();

    miscImgLoader();
    openCloseMenu();
    openOrCloseSearch();
    // PPI = getPPI();
    // console.log(PPI);
});


$(window).resize(function () {
    setGlobals();
});

$(window).load(function(){
    getPPI();
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
    else if (isMobile && (screen.width / window.devicePixelRatio) > 380) { // tablet
        deviceIs = "tablet";
    }
    else {
        deviceIs = "smartphone";
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



function popupSettings() {
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            closeSearch();
        }
    });

    $('html').click(function () {
        closeSearch();
    });

    $('#search').click(function (e) {
        e.stopPropagation();
    });
}




function openCloseMenu() {
    if (isMobile) {
        var isMenuOpen = false;//Men�n�n a��k olup olmad���n� kontrol etmek i�in, sayfa ba�lang�c�nda kapal� varsay�yoruz.
        $('nav .imgNav').bind('touchstart', function (e) {//imgNav class'l� div'e dokunma i�lemi ba�lad���nda..
            e.stopPropagation();//sayfan�n gerisine eklenen window.touchstart i�leminden muaf tutuyoruz.
            var isScroll = false;//kullan�c�n�n scroll ama�l� dokunup dokunmad���n� tespit etmek i�in dokunma i�leminin ba��nda scroll ama�l� dokunmad���n� varsay�yoruz.
            $(this).bind('touchmove', function () {//kullan�c�n�n ekrana dokundu�u parma��n� hareket ettirmesi durumunda sayfaya scroll ama�l� dokundu�unu deklare ediyoruz.
                isScroll = true;
            });
            $(this).one('touchend', function (e) {//kullan�c�n�n parma��n� kald�rmas� durumunda..
                if (!isMenuOpen && !isScroll) {//e�er men� kapal�ysa, ve eylem scroll ama�l� de�ilse..
                    isMenuOpen = true;//de�i�kenleri eski haline getiriyoruz
                    isScroll = false;
                    $('nav .divNav, main, footer').addClass('menuOn');//a�a�� do�ru hareket etmesini istedi�imiz elementlere a�a�� do�ru hareket etmi� hallerini i�eren class'� ekliyoruz
                    e.stopPropagation();//sayfan�n gerisine eklenen window.touchend i�leminden muaf tutuyoruz.
                    $(window).bind('touchmove', function (e) {//sayfan�n scroll olmas�n� engelliyoruz
                        e.preventDefault();
                    });
                }
                else if (isMenuOpen && !isScroll) {//e�er men� a��kt�ysa, ve eylem scroll ama�l� de�ilse..
                    $('nav .divNav, main, footer').removeClass('menuOn');//verdi�imiz, elementleri a�a��da g�steren class'� geri al�yoruz.
                    setTimeout(function () {//setTimeout kurarak kullan�c�y� animasyonu beklemek zorunda b�rak�yoruz
                        //tespit de�i�kenlerini eski haline getirip scroll'u tekrar aktif hale getiriyoruz.
                        isMenuOpen = false;
                        isScroll = false;
                        $(window).unbind("touchmove");
                    }, 300);
                }

            });
        });

        $(window).bind('touchstart', function () {//kullan�c�n�n sayfan�n herhangi bir yerine t�klamas� durumunda men�n�n kapanmas�n� sa�l�yoruz.
            $('.divNav, main, footer').removeClass('menuOn');

            setTimeout(function () {
                isMenuOpen = false;
                isScroll = false;
                $(window).unbind("touchmove");
            }, 300);

            $(this).bind('touchend', function () {
                $('.divNav, main, footer').removeClass('menuOn');
                setTimeout(function () {
                    isMenuOpen = false;
                    isScroll = false;
                    $(window).unbind("touchmove");
                }, 300);
            });
        });

        $('.divNav').bind('touchstart', function (e) {//yukar�da sayfan�n herhangi bir yerine bas�ld���nda men�y� kapatan fonksiyondan, men�n�n kendisini muaf tutuyoruz.
            e.stopPropagation();
            $(this).bind('touchend', function (e) {
                e.stopPropagation();
            });
        });
    }
    else {
        var isMenuOpen = false;
        $('.imgNav').bind('click', function (e) {
            if (!isMenuOpen) {
                isMenuOpen = true;
                isScroll = false;
                $('.divNav, main, footer').addClass('menuOn');
                e.stopPropagation();
                $(window).bind('touchmove', function (e) {
                    e.preventDefault();
                });
            }
            else if (isMenuOpen) {
                $('.divNav, main, footer').removeClass('menuOn');
                setTimeout(function () {
                    isMenuOpen = false;
                    isScroll = false;
                    $(window).unbind("touchmove");
                }, 300);
            }
        });

        $(window).bind('click', function () {
            $('.divNav, main, footer').removeClass('menuOn');
            setTimeout(function () {
                isMenuOpen = false;
                isScroll = false;
                $(window).unbind("touchmove");
            }, 300);
        });

        $('.divNav').bind('click', function (e) {
            e.stopPropagation();
        });
    }
}

function miscImgLoader() {
    $('body').find('img.miscImg').each(function(){
        var miscIdentifier = $(this).attr('data-misc-identifier');
        if (ppi() > 192) {
        $(this).attr('src','images/'+miscIdentifier+'@2x.png');
        }
        else {
        $(this).attr('src','images/'+miscIdentifier+'.png');
        }
    });
}


function getPPI(){
         $('body').append('<div id="ppiObserver" style="width:1in; ">');
         $('#ppiObserver').width('1in');
         ppi = $('#ppiObserver').width();
}


var isSearchActive = false;

function openOrCloseSearch() {
    if (!isMobile) {

        $('nav .liSearch img').bind('click', function (e) {
            if (!isSearchActive) {
                isSearchActive = true;
                $('#search').addClass('topSearch');
                $('#search input').focus();
            }
            else {
                closeSearch();
            }
        });
    }
}

function closeSearch() {
    if (isSearchActive) {
        $('#search').removeClass('topSearch');
        setTimeout(function () {
            isSearchActive = false;
        }, 300);
    }
}