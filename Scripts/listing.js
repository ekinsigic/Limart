$(document).ready(function () {
stylelisting();
filterSticky();
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
	$('.listWrapper').masonry({
	  columnWidth: 335,
	  itemSelector: '.listItem',
	  gutter: 9,
	  isFitWidth: true
	});
}