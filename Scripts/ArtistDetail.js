enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
styleArtist();
filterSticky();
listingMasonry();
listLoad();
});

$(document).load(function(){
});

$(window).resize(function () {
stylelisting();
});


function styleArtist() {
	$('.listingWelcome').css({
		'height':(wH-90)*0.666+'px',
	})
}

function filterSticky() {
	$('.listingFilters').css({
	})
	$(window).scroll(function(){
		if ( scrollTopVal > ((wH-90)*0.666) ) {
			$('.listingFilters').addClass('sticky');
		}
		else {
			$('.listingFilters').removeClass('sticky');
		}
	});
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

	$(window).bind('scroll',function(){
		listLoad();
		console.log( ($('body').height()-340) - (scrollTopVal+wH) );
	});