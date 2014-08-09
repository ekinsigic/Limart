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
		console.log($('.listingFilters').offset().top > scrollTopVal);
		var listingFilters = $('.listingFilters');
		var listingFiltersOffsetTop = listingFilters.offset().top - scrollTopVal;
		if (listingFiltersOffsetTop < 90) {
			listingFilters.css({
				'position':'fixed',
				'top':'90px'
			})
		}
		else {
			listingFilters.css({
				'position':'relative',
				'top':'auto'
			})
		}
	});
}