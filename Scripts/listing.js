$(document).ready(function () {
stylelisting();
filterSticky();
listingMasonry();
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
	$('.listingList').masonry({
	  columnWidth: 335,
	  itemSelector: '.listItem',
	  gutter: 9,
	  isFitWidth: true
	});
}