enoughtTimeStoppedToLoadItems = true;
var isScroll = false;
$(document).ready(function () {
stylelisting();
filterSticky();
if (!isMobile) {
	listLoad();
}
else {
	clickLoad();
}
mobilePseudoHover();
carryFilters();
});

$(window).load(function(){
	listingMasonry();
});

$(window).resize(function () {
carryFilters();
stylelisting();
});
$(window).bind('scroll',function(){
	if (!isMobile) {
		listLoad();
	};
});

function stylelisting() {
	$('.listingWelcome').css({
		'height':(wH-90)*0.666+'px',
	})
}

function filterSticky() {
	if (!isMobile) {
		if ($('.listingWelcome').css('display') == 'none') {
		}
		else {
			$(window).scroll(function(){
				if ( scrollTopVal > ((wH-90)*0.666) ) {
					$('.listingFilters').addClass('sticky');
					$('main').css('padding-top','65px');
				}
				else {
					$('.listingFilters').removeClass('sticky');
					$('main').css('padding-top','0px');
				}
			});
		}
	};
}

function listingMasonry() {
		$('.listItem').each(function(){
			$(this).removeClass('newItem');
		});
	setTimeout(function(){
		$('.listingList').masonry({
		  columnWidth: 300,
		  itemSelector: '.listItem',
		  gutter: 30,
		  isFitWidth: true,
		  transitionDuration: 0
		});
	},50);
	setTimeout(function(){
	},100);
}

function listLoad(){
		if ((($('body').height()-350)-(scrollTopVal+wH)) < 0) {
			if (enoughtTimeStoppedToLoadItems) {
				enoughtTimeStoppedToLoadItems = false;
				$('.preloader').addClass('loading');
				setTimeout(function(){
					var newBatch = $('.listItem').clone().addClass('newItem');
					$('.preloader').removeClass('loading');
					$('.listingList').append(newBatch).masonry( 'appended', newBatch, true);
					setTimeout(function(){
						$('.listItem').each(function(){
							$(this).removeClass('newItem');
						});
					},100);
				},2000);
				setTimeout(function(){
					enoughtTimeStoppedToLoadItems = true;
				},2100);
			}
		}
}
function clickLoad(){
		$('.preloader').css('display','none');
		$('.clickLoader').addClass('active');
		$('.clickLoader').bind('touchstart', function(){
			$('.clickLoader').bind('touchend', function(){
				disableTouchScroll(1);
				if (enoughtTimeStoppedToLoadItems) {
					enoughtTimeStoppedToLoadItems = false;
					$('.preloader').addClass('loading');
					setTimeout(function(){
						var newBatch = $('.listItem').clone().addClass('newItem');
						$('.preloader').removeClass('loading');
						$('.listingList').append(newBatch).masonry( 'appended', newBatch, true);
						setTimeout(function(){
							$('.listItem').each(function(){
								disableTouchScroll(0);
								$(this).removeClass('newItem');
							});
						},100);
					},3300);
					setTimeout(function(){
						enoughtTimeStoppedToLoadItems = true;
					},400);
				}
			});
		});
}

function mobilePseudoHover() {
	if (isMobile) {

		$('.listItemLink').css({
			'display':'none'
		})

		$('.listItem').bind('touchstart',function(e){
			e.stopPropagation();
			isScroll = false;
			$('.listItem').bind('touchmove',function(){
				isScroll = true;
			});
			$('.listItem').bind('touchend', function(e){
				if (!isScroll) {
					$('.listItem').each(function(){
						 $(this).removeClass('hover');
					})
					$(this).addClass('hover');
					setTimeout(function(){
						$('.listItem').each(function(){
							 $(this).removeClass('listingLinkOn');
						})
						$('.hover').addClass('listingLinkOn');
					},200);
					$(window).bind('touchstart',function(){
						$('.listItem').each(function(){
							$(this).removeClass('hover listingLinkOn');
						});
					});
				};
			});
		});

	};
}


function carryFilters() {
	if ($('.listingWelcome').css('display') == 'none' && $('header .listingFilters').length < 1) {
		$('header').append($('.listingFilters').addClass('filtersInHeader'));
		$('main .listingFilters').remove();
	}
	else {
		$('.listingContainer').before($('.listingFilters').removeClass('filtersInHeader'));
		$('header .listingFilters').remove();
	}
}

function disableTouchScroll(offOrOn) {
	if (offOrOn == 1) {
		$('html').bind('touchmove', function (e) {//sayfanýn scroll olmasýný engelliyoruz
		    e.preventDefault();
		});
	}
	else {
		$('html').unbind('touchmove');
	}
}
