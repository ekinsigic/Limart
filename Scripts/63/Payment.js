$(document).ready(function(){
	openOrCloseNewAddress('input[name=addressNewOrSaved]:radio', '#payment .deliveryAddressWrapper', 'newAddress,savedAddress');
	openOrCloseNewAddress('input[name=addressNewOrSavedInvoice]:radio', '#payment .divBillingAddress', 'newAddress,savedAddress');
	openClosedSections('#differentBillingAddress','#payment .billingAddressWrapper',20);
	openClosedSections('#anotherRecipient','#payment .divAnotherRecipientContent',20);
	openClosedSections('#giftNoteThis','#payment .divGiftNoteTextareaWrapper',20);
	radioActions();
});


function openOrCloseNewAddress(triggerInput,affectedElement,classNamesToggle) {
	$(affectedElement).wrapInner('<div class="innerWrapper">');
	var classNames = (classNamesToggle).split(',');
	$(affectedElement).addClass(classNames[1]);
	$(affectedElement).removeClass(classNames[0]);
	var currentHeight = $(affectedElement).find('.innerWrapper').outerHeight();
	$(affectedElement).find('.innerWrapper > *').unwrap();
	$(affectedElement).height(currentHeight);
	$(affectedElement).css({
		'opacity':'1',
		'overflow':'hidden',
		'-webkit-transform':'scale(1)s',
		'transition':'all 0.3s'
	});
	setTimeout(function(){
		$(affectedElement).css('height','');
	})


	$(triggerInput).change(function(){
		scrollUserTo(affectedElement);
		showNewAddressForm(triggerInput,affectedElement,classNamesToggle);
	});


	$(affectedElement).find('.contShopping, .saveAddingNewAddress, .saveAddingNewInvoiceAddress').click(function(e){
		e.preventDefault();
		removeProhibitor();

		$(affectedElement).css({
			'opacity':'0',
			'-webkit-transform':'scale(0.95)'
		});
		$(affectedElement).wrapInner('<div class="innerWrapper">');
		var classNames = (classNamesToggle).split(',');
		setTimeout(function(){
				$(affectedElement).addClass(classNames[1]);
				$(affectedElement).removeClass(classNames[0]);
				removeProhibitor();
			var currentHeight = $(affectedElement).find('.innerWrapper').outerHeight();
			$(affectedElement).find('.innerWrapper > *').unwrap();
			$(affectedElement).height(currentHeight);
			scrollUserTo(affectedElement);
			setTimeout(function(){
				$(affectedElement).css({
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				});
				setTimeout(function(){
					$(affectedElement).css({
						'height':'auto'
					});
				},6000)
				$(triggerInput).first().prop('checked', true);
			},100);
		},500);
	})
}

function showNewAddressForm(triggerInput, affectedElement, classNamesToggle){
		$(affectedElement).css({
			'opacity':'0',
			'-webkit-transform':'scale(0.95)'
		});
		$(affectedElement).wrapInner('<div class="innerWrapper">');
		var classNames = (classNamesToggle).split(',');
		scrollUserTo(affectedElement);
		setTimeout(function(){
			if (triggerInput != null) {

				if ($(triggerInput).first().is(':checked')) {
					$(affectedElement).addClass(classNames[1]);
					$(affectedElement).removeClass(classNames[0]);
					removeProhibitor();
				}
				else {
					$(affectedElement).removeClass(classNames[1]);
					$(affectedElement).addClass(classNames[0]);
					
					setTimeout(function(){
						addProhibitor(affectedElement);
					},300);
				}

			}
			else {
				$(affectedElement).removeClass(classNames[1]);
				$(affectedElement).addClass(classNames[0]);
				
				setTimeout(function(){
					addProhibitor(affectedElement);
				},300);
			}
			var currentHeight = $(affectedElement).find('.innerWrapper').outerHeight();
			$(affectedElement).find('.innerWrapper > *').unwrap();
			$(affectedElement).height(currentHeight);
			setTimeout(function(){
				$(affectedElement).css({
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				});
				setTimeout(function(){
					$(affectedElement).css({
						'height':'auto'
					});
				},6000)
			},100);
		},500);
}

function openClosedSections(triggerInput,affectedElement,closedHeight) {
	$(affectedElement).css({
		'height':closedHeight,
		'opacity':'0',
		'overflow':'hidden',
		'-webkit-transform':'scale(0.95)',
		'transition':'all 0.3s'
	});

	$(triggerInput).change(function(){
		if ($(this).is(':checked')) {
			$(affectedElement).wrapInner('<div class="innerWrapper">');
			var closedContentHeight = $(affectedElement).find('.innerWrapper').outerHeight();
			$(affectedElement).css({
				'height':closedContentHeight,
				'transition':'all 0.3s'
			});
			setTimeout(function(){
				$(affectedElement).css({
					'height':'auto',
					'opacity':'1',
					'-webkit-transform':'scale(1)',
					'transition':'all 0.3s'
				});
				$(affectedElement).find('.innerWrapper > *').unwrap();
				if ($(affectedElement).height() > 300) {
					scrollUserTo(affectedElement);
				}
				else {
					scrollSanitizer(affectedElement);
				}
			},300);
		}
		else {
			$(affectedElement).css({
				'height':$(affectedElement).outerHeight()
			})
			setTimeout(function(){
				$(affectedElement).css({
					'height':closedHeight,
					'opacity':'0',
					'overflow':'hidden',
					'-webkit-transform':'scale(0.95)',
					'transition':'all 0.3s'
				});
			},1)
		}
	})
}

function addProhibitor(unprohibitedElement) {
	var upperProhibitorEndingPoint = $(unprohibitedElement).offset().top - $('.divWholePaymentWrapper').offset().top - 100;
	var lowerProhibitorStartingPoint = upperProhibitorEndingPoint + $(unprohibitedElement).height();

if (upperProhibitorEndingPoint < 200) {
	$('.saveBtn').first().after('<div class="prohibitorOverlay" id="miniProhibitor" style=" position:absolute; right:0px; top:0px; z-index:999; height:40px; background-color:rgba(255,255,255,0.95); margin:33px 0 0 0; width:200px; opacity:0; ">');
};
	$('.divWholePaymentWrapper').prepend('<div class="prohibitorOverlay" id="upperProhibitor" style=" position:absolute; left:0px; top:-0px; z-index:999; width:100%; height:'+ (upperProhibitorEndingPoint) +'px; background-color:rgba(255,255,255,0.95); opacity:0; ">');
	$('.divWholePaymentWrapper').append('<div class="prohibitorOverlay" id="lowerProhibitor" style=" width:100%; position:absolute; left:0px; z-index:999; opacity:0; top:'+(lowerProhibitorStartingPoint+100)+'px; height:'+ ($('.divWholePaymentWrapper').height() - lowerProhibitorStartingPoint) +'px; background-color:rgba(255,255,255,0.95); ">');
	setTimeout(function(){
		$('.prohibitorOverlay').each(function(){
			$(this).css('opacity','1');
		})
	},100)
}

function removeProhibitor() {
	$('.prohibitorOverlay').each(function(){
		var dissappearingElement = $(this)
		dissappearingElement.css('opacity','0');
		setTimeout(function(){
			dissappearingElement.remove()
		},400);
	});
}

function radioActions() {
	$('.divAddressOption').find('input[type="radio"]').change(function(){
		$('.divAddressOption').each(function(){
			$(this).removeClass('active');	
		})
		$(this).parents('.divAddressOption').addClass('active');
	});

	$('.divWirePaymentOption').find('input[type="radio"]').change(function(){
		$('.divWirePaymentOption').each(function(){
			$(this).removeClass('active');	
		})
		$(this).parents('.divWirePaymentOption').addClass('active');
	});
}

function editAddressInfo(affectedElement,classNamesToggle, addressId) {
	event.preventDefault();
	showNewAddressForm(null, affectedElement, classNamesToggle);
	setTimeout(function(){
		alert('Düzenlenecek addressId sini paslıyorum: '+addressId);
	},2000);
}

function deleteAddressInfo(sender, addressId) {
	event.preventDefault();
	$(sender).parents('.divAddressOption').css('opacity','0');
		setTimeout(function(){
			$(sender).parents('.divAddressOption').remove();
			alert('Silinecek addressId sini paslıyorum: '+addressId);

		},500);
}



			var activePaymentOption = null;

			$('.divAddressContent .saveBtn').click(function(e){
				e.preventDefault();
				$('.divWholePaymentWrapper.divContent').height($('.divWholePaymentWrapper.divContent').height());
					$('#payment').removeClass('adressInfo');
					$('#payment').addClass('paymentOptions');
					$('main .divAddressContent').css({
						'opacity':'0',
						'-webkit-transform':'scale(0.95)'
					});
				setTimeout(function(){
					$('.divPaymentContent').removeClass('passiveTab');
					$('main .divAddressContent').addClass('passiveTab');
					setTimeout(function(){
						$('.divWholePaymentWrapper.divContent').css('height','');
					},50);
					$('main .divAddressContent').css({
						'opacity':'',
						'-webkit-transform':''
					});
				},600);

				$('.divAddress').removeClass('selectedTab');
				$('.divPayment').addClass('selectedTab');
				$('.divAddress .edit').css({
					'opacity':'1'
				})
			});

			$('#payment a.edit').click(function(e){
				e.preventDefault();
				$('.divWholePaymentWrapper.divContent').height($('.divWholePaymentWrapper.divContent').height());
					$('#payment').addClass('adressInfo');
					$('#payment').removeClass('paymentOptions');
					$('main .divPaymentContent').css({
						'opacity':'0',
						'-webkit-transform':'scale(0.95)'
					});
				setTimeout(function(){
					$('.divWholePaymentWrapper.divContent').css('height','');
					$('.divPaymentContent').addClass('passiveTab');
					$('main .divAddressContent').removeClass('passiveTab');
					$('main .divPaymentContent').css({
						'opacity':'',
						'-webkit-transform':''
					});
				},600);

				$('.divAddress').addClass('selectedTab');
				$('.divPayment').removeClass('selectedTab');
				$('.divAddress .edit').css({
					'opacity':'0'
				})
			});


			$('.ulPaymentOptions li').click(function(e){
				var selectedOption = $(this).attr('data-payment-selection');
				if (activePaymentOption !== selectedOption) {
					activePaymentOption = selectedOption
					$('.ulPaymentOptions li').each(function(){
						$(this).removeClass('activeOption');
					});
					$(this).addClass('activeOption');
					$('.divPaymentContent .divPaymentOption').each(function(){
						$(this).css({
							'opacity':'0',
							'transition':'all 0.7s',
							'-webkit-transform':'scale(0.95)'
						});
					});
					setTimeout(function(){
						$('.divPaymentContent .divPaymentOption').each(function(){
							$(this).removeClass('activePayment');
						});
						$('.divPaymentContent').find('.'+selectedOption).addClass('activePayment');
						setTimeout(function(){
							$('.divPaymentContent .divPaymentOption').each(function(){
								$(this).css({
									'opacity':'1',
									'-webkit-transform':'scale(1)'
								});
							});
						},10)
					},900);
				};
			});

	//MANAGE PAGE SCROLLING
	function scrollUserTo(scrolledElement) {
		var scrolledElementTop = $(scrolledElement).offset().top;
		var scrollDestination = scrolledElementTop - 225;
		$('html,body').animate({scrollTop: scrollDestination }, '300');
	}
	function scrollSanitizer(sanitizedElement) {
		var elementDestination = $(sanitizedElement).offset().top + 200;
		var windowDestination = scrollTopVal+wH;
		var sanitizingDestination = elementDestination-wH+100;

		if (elementDestination > windowDestination) {
			$('html,body').animate({scrollTop: sanitizingDestination }, '300');
		};
		//$('html,body').animate({scrollTop: scrollDestination }, '500');
	}
	//

