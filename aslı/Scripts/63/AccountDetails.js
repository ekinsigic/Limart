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
            else if (!isAccountMainMenuActive && isAccountSubMenuActive) { // 'tablet dikey' konumunda sub menunun acik olma durumu
                if (!isAccountSubMenuCurrAnimated) {
                    openOrCloseAccountSubMenu($('#' + currActiveAccountSubMenu)); // *2* son gondereni paslayarak kapatabiliriz
                }
            }
            else if (isAccountMainMenuActive) {
                closeAccountMainMenu();
            }
        })

        $("#aMainAccountMenuOpener, aside ul li").bind("tap", function (e) { e.stopPropagation(); });
    }
    else {
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                if (isAccountMainMenuActive && isAccountSubMenuActive) { // bkz *1*
                    closeMainAndSubMenuTogether();
                }
                else if (!isAccountMainMenuActive && isAccountSubMenuActive) { // 'tablet dikey' konumunda sub menunun acik olma durumu
                    if (!isAccountSubMenuCurrAnimated) {
                        openOrCloseAccountSubMenu($('#' + currActiveAccountSubMenu)); // bkz *2*
                    }
                }
                else if (isAccountMainMenuActive) {
                    closeAccountMainMenu();
                }
            }
        });

        $("html").click(function () {
            if (isAccountMainMenuActive && isAccountSubMenuActive) { // bkz *1*
                closeMainAndSubMenuTogether();
            }
            else if (!isAccountMainMenuActive && isAccountSubMenuActive) { // 'tablet dikey' konumunda sub menunun acik olma durumu
                if (!isAccountSubMenuCurrAnimated) {
                    openOrCloseAccountSubMenu($('#' + currActiveAccountSubMenu)); // bkz *2*
                }
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


// // Hem ana hem de alt menuyu beraber kapatan fonksiyon. Smartphone lar icin cunku ana ve alt menunun 
// // beraber acik olabilecegi tek cihaz.
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
                    // header navin icine innerWrapper ekleyerek header daki dugmeleri pasifize ediyoruz
                    if ($('header nav .innerWrapper').length == 0) {
                        $('header nav').append('<div class="innerWrapper"></div>');
                    }

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
    // gonderen elemente bagli olarak temel etkiler
    $(sender).addClass('fullActive');
    $(sender).find('img.white').addClass('fullActive');
    $(sender).parent().find('ul.level2').addClass('fullActive');
    //

    if (!isTabletPortrait) { // smartphone konumu ise
        setTimeout(function () {
            $('#menuActiveOverlay').addClass('fullActive');
            $('#accountDetails .divDetail').addClass('fullActive');
            $('footer').addClass('fullActive');

            setTimeout(function () {
                isAccountSubMenuCurrAnimated = false;
            }, 600);
        }, 150);
    }
    else { // tablet dikey konum ise
        // overlay element ini main icine alalim. Disindayken istedigimiz alani kaplatamiyoruz.
        $('#menuActiveOverlay').remove();
        $('main #accountDetails').prepend('<section id="menuActiveOverlay"></section>');

        modifyULlevel2(sender); // ilgili UL.level2 subMenu nun stil ozelliklerini ve konumunu duzenle

        setTimeout(function () {
            $('header nav .innerWrapper').addClass('activeMenu');
            $('#menuActiveOverlay').addClass('fullActive');

            $(sender).parent().find('ul.level2').css({ // ilgili UL.level2 subMenu yu aktif alana cekiyoruz
                transform: 'translate3d(100%,0,0)',
                '-webkit-transform': 'translate3d(100%,0,0)',
                '-moz-transform': 'translate3d(100%,0,0)',
                '-ms-transform': 'translate3d(100%,0,0)',
                '-o-transform': 'translate3d(100%,0,0)'
            }).addClass('fullActive');
        }, 1);

        setTimeout(function () {
            isAccountSubMenuCurrAnimated = false;
        }, 600);
    }
}
// //


// // Mevcutta acik olan alt-menuyu kapatmak icin gereken fonksiyon
function closeAccountSubMenu() {
    $('aside .aMenuItem').removeClass('fullActive');
    $('aside .aMenuItem').find('img.white').removeClass('fullActive');

    if (!isTabletPortrait) { // smartphone konumu ise
        $('#menuActiveOverlay').removeClass('fullActive');
        $('#accountDetails .divDetail').removeClass('fullActive');
        $('footer').removeClass('fullActive');

        // Degerleri kapanistan sonra resetle
        setTimeout(function () {
            $('aside ul.level2.fullActive').removeClass('fullActive');

            isAccountSubMenuActive = false;
            isAccountSubMenuCurrAnimated = false;
            currActiveAccountSubMenu = null;
        }, 500);
    }
    else { // tablet dikey konum ise
        var senderSubMenuUL = $('aside ul.level2.fullActive');

        // aktif senderSubMenuUL menusunun, accountSubMenuSwitch fonksiyonu ile aktif oldugunu sapta. 
        // Bunun icin, accountSubMenuSwitch fonksiyonunda ozellikle eklenen 'switch' class ina bak
        var isSubMenuSwitched = $(senderSubMenuUL).hasClass('switched');

        // eger accountSubMenuSwitch fonksiyonu ile menu switch edilmemisse yani kullanici sadece bir menuyu acmis ve
        // baska bir menuye switch etmemis ise, isSubMenuSwitched false olacaktir
        if (!isSubMenuSwitched) {
            $(senderSubMenuUL).css({ // ilgili UL.level2 subMenu yu ekrandan disari cikartiyoruz
                transform: 'translate3d(0,0,0)',
                '-webkit-transform': 'translate3d(0,0,0)',
                '-moz-transform': 'translate3d(0,0,0)',
                '-ms-transform': 'translate3d(0,0,0)',
                '-o-transform': 'translate3d(0,0,0)'
            });

            // kapanistan sonra, acilista eklenen stil ozelliklerini kaldir
            setTimeout(function () {
                $(senderSubMenuUL).removeAttr('style');
            }, 510);
        }
        else // kullanici menuler arasinda switch etmis ise
        {
            $(senderSubMenuUL).css({ // ilgili UL.level2 subMenu yu ekrandan disari cikartiyoruz
                transform: 'translate3d(-100%,0,0)',
                '-webkit-transform': 'translate3d(-100%,0,0)',
                '-moz-transform': 'translate3d(-100%,0,0)',
                '-ms-transform': 'translate3d(-100%,0,0)',
                '-o-transform': 'translate3d(-100%,0,0)'
            });

            setTimeout(function () {
                $(senderSubMenuUL).removeAttr('style').removeClass('switched'); // kapanistan sonra, acilista eklenen stil ozelliklerini ve class i kaldir
            }, 510);
        }

        setTimeout(function () {
            $('header nav .innerWrapper').removeClass('activeMenu');
            $('#menuActiveOverlay').removeClass('fullActive');

            // Degerleri kapanistan sonra resetle
            setTimeout(function () {
                $('aside ul.level2.fullActive').removeClass('fullActive');
                $('#menuActiveOverlay').remove(); // menuActiveOverlay elementini disaridan main icine tasimistik, eskiye dondur
                $('#divMainWrapper').prepend('<section id="menuActiveOverlay"></section>');

                isAccountSubMenuActive = false;
                isAccountSubMenuCurrAnimated = false;
                currActiveAccountSubMenu = null;
                $('header nav .innerWrapper').remove();
            }, 500);
        }, 500);
    }
}
// //


// // Mevcutta acik olan alt-menuler arasinda gecise yarayan fonksiyon
function accountSubMenuSwitch(sender) {
    isAccountSubMenuCurrAnimated = true;
    // 1. mevcutta aktif olan menuleri pasifize et
    $('aside .aMenuItem.fullActive').removeClass('fullActive');
    $('aside .aMenuItem').find('img.white.fullActive').removeClass('fullActive');

    // 2. yeni menuyu aktif et
    $(sender).addClass('fullActive');
    $(sender).find('img.white').addClass('fullActive');

    // 3. mevcutta aktif olan subMenu UL yi degiskene ata, daha sonra gizleyecegiz
    var alreadyActiveSubMenuUL = $('aside').find('ul.level2.fullActive')

    // 4. yukaridaki (3.deki) UL nin kapsadigi LI lerin opacity degerini sifirla
    $(alreadyActiveSubMenuUL).find('li').css({ opacity: 0 });

    // 5. yukaridaki (4.deki) durumun bitmesini beklemek icin setTimeout ile devam et
    setTimeout(function () {
        // 6. yeni (gonderene bagli) UL.Level2 yi aktif kilmadan once LI lerinin opacity degerini sifirla
        $(sender).parent().find('ul.level2 li').css({ opacity: 0 });

        // 7. yeni (gonderene bagli) UL.Level2 yi aktif kil ama yukaridaki (6 daki) durumdan dolayi LI ler gorunmeyecektir
        $(sender).parent().find('ul.level2').addClass('fullActive');

        // 8. yukaridaki (3. deki) UL yi artik pasifize et
        $(alreadyActiveSubMenuUL).removeClass('fullActive');

        // *** Bu noktadan sonra 'smartphone' ve 'tablet dikey' konumuna gore ayriliyoruz.
        if (!isTabletPortrait) { // smartphone konumu ise
            // smPh9. eski LI lerin yukarida ekledigimiz (4.deki) opacity 0 degerini kaldir.
            $(alreadyActiveSubMenuUL).find('li').removeAttr('style');

            // smPh10. yukaridaki (6. daki) durumdan dolayi setTimeout ile devam et
            setTimeout(function () {
                // smPh11. yeni (gonderene bagli) UL nin LI lerinin opacity degerini normale cevir
                $(sender).parent().find('ul.level2.fullActive li').css({ opacity: 1 });

                // smPh12. yukaridaki (smPh11. deki) durumdan dolayi setTimeout ile devam et
                setTimeout(function () {
                    // smPh13. animasyonun artik bittigini belirt
                    isAccountSubMenuCurrAnimated = false;
                }, 500);
            }, 150);
        }
        else // tablet dikey konum ise
        {
            // tblt10. ilgili UL.level2 subMenu nun stil ozelliklerini ve konumunu duzenle
            modifyULlevel2(sender);

            // tblt10. yukarida (7. de) aktif kildigimiz gonderenin UL.Level2 sub menusunu aktif alana getir
            var leftValToAssign = parseInt($(sender).parents('ul.level1').width());
            $(sender).parent().find('ul.level2.fullActive').css({ left: leftValToAssign });

            // tblt11. yukarida (7. de) aktif kildigimiz gonderenin UL.Level2 sub menusunu menuler arasinda gectigimizi belirten bir class ekle.
            // Bu class kapatma fonksiyonunda kullanilmaktadir
            $(sender).parent().find('ul.level2.fullActive').addClass('switched');

            // tblt12. yukaridaki (3. deki) UL nin stil ozelliklerini kaldir. Ayrica kullanicin menuler arasinda switch ettigini gosteren 
            // class (switched) ismini de kaldir. Bu durum onu tekrar baslangic haline dondurecektir.
            $(alreadyActiveSubMenuUL).removeAttr('style').removeClass('switched');

            // tblt13. yukaridaki (tblt12. deki) UL nin LI lerinin de stil ozelliklerini kaldir
            $(alreadyActiveSubMenuUL).find('li').removeAttr('style');

            // tblt14. yeni (gonderene bagli) UL nin LI lerinin opacity degerini normale cevir
            $(sender).parent().find('ul.level2.fullActive li').css({ opacity: 1 });

            // tblt15. yukaridaki (tblt14. deki) durumdan dolayi setTimeout ile devam et
            setTimeout(function () {
                // tblt16. animasyonun artik bittigini belirt
                isAccountSubMenuCurrAnimated = false;
            }, 500);
        }
    }, 500);
}
// //


// // Ozel durumlar icin UL.Level2 nin ozelliklerinin degistirlmesi fonksiyonu
function modifyULlevel2(sender) {
    var senderParentUL = $(sender).parents('ul.level1');
    var senderParentLI = $(sender).parent();
    var senderParentLI_index = $(senderParentLI).index();
    var senderParentLI_height = $(senderParentLI).height();
    var senderSubMenuUL = $(senderParentLI).find('ul.level2');
    var senderSubMenuUL_height = $(senderParentUL).height();
    var senderSubMenuUL_topPos = -(parseInt(senderParentLI_index * (senderParentLI_height + 1))) // UL.level2 icin top baslangic degerini, UL.level 1 deki LI lerin yuksekligi ile index sayisini carparak buluyoruz. Border dan dolayi +1 ekliyorz.

    $(senderSubMenuUL).show().css({
        top: senderSubMenuUL_topPos,
        height: senderSubMenuUL_height,
    });
}
// //

// ****** END