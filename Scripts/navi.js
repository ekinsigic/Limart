// $(document).ready(function () {
// 	triggerOpener();
// 	panelInnerLinks();
// 	styleOpeners();
// });



// $(document).load(function(){
// });



// $(window).resize(function () {
// 	styleOpeners();
// });


// var activeOpener = null;
// var triggerKey = null;
// var animationTime = 700;
// var animationType = 'ease-in-out'
// var isScroll = false;
// var otherItemsToSlide = $('main, footer, .filtersInHeader, .listingFilters');
// var delayTime = 0;
// var isCurrentlyAnimated = false;



// function isTouchClick(elem) {
// 	var b = false
// 	isScroll = false;

// 	$(elem).bind('touchmove',function(e){
// 		isScroll = true;
// 	});

// 	$(elem).bind('touchend',function(e){
// 		if (!isScroll) {
// 			b = true;
// 		}
// 	});

// 	return b;
// }



// function triggerOpener() {
// 	if (!isMobile) {
// 		$('.triggerDiv').click(function(e){
// 			if (!isCurrentlyAnimated) {
// 				e.stopPropagation();

// 				var triggerId = $(this).attr('id');
// 				var triggerKey = triggerId.substring(0, (triggerId.length - 7));

// 				openingOpener = triggerKey + 'Opener';
// 				delegateOpener(openingOpener);
// 			};
// 		});

// 		$(window).click(function(){
// 			if (!isCurrentlyAnimated) {
// 				closeOpener(activeOpener);
// 			};
// 		});

// 		$('.sixtythreeOpener').click(function(e){
// 			if (!isCurrentlyAnimated) {
// 				e.stopPropagation();
// 			};
// 		});
// 	}
// 	else {

// 		$('.triggerDiv').bind('touchstart', function(e){

// 			isScroll = false;

// 			$(this).bind('touchmove',function(e){
// 				isScroll = true;
// 			});

// 			$(this).one('touchend',function(e){
// 				if (!isScroll || !isCurrentlyAnimated) {
// 					e.stopPropagation();
// 					var triggerId = $(this).attr('id');
// 					var triggerKey = triggerId.substring(0, (triggerId.length-7));
// 					openingOpener = triggerKey + 'Opener';
// 					delegateOpener(openingOpener);
// 				};
// 			});
// 		});


// 		$(window).bind('touchstart',function(){
// 			if (!isCurrentlyAnimated) {
// 				closeOpener(activeOpener);
// 			};
// 		});

// 		$('.sixtythreeOpener').bind('touchstart',function(e){
// 			if (!isCurrentlyAnimated) {
// 				e.stopPropagation();
// 			};
// 		});

// 		// $(window).bind('touchstart',function(e){
// 		// 	isScroll = false;
// 		// 	$(window).bind('touchmove',function(e){
// 		// 		isScroll = true;
// 		// 	});
// 		// 	$(window).one('touchend',function(e){
// 		// 		if (!isScroll) {
// 		// 			closeOpener(activeOpener);
// 		// 		};
// 		// 	});
// 		// });

// 		// $('.sixtythreeOpener').bind('touchstart',function(e){
// 		// 	e.stopPropagation();
// 		// 	isScroll = false;
// 		// 	$(this).bind('touchmove',function(e){
// 		// 		e.stopPropagation();
// 		// 		isScroll = true;
// 		// 	});
// 		// 	$(this).one('touchend',function(e){
// 		// 		if (!isScroll) {
// 		// 			e.stopPropagation();
// 		// 		};
// 		// 	});
// 		// });
// 	}
// }



// function delegateOpener(openingOpener) {
// 	if (activeOpener == null) {
// 		openOpener(openingOpener);
// 	}
// 	else if (activeOpener == openingOpener) {
// 		closeOpener(activeOpener);
// 	}
// 	else {
// 		closeOpener(activeOpener);

// 		setTimeout(function(){
// 			openOpener(openingOpener);
// 		}, animationTime);
// 	}

// 	if (activeOpener == 'searchOpener') {
// 		$('#searchOpener .noCursor').addClass('pseudoCursor');
// 		$('#searchOpener input').focus(function(){
// 			$('#searchOpener .noCursor').removeClass('pseudoCursor');
// 		})
// 	};
// }



// function openOpener(openingOpener) {
// 	var panel = $('#' + openingOpener)
// 	var panelHeight = panel.outerHeight();

// 	isCurrentlyAnimated = true;
// 	console.log(isCurrentlyAnimated);
// 	setTimeout(function(){
// 		isCurrentlyAnimated = false;
// 		console.log(isCurrentlyAnimated);
// 	},animationTime)

// 	otherItemsToSlide.css({
// 		'-webkit-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-moz-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-ms-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-o-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
// 		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
// 		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
// 		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
// 		'transition':'transform '+(animationTime/1000)+'s '+animationType
// 	})
	
// 	panel.css({
// 		'-webkit-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-moz-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-ms-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-o-transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'transform':'translate3d(0px,'+panelHeight+'px,0px)',
// 		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
// 		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
// 		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
// 		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
// 		'transition':'transform '+(animationTime/1000)+'s '+animationType
// 	})

// 	activeOpener = openingOpener;

// 	// $(window).bind('touchmove',function(e){
// 	// 	e.preventDefault()
// 	// });
// 	// $('.sixtythreeOpener').each(function(e){
// 	// 	if ($(this).height() > wH-100) {
// 	// 		$(this).unbind('touchmove');
// 	// 	};
// 	// });

// 	$('body').css('overflow','hidden');
// }



// function closeOpener(closingOpener) {
// 	var panel = $('#' + closingOpener);
// 	isCurrentlyAnimated = true;
// 	setTimeout(function(){
// 		isCurrentlyAnimated = false;
// 	},animationTime)

// 	otherItemsToSlide.css({
// 		'-webkit-transform':'translate3d(0px,0px,0px)',
// 		'-moz-transform':'translate3d(0px,0px,0px)',
// 		'-ms-transform':'translate3d(0px,0px,0px)',
// 		'-o-transform':'translate3d(0px,0px,0px)',
// 		'transform':'translate3d(0px,0px,0px)',
// 		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
// 		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
// 		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
// 		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
// 		'transition':'transform '+(animationTime/1000)+'s '+animationType
// 	})

// 	panel.css({
// 		'-webkit-transform':'translate3d(0px,0px,0px)',
// 		'-moz-transform':'translate3d(0px,0px,0px)',
// 		'-ms-transform':'translate3d(0px,0px,0px)',
// 		'-o-transform':'translate3d(0px,0px,0px)',
// 		'transform':'translate3d(0px,0px,0px)',
// 		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
// 		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
// 		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
// 		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
// 		'transition':'transform '+(animationTime/1000)+'s '+animationType
// 	});
// 	setTimeout(function(){
// 		activeOpener = null;
// 	},animationTime)

// 	// $(window).unbind('touchmove');
// 	$('body').css('overflow','auto');
// }


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
// function styleOpeners() {
// 	setTimeout(function(){
// 		var panelPosition = wH-$('header').height()
// 		$('.divUserOpener, .divBasketOpener, #menuOpener, #searchOpener').css({
// 			//'height': panelPosition,
// 			'bottom': panelPosition,
// 			'max-height':panelPosition
// 		})
// 	},200);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////FÜZYON////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////FÜZYON//////////////////////////////////////////////////////////////FÜZYON///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////FÜZYON/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////FÜZYON///////////////////////////////FÜZYON/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////FÜZYON///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////FÜZYON////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////FÜZYON//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////FÜZYON///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////FÜZYON/////////////////////////
////////////////////////////////////////////////////FÜZYON//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////FÜZYON///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////FÜZYON///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////FÜZYON///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
        var otherItemsToSlide = $('main, footer, .filtersInHeader, .artistDetailListingFilters');
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
                        $(window).bind('touchmove',function(e){
                            e.preventDefault();
                        })
                    }
                });
                $('#divOpenerFrame, .triggerDiv').bind('touchstart',function(e){
                        e.stopPropagation();
                        console.log($(this).height() + ' element yüksekliği')
                        console.log(wH + ' ekran yüksekliği')
                        console.log($('header').outerHeight() + ' header yüksekliği')
                    if ( !( $(this).height() == ( wH - $('header').outerHeight() ) ) ) {
                        console.log('büyük');
                        $(window).bind('touchmove',function(e){
                            e.preventDefault();
                        });
                    }
                    else {
                        $(window).bind('touchmove',function(e){
                        console.log('küçük');
                            return false();
                        });
                    }
                });
            }


            $('.sixtythreeOpener').each(function(){
                $(this).css('max-height',(wH - $('header').outerHeight()));
            });
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

            if (currentTriggerType == 'search') {
                $('#searchOpener .noCursor').addClass('pseudoCursor');
                $('#searchOpener input').focus(function(){
                    $('#searchOpener .noCursor').removeClass('pseudoCursor');
                })
            };


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
                    $(window).unbind('touchmove');
                    console.log('unbinded');
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

