// enoughtTimeStoppedToLoadItems = true;

// $(document).ready(function () {
// 	paymentDynamics();
// });

// $(window).load(function(){
// });


// var activePaymentOption = null;
// function paymentDynamics() {

// 	$('.closedAsDefault').each(function(){
// 		$(this).wrapInner('<div class="innerWrapper">')
// 	});
// 	$('.divPaymentContent').wrapInner('<div class="innerWrapper">');
// 	$('.divAddressContent').wrapInner('<div class="innerWrapper">');

// 	setTimeout(function(){
// 		openClosedAsDefaultDiv('.divAddressOptionsWrapper');
// 		openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
// 	},1);

// 	// ADDRESS SELECT ADDRESS BOXES ACTIVE PASSIVE STATES
// 		$( "input[name=addressSelect]:radio" ).change(function(){
// 			$(this).parents('.divAddressContent').find('.divAddressOption.active').removeClass('active');
// 			$(this).parents('.divAddressOption').addClass('active');
// 		});

// 		$( "input[name=invoiceAddressSelect]:radio" ).change(function(){
// 			$(this).parents('.divAddressContent').find('.addressNewOrSavedInvoice ~ .divAddressOptionsWrapper .divAddressOption.active').removeClass('active');
// 			$(this).parents('.divAddressOption').addClass('active');
// 		});

// 		$( "input[name=wireTransferType]:radio" ).change(function(){
// 			$(this).parents('.divPaymentOption').find('.divWirePaymentOption.active').removeClass('active');
// 			$(this).parents('.divWirePaymentOption').addClass('active');
// 		});5
// 	//


// 	// CLICK / TAP FUNCTIONS
// 		if (isMobile) {

// 			$('.ulPaymentOptions li').bind('touchstart',function(e){
// 				isScroll = false;
// 				$(this).bind('touchmove',function(){
// 					isScroll = true;
// 				});
// 				$(this).bind('touchend',function(){
// 					var selectedOption = $(this).attr('data-payment-selection');
// 					if (selectedOption !== activePaymentOption) {
// 						activePaymentOption = selectedOption
// 						$('.ulPaymentOptions li').each(function(){
// 							$(this).removeClass('activeOption');
// 						});
// 						$(this).addClass('activeOption');
// 						var selectedOption = $(this).attr('data-payment-selection');
// 						$('.divPaymentContent .divPaymentOption').each(function(){
// 							$(this).css({
// 								'opacity':'0',
// 								'transition':'all 0.7s',
// 								'-webkit-transform':'scale(0.95)'
// 							});
// 						});
// 						setTimeout(function(){
// 							$('.divPaymentContent .divPaymentOption').each(function(e){
// 								$(this).removeClass('activePayment');
// 							});
// 							$('.divPaymentContent').find('.'+selectedOption).addClass('activePayment');
// 							setTimeout(function(){
// 								$('.divPaymentContent .divPaymentOption').each(function(){
// 									$(this).css({
// 										'opacity':'1',
// 										'-webkit-transform':'scale(1)'
// 									});
// 								});
// 							},10)
// 						},900);
// 					};

// 				});
// 			});

// 			$('.divAddressContent .saveBtn, .divAddressContent .saveBtnA').bind('touchstart',function(e){
// 				isScroll = false;
// 				$(this).bind('touchmove',function(){
// 					isScroll = true;
// 				});
// 				$(this).bind('touchend',function(){
// 					e.preventDefault();
// 					$('main').height($('main').height());
// 					setTimeout(function(){
// 						$('main').css('height','');
// 						$('.divPaymentContent').removeClass('passiveTab');
// 						$('#payment').removeClass('adressInfo');
// 						$('#payment').addClass('paymentOptions');
// 					},600);
// 					$('main .divAddressContent').addClass('passiveTab');
// 				});
// 			});

// 			$('#payment a.edit').bind('touchstart',function(e){
// 				isScroll = false;
// 				$(this).bind('touchmove',function(){
// 					isScroll = true;
// 				});
// 				$(this).bind('touchend',function(){
// 					e.preventDefault();
// 					$('main').height($('main').height());
// 					setTimeout(function(){
// 						$('main').css('height','');
// 						$('#payment').addClass('adressInfo');
// 						$('#payment').removeClass('paymentOptions');
// 						$('main .divAddressContent').removeClass('passiveTab');
// 					},600);
// 					$('.divPaymentContent').addClass('passiveTab');
// 				});
// 			});

// 			$('.divNewAddressContent .addBtn, .divNewAddressContent .cancelAddingNewAddress').bind('touchstart',function(e){
// 				isScroll = false;
// 				$(this).bind('touchmove',function(){
// 					isScroll = true;
// 				});
// 				$(this).bind('touchend',function(){
// 					e.preventDefault();
// 					closeOpenOnOptionDiv('main .divAddressContent .divNewAddressContent');
// 				});
// 			});

// 			$('.divAddNewInvoiceAddress .cancelAddingNewInvoiceAddress, .divAddNewInvoiceAddress .addBtn').bind('touchstart',function(e){
// 				isScroll = false;
// 				$(this).bind('touchmove',function(){
// 					isScroll = true;
// 				});
// 				$(this).bind('touchend',function(){
// 					e.preventDefault();
// 					closeOpenOnOptionDiv('main .divAddressContent .divAddNewInvoiceAddress');
// 				});
// 			});
// 		}

// 		else {

// 			$('.ulPaymentOptions li').click(function(e){
// 				var selectedOption = $(this).attr('data-payment-selection');
// 				if (activePaymentOption !== selectedOption) {
// 					activePaymentOption = selectedOption
// 					$('.ulPaymentOptions li').each(function(){
// 						$(this).removeClass('activeOption');
// 					});
// 					$(this).addClass('activeOption');
// 					$('.divPaymentContent .divPaymentOption').each(function(){
// 						$(this).css({
// 							'opacity':'0',
// 							'transition':'all 0.7s',
// 							'-webkit-transform':'scale(0.95)'
// 						});
// 					});
// 					setTimeout(function(){
// 						$('.divPaymentContent .divPaymentOption').each(function(){
// 							$(this).removeClass('activePayment');
// 						});
// 						$('.divPaymentContent').find('.'+selectedOption).addClass('activePayment');
// 						setTimeout(function(){
// 							$('.divPaymentContent .divPaymentOption').each(function(){
// 								$(this).css({
// 									'opacity':'1',
// 									'-webkit-transform':'scale(1)'
// 								});
// 							});
// 						},10)
// 					},900);
// 				};


// 			});

// 			$('.divAddressContent .saveBtn, .divAddressContent .saveBtnA').click(function(e){
// 				e.preventDefault();
// 				$('.divWholePaymentWrapper.divContent').height($('.divWholePaymentWrapper.divContent').height());
// 				$('main .divAddressContent').addClass('passiveTab');
// 					$('#payment').removeClass('adressInfo');
// 					$('#payment').addClass('paymentOptions');
// 				setTimeout(function(){
// 					$('.divWholePaymentWrapper.divContent').css('height','');
// 					$('.divPaymentContent').removeClass('passiveTab');
// 				},600);
// 			});

// 			$('#payment a.edit').click(function(e){
// 				e.preventDefault();
// 				$('.divWholePaymentWrapper.divContent').height($('.divWholePaymentWrapper.divContent').height());
// 				$('.divPaymentContent').addClass('passiveTab');
// 					$('#payment').addClass('adressInfo');
// 					$('#payment').removeClass('paymentOptions');
// 				setTimeout(function(){
// 					$('.divWholePaymentWrapper.divContent').css('height','');
// 					$('main .divAddressContent').removeClass('passiveTab');
// 				},600);
// 			});

// 			$('.divNewAddressContent .addBtn, .divNewAddressContent .cancelAddingNewAddress').click(function(e){
// 				e.preventDefault();
// 				closeOpenOnOptionDiv('main .divAddressContent .divNewAddressContent');
// 				$("#savedAddressRadio").prop("checked", true);
// 				openClosedAsDefaultDiv('.divAddressOptionsWrapper');
// 				$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 				removeProhibitor('main .divAddressContent .divNewAddressContent');
// 			});

// 			$('.addBtn').click(function(e){
// 				e.preventDefault();
// 				closeOpenOnOptionDiv('main .divAddressContent .divInvoiceAddressContent');
// 				$('main .divAddressContent .divInvoiceAddressContent').css({
// 					'opacity':'0',
// 					'-webkit-transform':'scale(0.95)'
// 				});
// 				$("#savedAddressInvoiceRadio").prop("checked", true);
// 				$('.divBillingAddressOptionsWrapper').css({
// 					'position':'relative',
// 					'opacity':'1',
// 					'-webkit-transform':'scale(1)'
// 				})
// 				openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
// 				setTimeout(function(){
// 					removeProhibitor('main .divAddressContent .divNewAddressContent');
// 					$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 					$('.divBillingAddress').height($('.divBillingAddress').find('.innerWrapper').outerHeight());
// 				},900);
// 			});
// 		}
// 	//


// 	// CLOSED SELECTION BOXES'S OPEN AND CLOSE STATES ON RADIO OR CHECKBOX SELECTS
// 		$( "input[name=addressNewOrSaved]:radio" ).change(function(){
// 			if ($('#newAddressRadio').is(':checked')) {
// 				$('.divAddressOptionsWrapper').css({
// 					'-webkit-transform':'scale(0.95)',
// 					'opacity':'0'
// 				})
// 				$('#differentBillingAddress').attr('checked', false);
// 				closeOpenOnOptionDiv('.divAddressContent .divBillingAddress.closedAsDefault');
// 				closeOpenOnOptionDiv('main .divAddressContent .divInvoiceAddressContent');
// 				scrollUserTo('.divAddressText');
// 				closeOpenOnOptionDiv('main .divAddressContent .divInvoiceAddressContent');
// 				$('main .divAddressContent .divInvoiceAddressContent').css({
// 					'opacity':'0',
// 					'-webkit-transform':'scale(0.95)'
// 				});
// 				$("#savedAddressInvoiceRadio").prop("checked", true);
// 				$('.divBillingAddressOptionsWrapper').css({
// 					'position':'relative',
// 					'opacity':'1',
// 					'-webkit-transform':'scale(1)'
// 				})
// 				openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
// 				addProhibitor('.deliveryAddressWrapper', 60 , -30, false);
// 				setTimeout(function(){
// 				$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 				},900);


// 				setTimeout(function(){
// 					openClosedAsDefaultDiv('main .divAddressContent .divNewAddressContent');
// 					closeOpenOnOptionDiv('.divAddressOptionsWrapper');
// 				},450);
// 				$('.pDescription.parentOriented').css({'-webkit-transform':'scale(0.95)','opacity':'0'});
// 				scrollUserTo('.divAddressText');
// 			}
// 			else {
// 				scrollUserTo('.divAddressText');
// 				closeOpenOnOptionDiv('main .divAddressContent .divNewAddressContent');
// 				openClosedAsDefaultDiv('.divAddressOptionsWrapper');
// 				setTimeout(function(){
// 					$('.divAddressOptionsWrapper').css({
// 						'-webkit-transform':'scale(1)',
// 						'opacity':'1'
// 					})
// 					removeProhibitor('.deliveryAddressWrapper');
// 				},700)
// 			}
// 		});

// 			var divBillingAddressClosedHeight = null;
// 		$( "input[name=addressNewOrSavedInvoice]:radio" ).change(function(){
// 			if ($('#newAddressInvoiceRadio').is(':checked')) {
// 				$('.divBillingAddressOptionsWrapper').css({
// 					'position':'absolute',
// 					'opacity':'0',
// 					'-webkit-transform':'scale(0.95)',
// 					'transition-delay':'0s'
// 				})
// 				//$('.divBillingAddress').css('height',$('.divBillingAddress').find('.innerWrapper').outerHeight());
// 				var billingAddressOptionsWrapper = $('.divBillingAddressOptionsWrapper').height()
// 				setTimeout(function(){
// 					closeOpenOnOptionDiv('.divBillingAddressOptionsWrapper');
// 					openClosedAsDefaultDiv('main .divAddressContent .divInvoiceAddressContent');
// 					$('.divBillingAddress').css('height',$('main .divAddressContent .divInvoiceAddressContent').find('.innerWrapper').height() + $('.divBillingAddress').height() - billingAddressOptionsWrapper);
// 					divBillingAddressClosedHeight = $('.divBillingAddress').height();
// 					setTimeout(function(){
// 						$('main .divAddressContent .divInvoiceAddressContent').css({
// 							'opacity':'1',
// 							'-webkit-transform':'scale(1)'
// 						});
// 						setTimeout(function(){
// 							addProhibitor('.billingAddressWrapper',0,-10,true);
// 						},800)
// 					},400);
// 					scrollUserTo('.divBillingAddress');
// 					$('.pDescription.parentOriented').css({'-webkit-transform':'scale(0.95)','opacity':'0'});
// 				},700);
// 			}
// 			else {
// 				$('main .divAddressContent .divInvoiceAddressContent').css({
// 					'opacity':'0',
// 					'-webkit-transform':'scale(0.95)'
// 				});
// 				setTimeout(function(){
// 					closeOpenOnOptionDiv('main .divAddressContent .divInvoiceAddressContent');
// 					scrollUserTo('.divBillingAddress');
// 					openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
// 					setTimeout(function(){
// 						removeProhibitor('main .divAddressContent .divNewAddressContent');
// 						$('.divBillingAddressOptionsWrapper').css({
// 							'position':'relative',
// 							'opacity':'1',
// 							'-webkit-transform':'scale(1)'
// 						});
// 						$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 						setTimeout(function(){
// 							$('.divBillingAddress').height($('.divBillingAddress').find('.innerWrapper').outerHeight());
// 						},100);
// 					},750);
// 				},100);
// 			}
// 		});

// 		$('#differentBillingAddress').change(function(){
// 			if ($(this).is(':checked')) {
// 				if ($('main .divAddressContent .divNewAddressContent').height() == 0) {
// 					openClosedAsDefaultDiv('.divAddressContent .divBillingAddress.closedAsDefault');
// 					setTimeout(function(){
// 						scrollUserTo('.divAddressContent .divBillingAddress.closedAsDefault');
// 					},450)
// 				}
// 				else {
// 					setTimeout(function(){
// 						openClosedAsDefaultDiv('.divAddressContent .divBillingAddress.closedAsDefault');
// 						setTimeout(function(){
// 							scrollUserTo('.divAddressContent .divBillingAddress.closedAsDefault');
// 						},450)
// 					},450);
// 					closeOpenOnOptionDiv('main .divAddressContent .divNewAddressContent');
// 					$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 					$("#savedAddressRadio").prop("checked", true);
// 					$('divAddressContent .divBillingAddress').height( $('divAddressContent .divBillingAddress').height() + $('.divBillingAddressOptionsWrapper').height() );


// 					scrollUserTo('.divAddressText');
// 					closeOpenOnOptionDiv('main .divAddressContent .divNewAddressContent');
// 					openClosedAsDefaultDiv('.divAddressOptionsWrapper');
// 					$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 					setTimeout(function(){
// 						$('.divAddressOptionsWrapper').css({
// 							'-webkit-transform':'scale(1)',
// 							'opacity':'1'
// 						})
// 					},700)

// 				}
// 			}
// 			else {
// 				closeOpenOnOptionDiv('.divAddressContent .divBillingAddress.closedAsDefault');
// 				closeOpenOnOptionDiv('main .divAddressContent .divInvoiceAddressContent');
// 				scrollUserTo('.divAddressText');
// 				closeOpenOnOptionDiv('main .divAddressContent .divInvoiceAddressContent');
// 				$('main .divAddressContent .divInvoiceAddressContent').css({
// 					'opacity':'0',
// 					'-webkit-transform':'scale(0.95)'
// 				});
// 				$("#savedAddressInvoiceRadio").prop("checked", true);
// 				$('.divBillingAddressOptionsWrapper').css({
// 					'position':'relative',
// 					'opacity':'1',
// 					'-webkit-transform':'scale(1)'
// 				})
// 				openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
// 				setTimeout(function(){
// 				$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
// 				},900);
// 			}
// 		});

// 		$('#anotherRecipient').change(function(){
// 			if ($(this).is(':checked')) {
// 				setTimeout(function(){
// 					openClosedAsDefaultDiv('.divAnotherRecipient .divAnotherRecipientContent');
// 				},350)
// 				scrollSanitizer('.divAnotherRecipient .divAnotherRecipientContent');
// 			}

// 			else {
// 				closeOpenOnOptionDiv('.divAnotherRecipient .divAnotherRecipientContent');
// 			}

// 		});

// 		$('#giftNoteThis').change(function(){
// 			if ($(this).is(':checked')) {
// 				setTimeout(function(){
// 					openClosedAsDefaultDiv('.divGiftNoteTextareaWrapper');
// 				},350);
// 				scrollSanitizer('.divGiftNoteTextareaWrapper')
// 			}
// 			else {
// 				closeOpenOnOptionDiv('.divGiftNoteTextareaWrapper');
// 			}

// 		});
// 	//


// 	// ROOT OPEN AND CLOSE FUNCTIONS
// 		function openClosedAsDefaultDiv(divOpenOnOption, addressId) {
// 			//Eğer buradaki addressId variable'ı yanlızca address optionlar'dan...
// 			//veri alırken kolaylık olması amacıyla yazıldı
// 				$(divOpenOnOption).css('height',$(divOpenOnOption).find('.innerWrapper').outerHeight());
// 				$(divOpenOnOption).addClass('openOnOption');
// 		}

// 		function closeOpenOnOptionDiv(divOpenOnOption) {
// 				$(divOpenOnOption).css('height','');
// 				$(divOpenOnOption).removeClass('openOnOption');
// 		}
// 	//

// 	//MANAGE PAGE SCROLLING
// 	function scrollUserTo(scrolledElement) {
// 		var scrollDestination = $(scrolledElement).offset().top -100;
// 		$('html,body').animate({scrollTop: scrollDestination }, '300');
// 	}
// 	function scrollSanitizer(sanitizedElement) {
// 		var elementDestination = $(sanitizedElement).offset().top + 200;
// 		var windowDestination = scrollTopVal+wH;
// 		var sanitizingDestination = elementDestination-wH+100;

// 		if (elementDestination > windowDestination) {
// 			$('html,body').animate({scrollTop: sanitizingDestination }, '300');
// 		};
// 		//$('html,body').animate({scrollTop: scrollDestination }, '500');
// 	}
// 	//
// 	function addProhibitor(activeElement, customTopValue, customHeightValue, upperProhibitor) {

// 		var actualOffset = $(activeElement).offset().top - $(activeElement).parent().offset().top
// 		$('div.divAddressContent').append('<div class="prohibitorOverlay">');
// 		$('.prohibitorOverlay').css({
// 			'opacity':'1',
// 			'height': ($('.divAddress-Payment-Content div.divAddressContent').outerHeight() - actualOffset - $(activeElement).height() + customHeightValue),
// 			'top': (actualOffset + $(activeElement).height() + customTopValue)
// 		});

// 		if (upperProhibitor) {
// 			$('div.divAddressContent').append('<div class="prohibitorOverlay prohibitorOverlayUpper">');
// 			$('.prohibitorOverlay.prohibitorOverlayUpper').css({
// 				'opacity':'1',
// 				'height':(actualOffset),
// 				'top': (0)
// 			});
// 		}

// 		else {
// 			$('.saveBtn').first().after('<div class="miniProhibitorOverlay">');
// 			$('.miniProhibitorOverlay').css({
// 				'opacity':'1',
// 				'height':( $('.saveBtn').outerHeight()+30 ),
// 				'width':( $('.saveBtn').outerWidth()+30 ),
// 			});
// 		}

// 	}
// 	function removeProhibitor(activeElement) {
// 		$('.prohibitorOverlay, .miniProhibitorOverlay').css('opacity','0')
// 		setTimeout(function(){
// 			$('.prohibitorOverlay').remove();
// 			$('.prohibitorOverlayUpper').remove();
// 			$('.miniProhibitorOverlay').remove();
// 		},350);
// 	}
// }

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

