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
var openPanel = null;
$(document).ready(function () {
    checkDevice();
    scrollEvents();
    setGlobals();
    smartphoneLandscape();
    miscImgLoader();
//    aggregateHeader();

    // PPI = getPPI();
    // console.log(PPI);

    //özellikle iphone4 için menüyü scroll edilebilir kıldık.
    if(deviceIs == 'smartphone' && sH <= 500){
        $('nav .divNav').css({ overflow: 'auto' });
        $('nav .divNav .divMenuContent').css({height:230});
    }

});

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
    // closeMenu();
    // closeSearch();
    // closeBasket();
    // closeUser();

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



// function popupSettings() {
//     if (!isMobile) {
//         $(document).keydown(function (e) {
//             if (e.keyCode == 27) {
//                 closeSearch();
//                 closeMenu();
//             }
//         });

//         $(window).click(function () {
//             closeSearch();
//             closeMenu();
//         });

//         $('#search').click(function (e) {
//             e.stopPropagation();
//         });
//     }
//     else {
//         $(window).bind('touchstart',function () {
//             closeSearch();
//         });

//         $('#search').bind('touchstart',function (e) {
//             e.stopPropagation();
//         });

//         $(window).bind('touchend',function () {
//             closeSearch();
//         });

//         $('#search').bind('touchend',function (e) {
//             e.stopPropagation();
//         });
//     }
// }





/* mobilde yatayda gelecek ekran */
function smartphoneLandscape() {
    if (deviceIs == 'smartphone' && isLandscape) {
        $('#smartphoneLandscape').show();
        $('.divPreloader').addClass('loading');
    }
    else if(deviceIs == 'smartphone' && isPortrait) {
        $('#smartphoneLandscape').hide();
        $('.divPreloader').removeClass('loading');
    }
}

// // AGGREGATE HEADER FUNCTIONALITIES
    //     function aggregateHeader(){
    //         openCloseMenu();
    //         openOrCloseSearch();
    //         openCloseBasket();
    //         openCloseUser()
    //     }
// //

// // MENU OPEN CLOSE FUNCTION

    // var isMenuOpen = false;//Menünün açık olup olmadığını kontrol etmek için, sayfa başlangıcında kapalı varsayıyoruz.
    // var isScroll = false;//kullanıcının scroll amaçlı dokunup dokunmadığını tespit etmek için dokunma işleminin başında scroll amaçlı dokunmadığını varsayıyoruz.

    // function openCloseMenu() {
    //     if (isMobile) {
    //         $('nav .imgNav').bind('touchstart', function (e) {//imgNav class'lý div'e dokunma iþlemi baþladýðýnda..
    //             isScroll = false;
    //             e.stopPropagation();//sayfanýn gerisine eklenen window.touchstart iþleminden muaf tutuyoruz.

    //             $(this).bind('touchmove', function () {//kullanýcýnýn ekrana dokunduðu parmaðýný hareket ettirmesi durumunda sayfaya scroll amaçlý dokunduðunu deklare ediyoruz.
    //                 isScroll = true;
    //             });

    //             $(this).one('touchend', function (e) {//kullanýcýnýn parmaðýný kaldýrmasý durumunda..
    //                 if (isSearchActive || isBasketOpen || isUserOpen || isScroll) {
                        
    //                     closeBasket();
    //                     closeSearch();
    //                     closeUser();
    //                     setTimeout(function(){
    //                         openMenu();
    //                     },500);

    //                 }
    //                 else {
    //                     openMenu();
    //                 }
    //             });
    //         });

    //         $(window).bind('touchstart', function () {//kullanýcýnýn sayfanýn herhangi bir yerine týklamasý durumunda menünün kapanmasýný saðlýyoruz.
    //             closeMenu();
    //             $(this).bind('touchend');
    //         });

    //         $('header nav .divNav').bind('touchstart', function (e) {//yukarýda sayfanýn herhangi bir yerine basýldýðýnda menüyü kapatan fonksiyondan, menünün kendisini muaf tutuyoruz.
    //             e.stopPropagation();
    //             $('header nav .divNav').bind('touchend', function (e) {
    //                 e.stopPropagation();
    //             });
    //         });
    //     }
    //     else {
    //         $('header nav .imgNav').bind('click', function (e) {
    //                 if (isSearchActive || isBasketOpen || isUserOpen) {
                        
    //                 closeBasket();
    //                 closeSearch();
    //                 closeUser();
    //                 setTimeout(function(){
    //                     openMenu();
    //                 },501)
    //             }
    //             else {
    //                 openMenu();
    //                 e.stopPropagation();
    //             }
    //         });

    //         $(window).bind('click', function () {
    //             closeMenu();
    //         });

    //         $('.divNav').bind('click', function (e) {
    //             e.stopPropagation();
    //         });
    //     }
    // }
    // function closeMenu() {
    //     if (isMobile) {
    //         $('nav .divNav, main, footer, .filtersInHeader, .listingFilters').removeClass('menuOn');//verdiðimiz, elementleri aþaðýda gösteren class'ý geri alýyoruz.
    //         setTimeout(function () {//setTimeout kurarak kullanýcýyý animasyonu beklemek zorunda býrakýyoruz
    //             //tespit deðiþkenlerini eski haline getirip scroll'u tekrar aktif hale getiriyoruz.
    //             isMenuOpen = false;
    //             isScroll = false;
    //             $(window).unbind("touchmove");
    //         }, 500);
    //     }
    //     else {
    //         $('.divNav, main, footer, .filtersInHeader, .listingFilters').removeClass('menuOn');
    //         setTimeout(function () {
    //             isMenuOpen = false;
    //             isScroll = false;
    //         }, 500);
    //     }
    // }
    // function openMenu() {
    //     if (isMobile) {
    //         if (!isMenuOpen && !isScroll) {//eðer menü kapalýysa, ve eylem scroll amaçlý deðilse..
    //             isMenuOpen = true;//deðiþkenleri eski haline getiriyoruz
    //             isScroll = false;

    //             $('nav .divNav, main, footer, .filtersInHeader, .listingFilters').addClass('menuOn');//aþaðý doðru hareket etmesini istediðimiz elementlere aþaðý doðru hareket etmiþ hallerini içeren class'ý ekliyoruz
    //             e.stopPropagation();//sayfanýn gerisine eklenen window.touchend iþleminden muaf tutuyoruz.
    //             $(window).bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
    //                 e.preventDefault();
    //             });
    //         }
    //         else if (isMenuOpen && !isScroll) {//eðer menü açýktýysa, ve eylem scroll amaçlý deðilse..
    //             closeMenu();
    //         }
    //     }
    //     else {
    //         if (!isMenuOpen) {
    //             //çok saçma bir bug yapıyordu, search kapatma fonksiyonuyla kesişip ismenuopen'ı tekrar false a çekiyordu, böyle çözdüm
    //             setTimeout(function(){
    //                 isMenuOpen = true
    //             },100);
    //             $('.divNav, main, footer, .filtersInHeader, .listingFilters').addClass('menuOn');
    //         }
    //         else if (isMenuOpen) {
    //             closeMenu();
    //         }
    //     }
    // }

    // // SEARCH OPEN CLOSE FUNCTION

    // var isSearchActive = false;
    // var isScroll = false;

    // function openOrCloseSearch() {
    //     if (!isMobile) {
    //         $('nav .divSearchIcon').bind('click', function (e) {
    //             e.stopPropagation();
    //             if (isMenuOpen || isBasketOpen || isUserOpen) {
                    
    //                 closeBasket();
    //                 closeMenu();
    //                 closeUser();
    //                 setTimeout(function(){
    //                     openSearch();
    //                 },300)
    //             }
    //             else {
    //                 openSearch();
    //             }
    //         });
    //     }
    //     else {
    //         $('nav .divSearchIcon').bind('touchstart', function (e) {
    //             e.stopPropagation();
    //             isScroll = false
    //             $('nav .divSearchIcon').bind('touchmove', function(){
    //                 isScroll = true
    //             });
    //             $('nav .divSearchIcon').one('touchend',function (e) {
    //                 if (isMenuOpen || isBasketOpen || isUserOpen) {
                        
    //                     closeBasket();
    //                     closeMenu();
    //                     closeUser();
    //                     setTimeout(function(){
    //                         e.stopPropagation();
    //                         isScroll = false
    //                         if (!isScroll) {
    //                         if (isMenuOpen || isBasketOpen || isUserOpen) {
                                    
    //                                 closeBasket();
    //                                 closeMenu();
    //                                 closeUser();
    //                                 setTimeout(function(){
    //                                     if (!isSearchActive) {
    //                                         isSearchActive = true;
    //                                         $('#search, main, footer, .filtersInHeader, .listingFilters').addClass('topSearch');
    //                                             if (!isMobile) {
    //                                                 $('#search input').focus();
    //                                             }
    //                                         else {
    //                                             $('.divSearchContent').append('<div class="pseudoCursor">');
    //                                             $(document).keydown(function (e) {
    //                                                     $('.pseudoCursor').remove();
    //                                             });
    //                                             $('input').on('focus', function(){
    //                                                     $('.pseudoCursor').remove();
    //                                             });
    //                                         }
    //                                         $(window).bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
    //                                             e.preventDefault();
    //                                         });
    //                                     }
    //                                     else {
    //                                         closeSearch();
    //                                     }
    //                                 },500)
    //                             }
    //                             else {
    //                                 if (!isSearchActive) {
    //                                     e.stopPropagation();
    //                                     isSearchActive = true;
    //                                     $('#search, main, footer, .filtersInHeader, .listingFilters').addClass('topSearch');
    //                                         if (!isMobile) {
    //                                             $('#search input').focus();
    //                                         }
    //                                         else {
    //                                             $('.divSearchContent').append('<div class="pseudoCursor">');
    //                                             $(document).keydown(function (e) {
    //                                                     $('.pseudoCursor').remove();
    //                                             });
    //                                             $('input').on('focus', function(){
    //                                                     $('.pseudoCursor').remove();
    //                                             });
    //                                         }
    //                                 }
    //                                 else {
    //                                     closeSearch();
    //                                 } 
    //                             }
    //                         }
    //                     },500)
    //                 }
    //                 else {
    //                         e.stopPropagation();
    //                         isScroll = false
    //                         if (!isScroll) {
    //                         if (isMenuOpen || isBasketOpen || isUserOpen) {
                                    
    //                                 closeBasket();
    //                                 closeMenu();
    //                                 closeUser();
    //                                 setTimeout(function(){
    //                                 },300)
    //                             }
    //                             else {
    //                                 openSearch();
    //                             }
    //                         }
                        
    //                 }
    //             })
    //         });
    //     }
    // }
    // function closeSearch() {
    //     if (isSearchActive) {
    //         $('#search, main, footer, .filtersInHeader, .listingFilters').removeClass('topSearch');
    //         $('.pseudoCursor').remove();
    //         $('#textarea').blur();
    //         setTimeout(function () {
    //             isSearchActive = false;
    //             $(window).unbind("touchmove");
    //         }, 500);
    //     }
    // }
    // function openSearch() {
    //     if (!isSearchActive) {
    //         isSearchActive = true;
    //         $('#search, main, footer, .filtersInHeader, .listingFilters').addClass('topSearch');
    //             if (!isMobile) {
    //                 $('#search input').focus();
    //             }
    //         else {
    //             $('.divSearchContent').append('<div class="pseudoCursor">');
    //             $(document).keydown(function (e) {
    //                     $('.pseudoCursor').remove();
    //             });
    //             $('input').on('focus', function(){
    //                     $('.pseudoCursor').remove();
    //             });
    //         }
    //         $(window).bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
    //             e.preventDefault();
    //         });
    //     }
    //     else {
    //         closeSearch();
    //     }
    // }


    // // BASKET OPEN CLOSE FUNCTION

    // var isBasketOpen = false;//Menünün açık olup olmadığını kontrol etmek için, sayfa başlangıcında kapalı varsayıyoruz.
    // var isScroll = false;//kullanıcının scroll amaçlı dokunup dokunmadığını tespit etmek için dokunma işleminin başında scroll amaçlı dokunmadığını varsayıyoruz.

    // function openCloseBasket() {
    //     if (isMobile) {
    //         $('#basketTrigger').bind('touchstart', function (e) {//imgNav class'lý div'e dokunma iþlemi baþladýðýnda..
    //             isScroll = false;
    //             e.stopPropagation();//sayfanýn gerisine eklenen window.touchstart iþleminden muaf tutuyoruz.

    //             $(this).bind('touchmove', function () {//kullanýcýnýn ekrana dokunduðu parmaðýný hareket ettirmesi durumunda sayfaya scroll amaçlý dokunduðunu deklare ediyoruz.
    //                 isScroll = true;
    //             });

    //             $(this).one('touchend', function (e) {//kullanýcýnýn parmaðýný kaldýrmasý durumunda..
    //                 if (isSearchActive || isMenuOpen || isUserOpen || isScroll) {
                        
    //                     closeMenu();
    //                     closeSearch();
    //                     closeUser();
    //                     setTimeout(function(){
    //                         openBasket();
    //                     },500);

    //                 }
    //                 else {
    //                     openBasket();
    //                 }
    //             });
    //         });

    //         $(window).bind('touchstart', function () {//kullanýcýnýn sayfanýn herhangi bir yerine týklamasý durumunda menünün kapanmasýný saðlýyoruz.
    //             closeBasket();
    //             $(this).bind('touchend');
    //         });

    //         $('#basketPanel').bind('touchstart', function (e) {//yukarýda sayfanýn herhangi bir yerine basýldýðýnda menüyü kapatan fonksiyondan, menünün kendisini muaf tutuyoruz.
    //             e.stopPropagation();
    //             $('#basketPanel').bind('touchend', function (e) {
    //                 e.stopPropagation();
    //             });
    //         });
    //     }
    //     else {
    //         $('#basketTrigger').bind('click', function (e) {
    //                 if (isSearchActive || isMenuOpen || isUserOpen) {
                        
    //                 closeMenu();
    //                 closeSearch();
    //                 closeUser();
    //                 setTimeout(function(){
    //                     openBasket();
    //                 },501)
    //             }
    //             else {
    //                 openBasket();
    //                 e.stopPropagation();
    //             }
    //         });

    //         $(window).bind('click', function () {
    //             closeBasket();
    //         });

    //         $('#basketPanel').bind('click', function (e) {
    //             e.stopPropagation();
    //         });
    //     }
    // }
    // function closeBasket() {
    //     if (isMobile) {
    //         $('#basketPanel, main, footer, .filtersInHeader, .listingFilters').removeClass('basketOn');//verdiðimiz, elementleri aþaðýda gösteren class'ý geri alýyoruz.
    //         setTimeout(function () {//setTimeout kurarak kullanýcýyý animasyonu beklemek zorunda býrakýyoruz
    //             //tespit deðiþkenlerini eski haline getirip scroll'u tekrar aktif hale getiriyoruz.
    //             isBasketOpen = false;
    //             isScroll = false;
    //             $(window).unbind("touchmove");
    //         }, 500);
    //     }
    //     else {
    //         $('#basketPanel, main, footer, .filtersInHeader, .listingFilters').removeClass('basketOn');
    //         setTimeout(function () {
    //             isBasketOpen = false;
    //             isScroll = false;
    //         }, 500);
    //     }
    // }
    // function openBasket() {
    //     if (isMobile) {
    //         if (!isBasketOpen && !isScroll) {//eðer menü kapalýysa, ve eylem scroll amaçlý deðilse..
    //             isBasketOpen = true;//deðiþkenleri eski haline getiriyoruz
    //             isScroll = false;

    //             $('#basketPanel, main, footer, .filtersInHeader, .listingFilters').addClass('basketOn');//aþaðý doðru hareket etmesini istediðimiz elementlere aþaðý doðru hareket etmiþ hallerini içeren class'ý ekliyoruz
    //             e.stopPropagation();//sayfanýn gerisine eklenen window.touchend iþleminden muaf tutuyoruz.
    //             $(window).bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
    //                 e.preventDefault();
    //             });
    //         }
    //         else if (isBasketOpen && !isScroll) {//eðer menü açýktýysa, ve eylem scroll amaçlý deðilse..
    //             closeBasket();
    //         }
    //     }
    //     else {
    //         if (!isBasketOpen) {
    //             //çok saçma bir bug yapıyordu, search kapatma fonksiyonuyla kesişip ismenuopen'ı tekrar false a çekiyordu, böyle çözdüm
    //             setTimeout(function(){
    //                 isBasketOpen = true
    //             },100);
    //             $('#basketPanel, main, footer, .filtersInHeader, .listingFilters').addClass('basketOn');
    //         }
    //         else if (isBasketOpen) {
    //             closeBasket();
    //         }
    //     }
    // }


    // // USER OPEN CLOSE FUNCTION

    // var isUserOpen = false;//Menünün açık olup olmadığını kontrol etmek için, sayfa başlangıcında kapalı varsayıyoruz.
    // var isScroll = false;//kullanıcının scroll amaçlı dokunup dokunmadığını tespit etmek için dokunma işleminin başında scroll amaçlı dokunmadığını varsayıyoruz.

    // function openCloseUser() {
    //     if (isMobile) {
    //         $('#userTrigger').bind('touchstart', function (e) {//imgNav class'lý div'e dokunma iþlemi baþladýðýnda..
    //             isScroll = false;
    //             e.stopPropagation();//sayfanýn gerisine eklenen window.touchstart iþleminden muaf tutuyoruz.

    //             $(this).bind('touchmove', function () {//kullanýcýnýn ekrana dokunduðu parmaðýný hareket ettirmesi durumunda sayfaya scroll amaçlý dokunduðunu deklare ediyoruz.
    //                 isScroll = true;
    //             });

    //             $(this).one('touchend', function (e) {//kullanýcýnýn parmaðýný kaldýrmasý durumunda..
    //                 if (isSearchActive || isMenuOpen || isBasketOpen || isScroll) {
                        
    //                     closeMenu();
    //                     closeSearch();
    //                     closeBasket();
    //                     setTimeout(function(){
    //                         openUser();
    //                     },500);

    //                 }
    //                 else {
    //                     openUser();
    //                 }
    //             });
    //         });

    //         $(window).bind('touchstart', function () {//kullanýcýnýn sayfanýn herhangi bir yerine týklamasý durumunda menünün kapanmasýný saðlýyoruz.
    //             closeUser();
    //             $(this).bind('touchend');
    //         });

    //         $('#userPanel').bind('touchstart', function (e) {//yukarýda sayfanýn herhangi bir yerine basýldýðýnda menüyü kapatan fonksiyondan, menünün kendisini muaf tutuyoruz.
    //             e.stopPropagation();
    //             $('#userPanel').bind('touchend', function (e) {
    //                 e.stopPropagation();
    //             });
    //         });
    //     }
    //     else {
    //         $('#userTrigger').bind('click', function (e) {
    //                 if (isSearchActive || isMenuOpen || isBasketOpen) {
                        
    //                 closeMenu();
    //                 closeSearch();
    //                 closeBasket();
    //                 setTimeout(function(){
    //                     openUser();
    //                 },501)
    //             }
    //             else {
    //                 openUser();
    //                 e.stopPropagation();
    //             }
    //         });

    //         $(window).bind('click', function () {
    //             closeUser();
    //         });

    //         $('#userPanel').bind('click', function (e) {
    //             e.stopPropagation();
    //         });
    //     }
    // }
    // function closeUser() {
    //     if (isMobile) {
    //         $('#userPanel, main, footer, .filtersInHeader, .listingFilters').removeClass('userOn');//verdiðimiz, elementleri aþaðýda gösteren class'ý geri alýyoruz.
    //         setTimeout(function () {//setTimeout kurarak kullanýcýyý animasyonu beklemek zorunda býrakýyoruz
    //             //tespit deðiþkenlerini eski haline getirip scroll'u tekrar aktif hale getiriyoruz.
    //             isUserOpen = false;
    //             isScroll = false;
    //             $(window).unbind("touchmove");
    //         }, 500);
    //     }
    //     else {
    //         $('#userPanel, main, footer, .filtersInHeader, .listingFilters').removeClass('userOn');
    //         setTimeout(function () {
    //             isUserOpen = false;
    //             isScroll = false;
    //         }, 500);
    //     }
    // }
    // function openUser() {
    //     if (isMobile) {
    //         if (!isUserOpen && !isScroll) {//eðer menü kapalýysa, ve eylem scroll amaçlý deðilse..
    //             isUserOpen = true;//deðiþkenleri eski haline getiriyoruz
    //             isScroll = false;

    //             $('#userPanel, main, footer, .filtersInHeader, .listingFilters').addClass('userOn');//aþaðý doðru hareket etmesini istediðimiz elementlere aþaðý doðru hareket etmiþ hallerini içeren class'ý ekliyoruz
    //             e.stopPropagation();//sayfanýn gerisine eklenen window.touchend iþleminden muaf tutuyoruz.
    //             $(window).bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
    //                 e.preventDefault();
    //             });
    //         }
    //         else if (isUserOpen && !isScroll) {//eðer menü açýktýysa, ve eylem scroll amaçlý deðilse..
    //             closeUser();
    //         }
    //     }
    //     else {
    //         if (!isUserOpen) {
    //             //çok saçma bir bug yapıyordu, search kapatma fonksiyonuyla kesişip ismenuopen'ı tekrar false a çekiyordu, böyle çözdüm
    //             setTimeout(function(){
    //                 isUserOpen = true
    //             },100);
    //             $('#userPanel, main, footer, .filtersInHeader, .listingFilters').addClass('userOn');
    //         }
    //         else if (isUserOpen) {
    //             closeUser();
    //         }
    //     }
    // }

    // function aggregateHeaderClose() {
    // }










// misc imajlarını sayfa açılışında retina olup olmadığına göre yükleme fonksiyonu
function miscImgLoader() {
    $('body').find('img[data-sixtyThree]').each(function(){
        var miscIdentifier = $(this).attr('data-sixtyThree');
        if (window.devicePixelRatio >= 1.5) {
            if ($(this).hasClass('white')) {
                $(this).attr('src','images/@2x/'+miscIdentifier+'-white@2x.png');
            }
            else {
                $(this).attr('src','images/@2x/'+miscIdentifier+'@2x.png');
            }
        }
        else {
            if ($(this).hasClass('white')) {
                $(this).attr('src','images/'+miscIdentifier+'-white.png');
            }
            else {
                $(this).attr('src','images/'+miscIdentifier+'.png');
            }
        }
    });
}