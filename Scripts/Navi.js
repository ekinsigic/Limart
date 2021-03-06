        $(window).on("orientationchange", function () {
            closeOpener();
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
        $(document).ready(function () {
            setupTriggers();
            carryMenu();

            if ( $('#userOpener').length > 0 && $('#userOpener').css('display') != 'none' ) {
                loginActions();
            }
        });
        // opener globals
        var openerTimer = 700; //Opener'ın açılış ve kapanış süresi
        var isOpenerOn = false; //Opener açık mı değil mi boolean'i
        var lastTriggerType = ""; //En son açık olan opener adı
        var isCurrentlyAnimated = false; //Opener o sırada animasyon halinde mi
        var otherItemsToSlide = $('main, footer, .filtersInHeader, .artistDetailListingFilters, #carriableFilters, #aMainAccountMenuOpener'); //Opener açılırken yarılma efektini verebilmek için Slide edecek diğer elementler
        var slideDistance = 8; //opener'ın kayacağı mesafe, 8 yalnızca temsili bir rakam, bu rakam opener açılacağı an kendini yeniliyor
        var animationType = 'ease-out' //opener'ın animasyon tipi, ease-in, ease-out, ease-in-out variable'ları verebiliriz.
        var scrollTopBeforeOpening = scrollTopVal; //opener açıldığında ekranın ne kadar scroll edildiği, animasyon sırasında anlık olarak değişecek
        //

        var userIsLoggedIn = false;

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
                        //closeOpener();
                        $(window).bind('touchmove',function(e){
                            e.preventDefault();
                        })
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


                        // Disabling Scroll
                        if ($('#divOpenerFrame').height() == (wH-hH)) {
                            //$(window).unbind('touchmove');
                        }
                        else {
                            
                            if (isMobile) {
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
                     '-webkit-transition':'-webkit-transform '+(openerTimer/1000)+'s',
                     '-moz-transition':'-moz-transform '+(openerTimer/1000)+'s',
                     '-ms-transition':'-ms-transform '+(openerTimer/1000)+'s',
                     '-o-transition':'-o-transform '+(openerTimer/1000)+'s',
                     'transition':'transform '+(openerTimer/1000)+'s'
                    });

                    otherItemsToSlide.css({
                     '-webkit-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-moz-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-ms-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-o-transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     'transform':'translate3d(0px,'+slideDistance+'px,0px)',
                     '-webkit-transition':'-webkit-transform '+(openerTimer/1000)+'s',
                     '-moz-transition':'-moz-transform '+(openerTimer/1000)+'s',
                     '-ms-transition':'-ms-transform '+(openerTimer/1000)+'s',
                     '-o-transition':'-o-transform '+(openerTimer/1000)+'s',
                     'transition':'transform '+(openerTimer/1000)+'s'
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
                        }
                        else {
                            $('body').append('<div class="divOpenerBodyOverlay" style="position:fixed; width:100%; height:'+((wH-hH)-$('#divOpenerFrame').height())+'px; top:'+(hH+$('#divOpenerFrame').height())+'px; background-color:rgba(0,0,0,0); z-index:999999;">');
                        }
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
                         '-webkit-transition':'-webkit-transform '+(openerTimer/1000)+'s',
                         '-moz-transition':'-moz-transform '+(openerTimer/1000)+'s',
                         '-ms-transition':'-ms-transform '+(openerTimer/1000)+'s',
                         '-o-transition':'-o-transform '+(openerTimer/1000)+'s',
                         'transition':'transform '+(openerTimer/1000)+'s'
                        });
                    otherItemsToSlide.css({
                         '-webkit-transform':'translate3d(0px,0px,0px)',
                         '-moz-transform':'translate3d(0px,0px,0px)',
                         '-ms-transform':'translate3d(0px,0px,0px)',
                         '-o-transform':'translate3d(0px,0px,0px)',
                         'transform':'translate3d(0px,0px,0px)',
                         '-webkit-transition':'-webkit-transform '+(openerTimer/1000)+'s',
                         '-moz-transition':'-moz-transform '+(openerTimer/1000)+'s',
                         '-ms-transition':'-ms-transform '+(openerTimer/1000)+'s',
                         '-o-transition':'-o-transform '+(openerTimer/1000)+'s',
                         'transition':'transform '+(openerTimer/1000)+'s'
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
                    $('#divOpenerFrame .SSTOpener').removeClass('on');
                }, openerTimer);
            }
        }
        //


    function carryMenu() {
        if ($('header .divContent').width() < 671 ) {//this if query is not about header, it is rather about the media query state of website
            $('nav #menuOpener').appendTo('#divOpenerFrame');
        }
        else {
            $('#divOpenerFrame #menuOpener').appendTo('nav');
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


            // $('#divOpenerFrame').bind('touchmove',function(e){
            //     e.preventDefault();
            // })
            $('#divOpenerFrame .mCSB_container').css('margin-right','0px');
            $('#divOpenerFrame .mCSB_scrollTools').css('opacity','0');
    }


    function loginActions() {
        $('nav #userTrigger a.goToLogin').addClass('dont');
        $('.divUserOpener').css('display','none');
        enableDisableUserButton();
        $('.divUserIcon.triggerDiv a').click(function(e){
            e.stopPropagation();
        });
        $('.divUserOpener').css('display','');
        carryUserNav();
        $(window).resize(function(){
            carryUserNav();
        });

        function carryUserNav() {
            if ($('nav #menuOpener').length > 0) {
                $('header').addClass('withUserOpener');
                $('#divOpenerFrame .divUserOpener').prependTo('header');
                $('.divUserIcon.triggerDiv a').click(function(e){
                    e.stopPropagation();
                })
                $('.divUserIcon.triggerDiv').css('display','none');
                //
                $('.divUserOpener').css('display','block');
            }
            else {
                $('header').removeClass('withUserOpener');
                $('header .divUserOpener').prependTo('#divOpenerFrame');
                $('.divUserIcon.triggerDiv').css('display','block');
                //
                $('.divUserOpener').css('display','');
            }
        }

        function enableDisableUserButton() {
            $('.divUserIcon.triggerDiv a').click(function(e){
                e.preventDefault();
                if ($('nav #menuOpener').length > 0) {
                    $('.divUserIcon.triggerDiv').css('display','block;');
                };
            });
        }
    }