var popUpIsOpen = false
var openedPopUp = null

function SSTPopUp(popUpContent) {
	var openedPopUp = null
	if (!popUpIsOpen) {
		if (popUpContent == null) {
			popUpContent == 'div'
		};
		$('.SSTPopUpOverlay').css('display','block');
		$('.popUpContent, .popUpContent ' + popUpContent).css('display','block');
		setTimeout(function(){
			$('.SSTPopUpOverlay').css('opacity','0.97');
			$('html,body').css('overflow','hidden');
			setTimeout(function(){
				$('.popUpContent, .popUpContent ' + popUpContent).css('opacity','1');
			},300);
			popUpIsOpen = true
		},10);
		openedPopUp = popUpContent
	}
	else {
		if (popUpContent == null) {
			popUpContent == 'div'
		};
		$('.popUpContent, .popUpContent '+popUpContent).css('opacity','0');
		setTimeout(function(){
			$('.SSTPopUpOverlay').css('opacity','0');
			$('html,body').css('overflow','');
			setTimeout(function(){
				popUpIsOpen = false
				$('.SSTPopUpOverlay').css('display','none');
				$('.popUpContent, .popUpContent '+popUpContent).css('display','none');
			},10)
		},700);
		openedPopUp = null
	}
	if (!isMobile) {
		$(window).click(function(){
			$('.popUpContent, .popUpContent '+openedPopUp).css('opacity','0');
			setTimeout(function(){
				$('.SSTPopUpOverlay').css('opacity','0');
				$('html,body').css('overflow','');
				setTimeout(function(){
					popUpIsOpen = false
					$('.SSTPopUpOverlay').css('display','none');
					$('.popUpContent, .popUpContent '+openedPopUp).css('display','none');
				},500)
			},500);
			openedPopUp = null
		});
		$(openedPopUp+', a').click(function(e){
			e.stopPropagation();
		});
	}
	else {
		$(window).bind('tap',function(){
			$('.popUpContent, .popUpContent '+openedPopUp).css('opacity','0');
			setTimeout(function(){
				$('.SSTPopUpOverlay').css('opacity','0');
				$('html,body').css('overflow','');
				setTimeout(function(){
					popUpIsOpen = false
					$('.SSTPopUpOverlay').css('display','none');
					$('.popUpContent, .popUpContent '+openedPopUp).css('display','none');
				},500)
			},500);
			openedPopUp = null
		});
		$(openedPopUp+', a').bind('tap',function(e){
			e.stopPropagation();
		})
	}
	$(window).keydown(function(e){
		if (e.which == 27) {
			$('.popUpContent, .popUpContent '+openedPopUp).css('opacity','0');
				$(window).keyup(function(){
					$('.SSTPopUpOverlay').css('opacity','0');
					$('html,body').css('overflow','');
					setTimeout(function(){
						popUpIsOpen = false
						$('.SSTPopUpOverlay').css('display','none');
						$('.popUpContent, .popUpContent '+openedPopUp).css('display','none');
					},500);
				})
			openedPopUp = null
		}
	})
}