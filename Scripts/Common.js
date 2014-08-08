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
        var isMenuOpen = false;//Menünün açýk olup olmadýðýný kontrol etmek için, sayfa baþlangýcýnda kapalý varsayýyoruz.
        $('nav .imgNav').bind('touchstart', function (e) {//imgNav class'lý div'e dokunma iþlemi baþladýðýnda..
            e.stopPropagation();//sayfanýn gerisine eklenen window.touchstart iþleminden muaf tutuyoruz.
            var isScroll = false;//kullanýcýnýn scroll amaçlý dokunup dokunmadýðýný tespit etmek için dokunma iþleminin baþýnda scroll amaçlý dokunmadýðýný varsayýyoruz.
            $(this).bind('touchmove', function () {//kullanýcýnýn ekrana dokunduðu parmaðýný hareket ettirmesi durumunda sayfaya scroll amaçlý dokunduðunu deklare ediyoruz.
                isScroll = true;
            });
            $(this).one('touchend', function (e) {//kullanýcýnýn parmaðýný kaldýrmasý durumunda..
                if (!isMenuOpen && !isScroll) {//eðer menü kapalýysa, ve eylem scroll amaçlý deðilse..
                    isMenuOpen = true;//deðiþkenleri eski haline getiriyoruz
                    isScroll = false;
                    $('nav .divNav, main, footer').addClass('menuOn');//aþaðý doðru hareket etmesini istediðimiz elementlere aþaðý doðru hareket etmiþ hallerini içeren class'ý ekliyoruz
                    e.stopPropagation();//sayfanýn gerisine eklenen window.touchend iþleminden muaf tutuyoruz.
                    $(window).bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
                        e.preventDefault();
                    });
                }
                else if (isMenuOpen && !isScroll) {//eðer menü açýktýysa, ve eylem scroll amaçlý deðilse..
                    $('nav .divNav, main, footer').removeClass('menuOn');//verdiðimiz, elementleri aþaðýda gösteren class'ý geri alýyoruz.
                    setTimeout(function () {//setTimeout kurarak kullanýcýyý animasyonu beklemek zorunda býrakýyoruz
                        //tespit deðiþkenlerini eski haline getirip scroll'u tekrar aktif hale getiriyoruz.
                        isMenuOpen = false;
                        isScroll = false;
                        $(window).unbind("touchmove");
                    }, 300);
                }

            });
        });

        $(window).bind('touchstart', function () {//kullanýcýnýn sayfanýn herhangi bir yerine týklamasý durumunda menünün kapanmasýný saðlýyoruz.
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

        $('.divNav').bind('touchstart', function (e) {//yukarýda sayfanýn herhangi bir yerine basýldýðýnda menüyü kapatan fonksiyondan, menünün kendisini muaf tutuyoruz.
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


// misc imajlarını sayfa açılışında retina olup olmadğına göre yükleme fonksiyonu
function miscImgLoader() {
    $('body').find('img.miscImg').each(function(){
        var miscIdentifier = $(this).attr('data-misc-identifier');
        if (window.devicePixelRatio >= 1.5) {
            $(this).attr('src','images/@2x/'+miscIdentifier+'@2x.png');

        }
        else {
            $(this).attr('src','images/'+miscIdentifier+'.png');
        }
    });
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