enoughtTimeStoppedToLoadItems = true;

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
	listLoad();
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
		});
}

function mobilePseudoHover() {
	if (isMobile) {

		$('.listItemLink').css({
			'display':'none'
		})

		$('.listItem').bind('touchstart',function(e){
			e.stopPropagation();
				$('.listItem').each(function(){
					 $(this).removeClass('hover');
				})
				$(this).addClass('hover');
				$(window).bind('touchstart',function(){
					$('.listItem').each(function(){
						$(this).removeClass('hover');
					});
				});
		});

		// deneme

		// var doWeHaveANumber = false
		// document.addEventListener('touchmove', function(e) {
		//     var touch = e.touches[0];
		// 	var startingCoordinates = e.touches[0].pageY
		// 	$('.listItem').bind('touchmove',function(){
				
		// 	});
		// 	$('.listItem').bind('touchend', function(){
		// 		var banavar = startingCoordinates
		// 		console.log(canavar+''+banavar)
		// 	});

		// }, false);

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