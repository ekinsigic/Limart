$(document).ready(function () {
	triggerOpener();
	panelInnerLinks();
	styleOpeners();
});



$(document).load(function(){
});



$(window).resize(function () {
	styleOpeners();
});


var activeOpener = null;
var triggerKey = null;
var animationTime = 700;
var animationType = 'ease-in-out'
var isScroll = false;
var otherItemsToSlide = $('main, footer, .filtersInHeader, .listingFilters');
var delayTime = 0;



function isTouchClick(elem) {
	var b = false
	isScroll = false;

	$(elem).bind('touchmove',function(e){
		isScroll = true;
	});

	$(elem).bind('touchend',function(e){
		if (!isScroll) {
			b = true;
		}
	});

	return b;
}



function triggerOpener() {
	if (!isMobile) {
		$('.triggerDiv').click(function(e){
			e.stopPropagation();

			var triggerId = $(this).attr('id');
			var triggerKey = triggerId.substring(0, (triggerId.length - 7));

			openingOpener = triggerKey + 'Opener';
			delegateOpener(openingOpener);
		});

		$(window).click(function(){
			closeOpener(activeOpener);
		});

		$('.sixtythreeOpener').click(function(e){
			e.stopPropagation();
		})
	}
	else {

		$('.triggerDiv').bind('touchstart', function(e){

			isScroll = false;

			$(this).bind('touchmove',function(e){
				isScroll = true;
			});

			$(this).one('touchend',function(e){
				if (!isScroll) {
					e.stopPropagation();
					var triggerId = $(this).attr('id');
					var triggerKey = triggerId.substring(0, (triggerId.length-7));
					openingOpener = triggerKey + 'Opener';
					console.log(triggerId + ' ' + triggerKey + ' ' + openingOpener);
					delegateOpener(openingOpener);
				};
			});
		});

		// $(window).bind('touchstart',function(e){
		// 	isScroll = false;
		// 	$(window).bind('touchmove',function(e){
		// 		isScroll = true;
		// 	});
		// 	$(window).one('touchend',function(e){
		// 		if (!isScroll) {
		// 			closeOpener(activeOpener);
		// 		};
		// 	});
		// });

		// $('.sixtythreeOpener').bind('touchstart',function(e){
		// 	e.stopPropagation();
		// 	isScroll = false;
		// 	$(this).bind('touchmove',function(e){
		// 		e.stopPropagation();
		// 		isScroll = true;
		// 	});
		// 	$(this).one('touchend',function(e){
		// 		if (!isScroll) {
		// 			e.stopPropagation();
		// 		};
		// 	});
		// });
	}
}



function delegateOpener(openingOpener) {
	if (activeOpener == null) {
		openOpener(openingOpener);
	}
	else if (activeOpener == openingOpener) {
		closeOpener(activeOpener);
	}
	else {
		closeOpener(activeOpener);

		setTimeout(function(){
			openOpener(openingOpener);
		}, animationTime);
	}
}



function openOpener(openingOpener) {
	var panel = $('#' + openingOpener)
	var panelHeight = panel.outerHeight();

	otherItemsToSlide.css({
		'-webkit-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-moz-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-ms-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-o-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
		'transition':'transform '+(animationTime/1000)+'s '+animationType
	})
	
	panel.css({
		'-webkit-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-moz-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-ms-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-o-transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'transform':'translate3d(0px,'+panelHeight+'px,0px)',
		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
		'transition':'transform '+(animationTime/1000)+'s '+animationType
	})

	activeOpener = openingOpener;

	$(window).bind('touchmove',function(e){
		e.preventDefault()
	});

	$('body').css('overflow','hidden');
}



function closeOpener(closingOpener) {
	var panel = $('#' + closingOpener);

	otherItemsToSlide.css({
		'-webkit-transform':'translate3d(0px,0px,0px)',
		'-moz-transform':'translate3d(0px,0px,0px)',
		'-ms-transform':'translate3d(0px,0px,0px)',
		'-o-transform':'translate3d(0px,0px,0px)',
		'transform':'translate3d(0px,0px,0px)',
		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
		'transition':'transform '+(animationTime/1000)+'s '+animationType
	})

	panel.css({
		'-webkit-transform':'translate3d(0px,0px,0px)',
		'-moz-transform':'translate3d(0px,0px,0px)',
		'-ms-transform':'translate3d(0px,0px,0px)',
		'-o-transform':'translate3d(0px,0px,0px)',
		'transform':'translate3d(0px,0px,0px)',
		'-webkit-transition':'-webkit-transform '+(animationTime/1000)+'s '+animationType,
		'-moz-transition':'-moz-transform '+(animationTime/1000)+'s '+animationType,
		'-ms-transition':'-ms-transform '+(animationTime/1000)+'s '+animationType,
		'-o-transition':'-o-transform '+(animationTime/1000)+'s '+animationType,
		'transition':'transform '+(animationTime/1000)+'s '+animationType
	});
	setTimeout(function(){
		activeOpener = null;
	},animationTime)

	$(window).unbind('touchmove');
	$('body').css('overflow','auto');
}


function panelInnerLinks() {
	$('.panelInnerLink').click(function(){
		var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
		console.log(panelNow);
		var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
		console.log(panelToGo);
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
function styleOpeners() {
	setTimeout(function(){
		var panelPosition = wH-$('header').height()
		$('.divUserOpener, .divBasketOpener, #menuOpener, #searchOpener').css({
			//'height': panelPosition,
			'bottom': panelPosition,
			'max-height':panelPosition
		})
	},200);
}





