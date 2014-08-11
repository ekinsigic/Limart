enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
styleArtist();
filterSticky();
listingMasonry();
if (!isMobile) {
	listLoad();
}
else {
	clickLoad();
}
});

$(document).load(function(){
});

$(window).resize(function () {
styleArtist();
});


function styleArtist() {
	$('.artistWelcome').css({
		'height': (wH-90)+'px',
	})
}

function filterSticky() {
		$('.listingFilters').css({
			'top': (wH - $('header').height()) +'px'
		})
	if (!isMobile) {
		if ($('.artistDetail').css('display') == 'none') {

			$(window).scroll(function(){
				if ( scrollTopVal > ($('.artistWelcome').height() + parseInt($('.artistWelcome').css('padding-top'))) ) {
					$('.listingFilters').addClass('sticky');
					$('.divNav').addClass('withSticky');
					$('#search').addClass('withSticky');
				}
				else {
					$('.listingFilters').removeClass('sticky');
					$('.divNav').removeClass('withSticky');
					$('#search').removeClass('withSticky');
				}
			});

		}
		else {
			
			$(window).scroll(function(){
				if ( scrollTopVal > $('.artistWelcome').height() ) {
					$('.listingFilters').addClass('sticky');
					$('.divNav').addClass('withSticky');
					$('#search').addClass('withSticky');
				}
				else {
					$('.listingFilters').removeClass('sticky');
					$('.divNav').removeClass('withSticky');
					$('#search').removeClass('withSticky');
				}
			});

		}
	};
}

function listingMasonry() {
	setTimeout(function(){
		$('.listingList').masonry({
		  columnWidth: 300,
		  itemSelector: '.listItem',
		  gutter: 30,
		  isFitWidth: true,
		  transitionDuration: 0
		});
	},50);
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
					},1300);
					setTimeout(function(){
						enoughtTimeStoppedToLoadItems = true;
					},400);
				}
			});
		});
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
	$(window).bind('scroll',function(){
	if (!isMobile) {
		listLoad();
	}