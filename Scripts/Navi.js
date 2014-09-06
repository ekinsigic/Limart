        $(document).ready(function () {
            setupTriggers();
            panelInnerLinks('.divUserOpener');
            carryMenu();
        });
        $(window).resize(function(){
            carryMenu();
            if (isMobile && isOpenerOn) {
                $('#divOpenerFrame').css({
                    'position':'absolute',
                    'bottom': 'auto',
                    'overflow':'visible',
                    'top': -((wH-hH)-(hH)),
                    '-webkit-transform':'translate3d(0px,'+(wH-hH)+'px,0px)',
                    'transition':'all 0s'
                });
                otherItemsToSlide.css({
                    '-webkit-transform':'translate3d(0px,'+(wH-hH)+'px,0px)'
                });
            };
            if (!isMobile) {
                closeOpener()
            }
        });
        // opener globals
        var openerTimer = 700; //Opener'ın açılış ve kapanış süresi
        var isOpenerOn = false; //Opener açık mı değil mi boolean'ı
        var lastTriggerType = ""; //En son açık olan opener adı
        var isCurrentlyAnimated = false; //Opener o sırada animasyon halinde mi
        var otherItemsToSlide = $('main, footer, .filtersInHeader, .artistDetailListingFilters, #carriableFilters'); //Opener açılırken yarılma efektini verebilmek için Slide edecek diğer elementler
        var slideDistance = 8; //opener'ın kayacağı mesafe, 8 yalnızca temsili bir rakam, bu rakam opener açılacağı an kendini yeniliyor
        var animationType = 'ease-out' //opener'ın animasyon tipi, ease-in, ease-out, ease-in-out variable'ları verebiliriz.
        var scrollTopBeforeOpening = scrollTopVal; //opener açıldığında ekranın ne kadar scroll edildiği, animasyon sırasında anlık olarak değişecek
        //

        // setup opener trigger functions
        function setupTriggers() {
            setUpFrame();
            if (!isMobile) {//Desktop için 
                $('.triggerDiv').click(function () { //opener'ı açacak butonlardan birine tıkandığında..
                    var currentTriggerType = $(this).attr('data-trigger-type'); //bu butonlara atadığımız trigger-type data attribute'undan, hangi opener'ı açacağımız verisini alıyoruz
                    triggerFunctions(currentTriggerType); // bu veriyi, triggerFunctions isimli, opener'ı açacak fonksiyon hub'ının içine atıyoruz.
                });

                $('html').click(function () { // sayfanın herhangi bir yerine tıkladığımızda opener'ları kapatacağımızı belirtiyoruz
                    if (!isCurrentlyAnimated && isOpenerOn) {
                        closeOpener();
                    }
                });

                $('#divOpenerFrame').click(function (e) { //opener'larımızın kapsayıcısını yukarıda belirttiğimiz fonksiyondan muaf tutuyoruz
                    e.stopPropagation();
                });
            }
            else { //Tabletler ve telefonlar için(touchscreen)
                $('.triggerDiv').bind("tap", function (e) {
                    var currentTriggerType = $(this).attr('data-trigger-type');
                    triggerFunctions(currentTriggerType);
                });
                $('html').bind('tap',function () {
                    if (!isCurrentlyAnimated && isOpenerOn) {
                        closeOpener();
                    }
                });

                $('#divOpenerFrame').bind('tap',function (e) {
                    e.stopPropagation();
                });

                $(window).bind('touchstart',function(){
                    if (!isCurrentlyAnimated && isOpenerOn) {
                        closeOpener();
                    }
                });
                $('#divOpenerFrame, .triggerDiv').bind('touchstart',function(e){
                        e.stopPropagation();
                });
            }
        }
        //

        // functions for triggers
        function triggerFunctions(currentTriggerType) {
            if (!isCurrentlyAnimated) {
                // Firstly close opener if it is already open
                closeOpener();

                // Secondly open triggered one, but check if the same trigger is clicked
                triggerOpener(currentTriggerType);
            }
        }
        //

        // Activate opener and its content
        function triggerOpener(currentTriggerType) {
            setUpFrame();
            //Eğer açılmakta olan opener search opener'ı ise

            //Mobilde focus yapıp kullanıcıyı rahatsız etmemek, yine de dikkati input'un üzerine çekmek için
            //input üzerinde yanıp sönen, sahte bir cursor oluşturuyoruz
            if (currentTriggerType == 'search' && isMobile) {
                    $('#searchOpener .noCursor').addClass('pseudoCursor');
                    $('#searchOpener input').focus(function(){
                        //ve input'a tıklandığında bunu kaldırıyoruz
                        $('#searchOpener .noCursor').removeClass('pseudoCursor');
                    })
            }
            //Eğer cihazımız mobil cihaz değilse, input'u üzerine tıklanmış olarak açıyoruz
            else if (currentTriggerType == 'search' && !isMobile) {
                setTimeout(function(){
                    $('#searchOpener input').focus();
                },600);
            }


            if (currentTriggerType != lastTriggerType) { // not the same trigger clicked
                isCurrentlyAnimated = true;
                var currentOpenerTimer = 0;

                // calculate opener timer based on whether an opener is already opened OR this is the first opener being active
                if (isOpenerOn) {
                    closeOpener();
                    currentOpenerTimer = openerTimer // opening and closing takes double time
                }
                scrollTopBeforeOpening = $(document).scrollTop();
                var s = setTimeout(function () {




                    isOpenerOn = true;
                    lastTriggerType = currentTriggerType;

                    $('#' + currentTriggerType + 'Opener').addClass('on');


                    var slideDistance = $('#' + currentTriggerType + 'Opener').outerHeight();
                    if (slideDistance > (wH-hH)) {
                        slideDistance = (wH-hH);
                    };
                    contentScrollers();


                        // Disabling Scroll
                        if ($('#divOpenerFrame').height() == (wH-hH)) {
                            $(window).unbind('touchmove');
                        }
                        else {
                            
                            if (isMobile) {
                                $(window).bind('touchmove',function(e){
                                    e.preventDefault();
                                })
                            }
                            else {
                                $(window).bind('mousewheel', function(e){
                                    e.preventDefault();
                                })
                            }

                        }


                    $('#divOpenerFrame').css({
                     '-webkit-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-moz-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-ms-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-o-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     'transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-webkit-transition':'-webkit-transform '+(openerTimer/1300)+'s',
                     '-moz-transition':'-moz-transform '+(openerTimer/1300)+'s',
                     '-ms-transition':'-ms-transform '+(openerTimer/1300)+'s',
                     '-o-transition':'-o-transform '+(openerTimer/1300)+'s',
                     'transition':'transform '+(openerTimer/1300)+'s'
                    });

                    otherItemsToSlide.css({
                     '-webkit-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-moz-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-ms-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-o-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     'transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-webkit-transition':'-webkit-transform '+(openerTimer/1300)+'s',
                     '-moz-transition':'-moz-transform '+(openerTimer/1300)+'s',
                     '-ms-transition':'-ms-transform '+(openerTimer/1300)+'s',
                     '-o-transition':'-o-transform '+(openerTimer/1300)+'s',
                     'transition':'transform '+(openerTimer/1300)+'s'
                    });


                    var s_ = setTimeout(function () {
                        //animasyon süresi geçtikten sonra, elementin anime halinde olup olmadığını gösteren global'ımızı false'a çekiyoruz.
                        isCurrentlyAnimated = false;
                        if ($('#divOpenerFrame').height() == (wH-hH)) {//Eğer opener kapsayıcımız bütün ekranı kapatıyorsa, altındaki her şeyi display:none'a çekiyoruz
                            otherItemsToSlide.css('display','none');
                            $('#divOpenerFrame').css({
                                'max-height':'',
                                'position':'absolute',
                                'bottom': 'auto',
                                'top': -($('#divOpenerFrame').height()-hH),
                                'overflow':'visible'
                            });
                        };
                    }, openerTimer);
                }, currentOpenerTimer);
            }
        }
        //

        // Close currently active content
        function closeOpener() {
            if (isOpenerOn && !isCurrentlyAnimated) {
                isCurrentlyAnimated = true;
                if ($('#divOpenerFrame').height() >= (wH-hH)) {//Eğer opener'ımızın altındaki elementler display:none'daysa, tekrar görünür yapıyoruz
                    
                    otherItemsToSlide.css('display','block');
                    var scrollTopMiniBeforeOpening = $(window).scrollTop();
                    $('#divOpenerFrame').css({
                        'height': 'auto',
                        'position':'fixed',
                        'max-height':(wH-hH),
                        'bottom': (wH-hH),
                        'top':'auto',
                        'overflow':'hidden',
                        '-webkit-overflow-scrolling': 'touch'
                    });
                    $('#divOpenerFrame').scrollTop(scrollTopMiniBeforeOpening)
                }
                else {
                    $('.divOpenerBodyOverlay').remove();
                }

                $(document).scrollTop(scrollTopBeforeOpening); //eğer opener açıkken site display:none'a çekilmişse, açıldığında başa dönecektir
                                                               //bu yüzden opener'ı kapatırken scroll'u eski haline döndürüyoruz.
                // kayma animasyonları
                    $('#divOpenerFrame').css({
                         '-webkit-transform':'translate3d(0px,0px,0px)',
                         '-moz-transform':'translate3d(0px,0px,0px)',
                         '-ms-transform':'translate3d(0px,0px,0px)',
                         '-o-transform':'translate3d(0px,0px,0px)',
                         'transform':'translate3d(0px,0px,0px)',
                         '-webkit-transition':'-webkit-transform '+(openerTimer/1300)+'s',
                         '-moz-transition':'-moz-transform '+(openerTimer/1300)+'s',
                         '-ms-transition':'-ms-transform '+(openerTimer/1300)+'s',
                         '-o-transition':'-o-transform '+(openerTimer/1300)+'s',
                         'transition':'transform '+(openerTimer/1300)+'s'
                        });
                    otherItemsToSlide.css({
                         '-webkit-transform':'translate3d(0px,0px,0px)',
                         '-moz-transform':'translate3d(0px,0px,0px)',
                         '-ms-transform':'translate3d(0px,0px,0px)',
                         '-o-transform':'translate3d(0px,0px,0px)',
                         'transform':'translate3d(0px,0px,0px)',
                         '-webkit-transition':'-webkit-transform '+(openerTimer/1300)+'s',
                         '-moz-transition':'-moz-transform '+(openerTimer/1300)+'s',
                         '-ms-transition':'-ms-transform '+(openerTimer/1300)+'s',
                         '-o-transition':'-o-transform '+(openerTimer/1300)+'s',
                         'transition':'transform '+(openerTimer/1300)+'s'
                    });
                //

                var s = setTimeout(function () {
                    isOpenerOn = false;
                    lastTriggerType = "";
                    isCurrentlyAnimated = false;
                    // enable scroll back
                    if (isMobile) {
                        $(window).unbind('touchmove');
                    }
                    else {
                        $(window).unbind('mousewheel');
                    }
                    // after it is closed hide contents
                    $('#divOpenerFrame .sixtythreeOpener').removeClass('on');
                }, openerTimer);
            }
        }
        //

    function panelInnerLinks() {
        $('.panelInnerLink').click(function(){
            var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
            var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
            $(panelNow).removeClass('activeInnerOpener');
            setTimeout(function(){
            $(panelNow).removeClass('userOpenerInnerOpenerVisible');
            $(panelToGo).addClass('userOpenerInnerOpenerVisible');
            $('.divUserOpener').scrollTop(0);
                setTimeout(function(){
                    $(panelToGo).addClass('activeInnerOpener');
                },10)
            },500);
        });
    }


    function carryMenu() {
        if ($('header .divContent').width() < 671 ) {//this if query is not about header, it is rather about the media query state of website
            $('nav #menuOpener').appendTo('#divOpenerFrame');
        }
        else {
            $('#divOpenerFrame #menuOpener').appendTo('nav');
        }
    }

    function panelInnerLinks(elementName) {
            var innerLink = $(document).find('[data-innerOpenerAnchor]')

            innerLink.click(function(e){
                e.preventDefault();
                var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
                var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
                $(panelNow).removeClass('activeInnerOpener');
                setTimeout(function(){
                $(panelNow).removeClass('userOpenerInnerOpenerVisible');
                $(panelToGo).addClass('userOpenerInnerOpenerVisible');
                $(elementName).scrollTop(0);
                    setTimeout(function(){
                        $(panelToGo).addClass('activeInnerOpener');
                    },10)
                },500);
            });
    }

    function contentScrollers() {
        $(".basketDetailsScroller").mCustomScrollbar();
        if ( slideDistance == (wH-$('header').height() )) {
            //$('#divOpenerFrame').mCustomScrollbar();
            console.log(slideDistance);
        }
    }

    function setUpFrame() {
        if (isMobile) {};
            $('#divOpenerFrame').css({
                'max-height':(wH-hH),
                'bottom': (wH - hH),
                'overflow':'auto',
                'overflow-y': 'visible',
                '-webkit-overflow-scrolling': 'touch'
            });
            //$('#divOpenerFrame').mCustomScrollbar();


            // $('#divOpenerFrame').bind('touchmove',function(e){
            //     e.preventDefault();
            // })
            $('#divOpenerFrame .mCSB_container').css('margin-right','0px');
            $('#divOpenerFrame .mCSB_scrollTools').css('opacity','0');
    }