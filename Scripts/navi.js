

        $(document).ready(function () {
            setupTriggers();
			panelInnerLinks();
			carryMenu();
        });
        $(window).resize(function(){
			carryMenu();
        });


        // opener globals
        var openerTimer = 700;
        var isOpenerOn = false;
        var lastTriggerType = "";
        var isCurrentlyAnimated = false;
        var otherItemsToSlide = $('main, footer, .filtersInHeader, .artistDetailListingFilters, #carriableFilters');
        var slideDistance = 8;
        var animationType = 'ease-out'
        var scrollTopBeforeOpening = scrollTopVal;
        //

        // setup opener trigger functions
        function setupTriggers() {
            if (!isMobile) {
                $('.triggerDiv').click(function () {
                    var currentTriggerType = $(this).attr('data-trigger-type');
                    triggerFunctions(currentTriggerType);
                });

                $('html').click(function () {
                    if (!isCurrentlyAnimated && isOpenerOn) {
                        closeOpener();
                    }
                });

                $('#divOpenerFrame').click(function (e) {
                    e.stopPropagation();
                });
            }
            else {
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


            $('.sixtythreeOpener').each(function(){
                $(this).css('max-height',(wH - $('header').outerHeight()));
            });
            $(this).mCustomScrollbar();
            $('.sixtythreeOpener').each(function(){
                $(this).css('overflow','auto');
            });
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

            if (currentTriggerType == 'search' && isMobile) {
                    $('#searchOpener .noCursor').addClass('pseudoCursor');
                    $('#searchOpener input').focus(function(){
                        $('#searchOpener .noCursor').removeClass('pseudoCursor');
                    })
            }
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
                    currentOpenerTimer = openerTimer // opening and closing takes double time
                }
                scrollTopBeforeOpening = $(document).scrollTop();
                var s = setTimeout(function () {




                    isOpenerOn = true;
                    lastTriggerType = currentTriggerType;

                    $('#' + currentTriggerType + 'Opener').addClass('on');


                    var slideDistance = $('#' + currentTriggerType + 'Opener').outerHeight();
                    contentScrollers();


                        // Disabling Scroll

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
                        isCurrentlyAnimated = false;
                    }, openerTimer);
                }, currentOpenerTimer);
            }
        }
        //

        // Close currently active content
        function closeOpener() {
            if (isOpenerOn) {
                $(document).scrollTop(scrollTopBeforeOpening);
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

                var s = setTimeout(function () {
                    isOpenerOn = false;
                    lastTriggerType = "";

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

    function panelInnerLinks() {
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
    	if ((wW) < 1024 ) {
    		$('nav #menuOpener').appendTo('#divOpenerFrame');
    	}
    	else {
    		$('#divOpenerFrame #menuOpener').appendTo('nav');
    	}
    }

    function panelInnerLinks() {
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

    function contentScrollers() {
        $(".divBasketDetails").mCustomScrollbar();
        if (slideDistance == (wH-$('header').height() )) {
            $('#divOpenerFrame').mCustomScrollbar();
            console.log(slideDistance);
        }
    }

