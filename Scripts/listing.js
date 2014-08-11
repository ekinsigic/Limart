enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
stylelisting();
filterSticky();
listLoad();
mobilePseudoHover();
});

$(window).load(function(){
	listingMasonry();
});

$(window).resize(function () {
stylelisting();
});
$(window).bind('scroll',function(){
	listLoad();
	console.log( ($('body').height()-340) - (scrollTopVal+wH) );
});

function stylelisting() {
	$('.listingWelcome').css({
		'height':(wH-90)*0.666+'px',
	})
}

function filterSticky() {
	$('.listingFilters').css({
	})
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
		if ((($('body').height()-270)-(scrollTopVal+wH)) < 0) {
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

function mobilePseudoHover() {
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
}