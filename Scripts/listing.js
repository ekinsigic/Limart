$(document).ready(function () {
stylelisting();
filterSticky();
listingMasonry();
infiniteScroll()
});

$(document).load(function(){
});

$(window).resize(function () {
stylelisting();
});


function stylelisting() {
	$('.listingWelcome').css({
		'height':(wH-90)*0.666+'px',
	})
}

function filterSticky() {
	$('.listingFilters').css({
		'position':'absolute',
		'top':(wH-90)*0.666+'px'
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
		  isFitWidth: true
		});
	},300);
}

function infiniteScroll(){
	var newBatch = $('.listItem:nth-child(1), .listItem:nth-child(2), .listItem:nth-child(3)').clone().addClass('newListItem');
	enoughTimePassToAddNewImage = true
	if (enoughTimePassToAddNewImage) {
		$(window).scroll(function(){
			if ((($('body').height()-450)-(scrollTopVal+wH)) < 0) {
				$('.listingList').append(newBatch);
				newBatch = $('.listItem:nth-child(1), .listItem:nth-child(2), .listItem:nth-child(3)').clone().addClass('newListItem');
				setTimeout(function(){
					$('.listingList').masonry('appended', newBatch, isAnimatedFromBottom)
				},100);
				setTimeout(function(){
					$('.newListItem').each(function(){
						$(this).removeClass('newListItem');
					});
				},700)
			}
			enoughTimePassToAddNewImage = false
		});
	}
	else {
		setTimeout(function(){
			enoughTimePassToAddNewImage = true
		},700);
	}
}