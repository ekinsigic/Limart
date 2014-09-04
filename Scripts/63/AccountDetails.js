$(window).load(function () {

});


$(window).resize(function () {
    resetFunctionsAndGlobals();
});


$(document).ready(function () {
    if (isMobile) {
        convertClickToTap();
        jqmSwipeEvents();
    }

    closeMenuByOutsideActivity();
});


// Ekran boyutu degistirildiginde acik menuleri kapat
function resetFunctionsAndGlobals() {
    if (isAccountMainMenuActive && isAccountSubMenuActive) { // *1* 'smartphone' lara ozgu bir durum cunku 'isAccountMainMenuActive' degiskenin 'true' olabilecegi tek cihaz 'smartphone' lardir
        closeMainAndSubMenuTogether();
    }
    else if (isAccountMainMenuActive) {
        closeAccountMainMenu();
    }
}
// 


// onClick leri tap event ine cevir
function convertClickToTap() {
    $('#aMainAccountMenuOpener').removeAttr('onclick')
                                .bind("tap", function (e) { openOrCloseAccountMainMenu(); });

    $('aside ul.level1 li .aMenuItem').removeAttr('onclick')
                                      .bind("tap", function (e) { openOrCloseAccountSubMenu(this); });
}
//


// JQM swipe etme durumlarinin menuye etkileri
var isMobileScrolling = false;

function jqmSwipeEvents() {
    // mobile de scroll edildigini saptama
    jQuery(document).on("scrollstart", function (event) {
        isMobileScrolling = true;
    });
    jQuery(document).on("scrollstop", function (event) {
        isMobileScrolling = false;
    });
    //

    // saga slide edildiginde ana menuyu ac eger aktif degilse
    jQuery(document).on("swiperight", function (e) {
        setTimeout(function () {
            if (!isAccountMainMenuActive && !isMobileScrolling) {
                if (deviceIs == "smartphone") {
                    openOrCloseAccountMainMenu();
                }
            }
        }, 200);
    });
    //

    // sola slide edildiginde ana menuyu kapat eger aktif ise
    jQuery(document).on("swipeleft", function (e) {
        if (isAccountMainMenuActive) {
            if (deviceIs == "smartphone") {
                openOrCloseAccountMainMenu();
            }
        }
    });
    //
}
//


// Ekranin herhangi bir yerine tiklandiginda cagirilacak fonksiyonlar
function closeMenuByOutsideActivity() {
    if (isMobile) {
        $("html").bind("tap", function (e) {
            if (isAccountMainMenuActive && isAccountSubMenuActive) { // *1* 'smartphone' lara ozgu bir durum cunku 'isAccountMainMenuActive' degiskenin 'true' olabilecegi tek cihaz 'smartphone' lardir
                closeMainAndSubMenuTogether();
            }
            else if (isAccountMainMenuActive) {
                closeAccountMainMenu();
            }
        })

        $("#aMainAccountMenuOpener, aside ul li").bind("tap", function (e) { e.stopPropagation(); });
    }
    else {
        $(document).keydown(function (e) {
            if (isAccountMainMenuActive && isAccountSubMenuActive) { // bkz *1*
                closeMainAndSubMenuTogether();
            }
            else if (isAccountMainMenuActive) {
                closeAccountMainMenu();
            }
        });

        $("html").click(function () {
            if (isAccountMainMenuActive && isAccountSubMenuActive) { // bkz *1*
                closeMainAndSubMenuTogether();
            }
            else if (isAccountMainMenuActive) {
                closeAccountMainMenu();
            }
        });

        $("#aMainAccountMenuOpener, aside ul li").click(function (e) { e.stopPropagation(); });
    }
}
//





// ****** ANA-Menuyu acmak icin gereken fonksiyon
var isAccountMainMenuCurrAnimated = false;
var isAccountMainMenuActive = false;
var isAccountSubMenuActive = false;

// // Ana-menulerin acilip kapanmasini cagiran ana fonksiyon. 
// Bu fonksiyon sadece smartphone boyutunda, sol ustteki "3 daire ikon" tarafindan cagirilmaktadir.
function openOrCloseAccountMainMenu() {
    if (!isAccountMainMenuCurrAnimated) {
        isAccountMainMenuCurrAnimated = true;

        if (!isAccountSubMenuActive) { // eger alt-menu acik degilse devam et 
            if (!isAccountMainMenuActive) {
                isAccountMainMenuActive = true;

                // header navin icine innerWrapper ekleyerek header daki dugmeleri pasifize ediyoruz
                if ($('header nav .innerWrapper').length == 0) {
                    $('header nav').append('<div class="innerWrapper"></div>');
                }

                // ilk once geri scroll et
                if ($(window).scrollTop() > 0) {
                    $("html, body").animate({ scrollTop: 0 }, '1500', 'swing', function () {
                        showAccountMainMenu();
                    });
                }
                else {
                    showAccountMainMenu();
                }
            }
            else {
                closeAccountMainMenu();
            }
        } else { // eger alt-menu acik ise ilk once alt-menuyu kapat, sonra ana-menuyu kapat
            closeMainAndSubMenuTogether();
        }
    }
}
// //


// // Hem ana hem de alt menuyu beraber kapatan fonksiyon
function closeMainAndSubMenuTogether() {
    closeAccountSubMenu(); // ilk once alt-menuyu kapat

    setTimeout(function () {
        closeAccountMainMenu(); // sonra ana-menuyu
    }, 550);
}
// //


// // Ana-menuyu acmaya yarayan ara fonksiyon
function showAccountMainMenu() {
    if (deviceIs == "smartphone") { // smartphone cihazlarda scrollu kapat
        $(window).bind('touchmove', function (e) { e.preventDefault(); });
    }

    $('#menuActiveOverlay').show();
    $('aside').show();
    $('#breadcrumbs').show();

    setTimeout(function () {
        $('header nav .innerWrapper, #breadcrumbs, #aMainAccountMenuOpener, #aMainAccountMenuOpener .spanDot, #menuActiveOverlay, #accountDetails .divDetail, footer').addClass('activeMenu');
        isAccountMainMenuCurrAnimated = false;
    }, 10);
}
// //


// // Ana-menuyu kapamaya yarayan ara fonksiyon
function closeAccountMainMenu() {
    $('header nav .innerWrapper, #breadcrumbs, #aMainAccountMenuOpener, #aMainAccountMenuOpener .spanDot, #menuActiveOverlay, #accountDetails .divDetail, footer').removeClass('activeMenu');

    setTimeout(function () {
        if (isMobile) {
            $(window).unbind('touchmove');

            $('#menuActiveOverlay').hide();
            $('aside').hide();
            $('#breadcrumbs').hide();
            $('header nav .innerWrapper').remove();
        }

        isAccountMainMenuActive = false;
        isAccountMainMenuCurrAnimated = false;
    }, 500);
}
// //

// ****** END





// ****** ALT-Menuleri acmak icin gereken fonksiyon
var isAccountSubMenuCurrAnimated = false;
var currActiveAccountSubMenu = null;
var isTabletPortrait = false;
var isTabletLandscape_Desktop = false;


// // Alt-menulerin acilip kapanmasini cagiran ana fonksiyon
function openOrCloseAccountSubMenu(sender) {
    // 'Tablet Dikey' boyutunun saptanmasi:
    // Media query ile 'Tablet Dikey' konumuna gecerken meydana gelen bir degisikligi saptamak gerekmektedir.
    // Saptamayi 'aside' genisliginin 70px olup olmadigina gore yapabiliriz. Bu genislik ayni zamanda 'smartphone' larda da mevcut.
    // Dolayisiyla 'isAccountMainMenuActive' degiskenini de kullanalim (bkz *1*).
    var asideWidth = $('main section aside').width();
    isTabletPortrait = (asideWidth == 70 && isAccountMainMenuActive == false)
    isTabletLandscape_Desktop = (asideWidth > 70 && isAccountMainMenuActive == false); // 'Tablet yatay' ve masaustu boyutunun saptanmasi

    if (!isTabletLandscape_Desktop) { // Masaustu surumunde bu fonksiyon islememeli
        if (!isAccountSubMenuCurrAnimated) {
            isAccountSubMenuCurrAnimated = true;

            var isSenderSame = (currActiveAccountSubMenu == $(sender).attr('id'));
            currActiveAccountSubMenu = $(sender).attr('id');

            if (!isSenderSame) {
                if (!isAccountSubMenuActive) {
                    isAccountSubMenuActive = true;
                    openAccountSubMenu(sender);
                }
                else {
                    // eger subMenu aktif ise, menu arasinda gecis yap.
                    accountSubMenuSwitch(sender);
                }
            }
            else {
                closeAccountSubMenu();
            }
        }
    }
}
// //


// // Alt-menuyu acmaya yarayan ara fonksiyon
function openAccountSubMenu(sender) {
    $(sender).addClass('fullActive');
    $(sender).find('img.white').addClass('fullActive');

    setULLevel2(sender, false);

    setTimeout(function () {
        $(sender).parent().find('ul.level2').addClass('fullActive');
    }, isTabletPortrait ? 20 : 0);

    setTimeout(function () {
        $('#menuActiveOverlay').addClass('fullActive');
        $('#accountDetails .divDetail').addClass('fullActive');
        $('footer').addClass('fullActive');

        setTimeout(function () {
            isAccountSubMenuCurrAnimated = false;
        }, 500);
    }, 150);
}
// //


// // Mevcutta acik olan alt-menuyu kapatmak icin gereken fonksiyon
function closeAccountSubMenu() {
    $('aside .aMenuItem').removeClass('fullActive');
    $('aside .aMenuItem').find('img.white').removeClass('fullActive');
    $('#menuActiveOverlay').removeClass('fullActive');
    $('#accountDetails .divDetail').removeClass('fullActive');
    $('footer').removeClass('fullActive');

    setTimeout(function () {
        $('aside ul.level2').removeClass('fullActive');

        if (isTabletPortrait) {
            $('aside ul.level2').css({
                transform: 'translate3d(0,0,0)',
                '-webkit-transform': 'translate3d(0,0,0)',
                '-moz-transform': 'translate3d(0,0,0)',
                '-ms-transform': 'translate3d(0,0,0)',
                '-o-transform': 'translate3d(0,0,0)'
            }).addClass('fullActive');
        }

        isAccountSubMenuActive = false;
        isAccountSubMenuCurrAnimated = false;
        currActiveAccountSubMenu = null;
    }, 500);
}
// //


// // Mevcutta acik olan alt-menuler arasinda gecise yarayan fonksiyon
function accountSubMenuSwitch(sender) {
    // 1. mevcutta aktif olan menuleri pasifize et
    $('aside .aMenuItem').removeClass('fullActive');
    $('aside .aMenuItem').find('img.white').removeClass('fullActive');

    // 2. yeni menuyu aktif et
    $(sender).addClass('fullActive');
    $(sender).find('img.white').addClass('fullActive');

    // 3. mevcutta aktif olan subMenu UL yi degiskene ata, daha sonra gizleyecegiz
    var alreadyActiveSubMenuUL = $('aside').find('ul.level2.fullActive')

    // 4. yukaridaki (3.deki) UL nin kapsadigi LI lerin opacity degerini sifirla
    $(alreadyActiveSubMenuUL).find('li').css({ opacity: 0 });

    // 5. yukaridaki (4.deki) durumun bitmesini beklemek icin setTimeout ile devam et
    setTimeout(function () {
        // 6. yeni (gonderene bagli) UL yi aktif kilmadan once LI lerinin opacity degerini sifirla
        $(sender).parent().find('ul.level2 li').css({ opacity: 0 });

        // 6*. yeni (gonderene bagli) UL nin stilini düzenle
        setULLevel2(sender, true);

        // 7. yeni (gonderene bagli) UL yi aktif kil ama yukaridaki (6 daki) durumdan dolayi LI ler gorunmeyecektir
        //$(sender).parent().find('ul.level2').addClass('fullActive');

        // 8. yukaridaki (3.deki) UL yi lerini artik pasifize et
        $(alreadyActiveSubMenuUL).removeClass('fullActive');

        // 9. SetTimeOut ile eski LI lerin yukarida ekledigimiz (4.deki) opacity 0 degerini kaldir.
        $(alreadyActiveSubMenuUL).find('li').removeAttr('style');

        // 10. yukaridaki (6 daki) durumdan dolayi setTimeout ile devam et
        setTimeout(function () {
            // 11. yeni (gonderene bagli) UL nin LI lerinin opacity degerini normale cevir
            $(sender).parent().find('ul.level2 li').css({ opacity: 1 });

            // 12. yukaridaki (11 deki) durumdan dolayi setTimeout ile devam et
            setTimeout(function () {
                // 13. animasyonun artik bittigini belirt
                isAccountSubMenuCurrAnimated = false;
            }, 500);
        }, 300);
    }, 500);
}
// //


function setULLevel2(sender, isSwitch) {
    if (isTabletPortrait) {
        var senderUL = $(sender).parents('ul.level1');
        var senderLI = $(sender).parent();
        var indexOfLI = $(senderLI).index();
        var heightOfLI = $(senderLI).height() + 1;
        var newTopValOfLI = -parseInt(indexOfLI * heightOfLI);

        $(senderLI).find('ul.level2').css({
            top: newTopValOfLI,
            height: parseInt($(senderUL).height())
        });

        if (isSwitch) {
            $(senderLI).find('ul.level2').css({ left: 70 });
        }
        else {
            $(sender).parent().find('ul.level2').css({
                transform: 'translate3d(300px,0,0)',
                '-webkit-transform': 'translate3d(300px,0,0)',
                '-moz-transform': 'translate3d(300px,0,0)',
                '-ms-transform': 'translate3d(300px,0,0)',
                '-o-transform': 'translate3d(300px,0,0)'
            }).addClass('fullActive');
        }
    }
}

// ****** END