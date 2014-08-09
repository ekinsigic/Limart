$(document).ready(function () {
stylelisting();
filterSticky();
listingMasonry();
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