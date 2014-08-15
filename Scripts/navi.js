$(document).ready(function () {
	triggerPanel();
	panelInnerLinks();
	stylePanels();
});



$(document).load(function(){
});



$(window).resize(function () {
	stylePanels();
});


var activePanel = null;
var triggerKey = null;
var animationTime = 700;
var animationType = 'ease-in-out'
var isScroll = false;
var otherItemsToSlide = $('main, footer, .filtersInHeader, .listingFilters');
var delayTime = 0;



function triggerPanel() {
	if (!isMobile) {
		$('.triggerDiv').click(function(e){
			e.stopPropagation();

			var triggerId = $(this).attr('id');
			var triggerKey = triggerId.substring(0, (triggerId.length - 7));

			openingPanel = triggerKey + 'Panel';
			delegatePanel(openingPanel);
		});

		$(window).click(function(){
			closePanel(activePanel);
		});

		$('.sixtythreePanel').click(function(e){
			e.stopPropagation();
		})
	}
	else {
		$('.triggerDiv').bind('touchstart',function(e){
			isScroll = false;
			$(this).bind('touchmove',function(e){
				isScroll = true;
			});
			if (!isScroll) {
				$(this).bind('touchend',function(e){
					e.stopPropagation();
					var triggerId = $(this).attr('id');
					var triggerKey = triggerId.substring(0, (triggerId.length-7));
					openingPanel = triggerKey + 'Panel';
					//$('.triggerDiv').unbind('touchstart');
					// console.log(triggerId + ' ' + triggerKey + ' ' + openingPanel);
					
					// return;
					delegatePanel(openingPanel);
				});
			}
		});

		$(window).bind('touchstart',function(e){
			isScroll = false;
			$(window).bind('touchmove',function(e){
				isScroll = true;
			});
			$(window).one('touchend',function(e){
				if (!isScroll) {
					closePanel(activePanel);
				};
			});
		});

		$('.sixtythreePanel').bind('touchstart',function(e){
			e.stopPropagation();
			isScroll = false;
			$(this).bind('touchmove',function(e){
				e.stopPropagation();
				isScroll = true;
			});
			$(this).one('touchend',function(e){
				if (!isScroll) {
					e.stopPropagation();
				};
			});
		});
	}
}



function delegatePanel(openingPanel) {
	if (activePanel == null) {
		openPanel(openingPanel);
	}
	else if (activePanel == openingPanel) {
		closePanel(activePanel);
	}
	else {
		closePanel(activePanel);

		setTimeout(function(){
			openPanel(openingPanel);
		}, animationTime);
	}
}



function openPanel(openingPanel) {
	var panel = $('#' + openingPanel)
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

	activePanel = openingPanel;

	$(window).bind('touchmove',function(e){
		e.preventDefault()
	});

	$('body').css('overflow','hidden');
}



function closePanel(closingPanel) {
	var panel = $('#' + closingPanel);

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
		activePanel = null;
	},animationTime)

	$(window).unbind('touchmove');
	$('body').css('overflow','auto');
}


function panelInnerLinks() {
	$('.panelInnerLink').click(function(){
		var panelNow = '#'+$(this).parents('.activeInnerPanel').attr('id');
		var panelToGo = '#'+$(this).attr('data-innerPanelAnchor');
		$(panelNow).removeClass('activeInnerPanel');
		setTimeout(function(){
		$(panelNow).removeClass('userPanelInnerPanelVisible');
		$(panelToGo).addClass('userPanelInnerPanelVisible');
		$('.divUserPanel').scrollTop(0);
			setTimeout(function(){
				$(panelToGo).addClass('activeInnerPanel');
			},10)
		},500);
	});
}
function stylePanels() {
	setTimeout(function(){
		var panelPosition = wH-$('header').height()
		$('.divUserPanel, .divBasketPanel').css({
			'height': panelPosition,
			'bottom': panelPosition
		})
	},200);
}














