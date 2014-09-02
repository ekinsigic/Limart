enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
	paymentDynamics();
});

$(window).load(function(){
});


var activePaymentOption = null;
function paymentDynamics() {


	openClosedAsDefaultDiv('.divAddressOptionsWrapper');
	openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');

	// ADDRESS SELECT ADDRESS BOXES ACTIVE PASSIVE STATES
		$( "input[name=addressSelect]:radio" ).change(function(){
			$(this).parents('.divAddressContent').find('.divAddressOption.active').removeClass('active');
			$(this).parents('.divAddressOption').addClass('active');
		});

		$( "input[name=invoiceAddressSelect]:radio" ).change(function(){
			$(this).parents('.divAddressContent').find('.addressNewOrSavedInvoice ~ .divAddressOptionsWrapper .divAddressOption.active').removeClass('active');
			$(this).parents('.divAddressOption').addClass('active');
		});

		$( "input[name=wireTransferType]:radio" ).change(function(){
			$(this).parents('.optionBox').find('.divWirePaymentOption.active').removeClass('active');
			$(this).parents('.divWirePaymentOption').addClass('active');
		});5
	//


	// CLICK / TAP FUNCTIONS
		if (isMobile) {

			$('.paymentOptions .singlePaymentOption').bind('touchstart',function(e){
				isScroll = false;
				$(this).bind('touchmove',function(){
					isScroll = true;
				});
				$(this).bind('touchend',function(){
					var selectedOption = $(this).attr('data-payment-selection');
					if (selectedOption !== activePaymentOption) {
						activePaymentOption = selectedOption
						$('.paymentOptions .singlePaymentOption').each(function(){
							$(this).removeClass('activeOption');
						});
						$(this).addClass('activeOption');
						var selectedOption = $(this).attr('data-payment-selection');
						$('.divPaymentContent .optionBox').each(function(){
							$(this).css({
								'opacity':'0',
								'transition':'all 0.7s',
								'-webkit-transform':'scale(0.95)'
							});
						});
						setTimeout(function(){
							$('.divPaymentContent .optionBox').each(function(e){
								$(this).removeClass('activePayment');
							});
							$('.divPaymentContent').find('.'+selectedOption).addClass('activePayment');
							setTimeout(function(){
								$('.divPaymentContent .optionBox').each(function(){
									$(this).css({
										'opacity':'1',
										'-webkit-transform':'scale(1)'
									});
								});
							},10)
						},900);
					};

				});
			});

			$('.divAddressContent .saveBtn, .divAddressContent .saveBtnA').bind('touchstart',function(e){
				isScroll = false;
				$(this).bind('touchmove',function(){
					isScroll = true;
				});
				$(this).bind('touchend',function(){
					e.preventDefault();
					$('main').height($('main').height());
					setTimeout(function(){
						$('main').css('height','');
						$('.divPaymentContent').removeClass('passiveSegment');
						$('#payment').removeClass('adressInfo');
						$('#payment').addClass('paymentOptions');
					},600);
					$('main .divContent').addClass('passiveSegment');
				});
			});

			$('#payment a.edit').bind('touchstart',function(e){
				isScroll = false;
				$(this).bind('touchmove',function(){
					isScroll = true;
				});
				$(this).bind('touchend',function(){
					e.preventDefault();
					$('main').height($('main').height());
					setTimeout(function(){
						$('main').css('height','');
						$('#payment').addClass('adressInfo');
						$('#payment').removeClass('paymentOptions');
						$('main .divContent').removeClass('passiveSegment');
					},600);
					$('.divPaymentContent').addClass('passiveSegment');
				});
			});

			$('.divAddNewAddress .addBtn, .divAddNewAddress .cancelAddingNewAddress').bind('touchstart',function(e){
				isScroll = false;
				$(this).bind('touchmove',function(){
					isScroll = true;
				});
				$(this).bind('touchend',function(){
					e.preventDefault();
					closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
				});
			});

			$('.divAddNewInvoiceAddress .cancelAddingNewInvoiceAddress, .divAddNewInvoiceAddress .saveAddingNewInvoiceAddress').bind('touchstart',function(e){
				isScroll = false;
				$(this).bind('touchmove',function(){
					isScroll = true;
				});
				$(this).bind('touchend',function(){
					e.preventDefault();
					closeOpenOnOptionDiv('main .divContent .divAddNewInvoiceAddress');
				});
			});
		}

		else {

			$('.paymentOptions .singlePaymentOption').click(function(e){
				var selectedOption = $(this).attr('data-payment-selection');
				if (activePaymentOption !== selectedOption) {
					activePaymentOption = selectedOption
					$('.paymentOptions .singlePaymentOption').each(function(){
						$(this).removeClass('activeOption');
					});
					$(this).addClass('activeOption');
					$('.divPaymentContent .optionBox').each(function(){
						$(this).css({
							'opacity':'0',
							'transition':'all 0.7s',
							'-webkit-transform':'scale(0.95)'
						});
					});
					setTimeout(function(){
						$('.divPaymentContent .optionBox').each(function(){
							$(this).removeClass('activePayment');
						});
						$('.divPaymentContent').find('.'+selectedOption).addClass('activePayment');
						setTimeout(function(){
							$('.divPaymentContent .optionBox').each(function(){
								$(this).css({
									'opacity':'1',
									'-webkit-transform':'scale(1)'
								});
							});
						},10)
					},900);
				};


			});

			$('.divAddressContent .saveBtn, .divAddressContent .saveBtnA').click(function(e){
				e.preventDefault();
				$('.divOverallPaymentWrapper').height($('.divOverallPaymentWrapper').height());
				setTimeout(function(){
					$('.divOverallPaymentWrapper').css('height','');
					$('.divPaymentContent').removeClass('passiveSegment');
					$('#payment').removeClass('adressInfo');
					$('#payment').addClass('paymentOptions');
				},600);
				$('main .divContent').addClass('passiveSegment');
			});

			$('#payment a.edit').click(function(e){
				e.preventDefault();
				$('.divOverallPaymentWrapper').height($('.divOverallPaymentWrapper').height());
				setTimeout(function(){
					$('.divOverallPaymentWrapper').css('height','');
					$('#payment').addClass('adressInfo');
					$('#payment').removeClass('paymentOptions');
					$('main .divContent').removeClass('passiveSegment');
				},600);
				$('.divPaymentContent').addClass('passiveSegment');
			});

			$('.divAddNewAddress .addBtn, .divAddNewAddress .cancelAddingNewAddress').click(function(e){
				e.preventDefault();
				closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
				$("#savedAddressRadio").prop("checked", true);
				openClosedAsDefaultDiv('.divAddressOptionsWrapper');
				$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
				removeProhibitor('main .divContent .divAddNewAddress');
			});

			$('.divAddNewInvoiceAddress .cancelAddingNewInvoiceAddress, .divAddNewInvoiceAddress .saveAddingNewInvoiceAddress').click(function(e){
				e.preventDefault();
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'0',
					'-webkit-transform':'scale(0.95)'
				});
				$("#savedAddressInvoiceRadio").prop("checked", true);
				$('.divBillingAddressOptionsWrapper').css({
					'position':'relative',
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				})
				openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
				setTimeout(function(){
					removeProhibitor('main .divContent .divAddNewAddress');
					$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
					$('.divBillingAddress').height($('.divBillingAddress').find('.innerWrapper').outerHeight());
				},900);
			});
		}
	//


	// CLOSED SELECTION BOXES'S OPEN AND CLOSE STATES ON RADIO OR CHECKBOX SELECTS
		$( "input[name=addressNewOrSaved]:radio" ).change(function(){
			if ($('#newAddressRadio').is(':checked')) {
				$('.divAddressOptionsWrapper').css({
					'-webkit-transform':'scale(0.95)',
					'opacity':'0'
				})
				$('#differentBillingAddress').attr('checked', false);
				closeOpenOnOptionDiv('.divAddressContent .divBillingAddress.closedAsDefault');
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				scrollUserTo('.divAddressText');
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'0',
					'-webkit-transform':'scale(0.95)'
				});
				$("#savedAddressInvoiceRadio").prop("checked", true);
				$('.divBillingAddressOptionsWrapper').css({
					'position':'relative',
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				})
				openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
				addProhibitor('.deliveryAddressWrapper', 60 , -30, false);
				setTimeout(function(){
				$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
				},900);


				setTimeout(function(){
					openClosedAsDefaultDiv('main .divContent .divAddNewAddress');
					closeOpenOnOptionDiv('.divAddressOptionsWrapper');
				},450);
				$('.pDescription.parentOriented').css({'-webkit-transform':'scale(0.95)','opacity':'0'});
				scrollUserTo('.divAddressText');
			}
			else {
				scrollUserTo('.divAddressText');
				closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
				openClosedAsDefaultDiv('.divAddressOptionsWrapper');
				setTimeout(function(){
					$('.divAddressOptionsWrapper').css({
						'-webkit-transform':'scale(1)',
						'opacity':'1'
					})
					removeProhibitor('.deliveryAddressWrapper');
				},700)
			}
		});

			var divBillingAddressClosedHeight = null;
		$( "input[name=addressNewOrSavedInvoice]:radio" ).change(function(){
			if ($('#newAddressInvoiceRadio').is(':checked')) {
				$('.divBillingAddressOptionsWrapper').css({
					'position':'absolute',
					'opacity':'0',
					'-webkit-transform':'scale(0.95)',
					'transition-delay':'0s'
				})
				//$('.divBillingAddress').css('height',$('.divBillingAddress').find('.innerWrapper').outerHeight());
				var billingAddressOptionsWrapper = $('.divBillingAddressOptionsWrapper').height()
				setTimeout(function(){
					closeOpenOnOptionDiv('.divBillingAddressOptionsWrapper');
					openClosedAsDefaultDiv('main .divContent .divInvoiceAddressContent');
					$('.divBillingAddress').css('height',$('main .divContent .divInvoiceAddressContent').find('.innerWrapper').height() + $('.divBillingAddress').height() - billingAddressOptionsWrapper);
					divBillingAddressClosedHeight = $('.divBillingAddress').height();
					setTimeout(function(){
						$('main .divContent .divInvoiceAddressContent').css({
							'opacity':'1',
							'-webkit-transform':'scale(1)'
						});
						setTimeout(function(){
							addProhibitor('.billingAddressWrapper',0,-10,true);
						},800)
					},400);
					scrollUserTo('.divBillingAddress');
					$('.pDescription.parentOriented').css({'-webkit-transform':'scale(0.95)','opacity':'0'});
				},700);
			}
			else {
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'0',
					'-webkit-transform':'scale(0.95)'
				});
				setTimeout(function(){
					closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
					scrollUserTo('.divBillingAddress');
					openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
					setTimeout(function(){
						removeProhibitor('main .divContent .divAddNewAddress');
						$('.divBillingAddressOptionsWrapper').css({
							'position':'relative',
							'opacity':'1',
							'-webkit-transform':'scale(1)'
						});
						$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
						setTimeout(function(){
							$('.divBillingAddress').height($('.divBillingAddress').find('.innerWrapper').outerHeight());
						},100);
					},750);
				},100);
			}
		});

		$('#differentBillingAddress').change(function(){
			if ($(this).is(':checked')) {
				if ($('main .divContent .divAddNewAddress').height() == 0) {
					openClosedAsDefaultDiv('.divAddressContent .divBillingAddress.closedAsDefault');
					setTimeout(function(){
						scrollUserTo('.divAddressContent .divBillingAddress.closedAsDefault');
					},450)
				}
				else {
					setTimeout(function(){
						openClosedAsDefaultDiv('.divAddressContent .divBillingAddress.closedAsDefault');
						setTimeout(function(){
							scrollUserTo('.divAddressContent .divBillingAddress.closedAsDefault');
						},450)
					},450);
					closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
					$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
					$("#savedAddressRadio").prop("checked", true);
					$('divAddressContent .divBillingAddress').height( $('divAddressContent .divBillingAddress').height() + $('.divBillingAddressOptionsWrapper').height() );


					scrollUserTo('.divAddressText');
					closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
					openClosedAsDefaultDiv('.divAddressOptionsWrapper');
					$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
					setTimeout(function(){
						$('.divAddressOptionsWrapper').css({
							'-webkit-transform':'scale(1)',
							'opacity':'1'
						})
					},700)

				}
			}
			else {
				closeOpenOnOptionDiv('.divAddressContent .divBillingAddress.closedAsDefault');
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				scrollUserTo('.divAddressText');
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'0',
					'-webkit-transform':'scale(0.95)'
				});
				$("#savedAddressInvoiceRadio").prop("checked", true);
				$('.divBillingAddressOptionsWrapper').css({
					'position':'relative',
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				})
				openClosedAsDefaultDiv('.divBillingAddressOptionsWrapper');
				setTimeout(function(){
				$('.pDescription').css({'-webkit-transform':'scale(1)','opacity':'1'});
				},900);
			}
		});

		$('#someoneElse').change(function(){
			if ($(this).is(':checked')) {
				setTimeout(function(){
					openClosedAsDefaultDiv('.sendToSomeoneElse .sendToSomeoneElseDetails');
				},350)
				scrollSanitizer('.sendToSomeoneElse .sendToSomeoneElseDetails');
			}

			else {
				closeOpenOnOptionDiv('.sendToSomeoneElse .sendToSomeoneElseDetails');
			}

		});

		$('#giftNoteThis').change(function(){
			if ($(this).is(':checked')) {
				setTimeout(function(){
					openClosedAsDefaultDiv('.giftNoteTextareaWrapper');
				},350);
				scrollSanitizer('.giftNoteTextareaWrapper')
			}

			else {
				closeOpenOnOptionDiv('.giftNoteTextareaWrapper');
			}

		});
	//


	// ROOT OPEN AND CLOSE FUNCTIONS
		function openClosedAsDefaultDiv(divOpenOnOption) {
				$(divOpenOnOption).css('height',$(divOpenOnOption).find('.innerWrapper').outerHeight());
				$(divOpenOnOption).addClass('openOnOption');
		}

		function closeOpenOnOptionDiv(divOpenOnOption) {
				$(divOpenOnOption).css('height','');
				$(divOpenOnOption).removeClass('openOnOption');
		}
	//

	//MANAGE PAGE SCROLLING
	function scrollUserTo(scrolledElement) {
		var scrollDestination = $(scrolledElement).offset().top -100;
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
	function addProhibitor(activeElement, customTopValue, customHeightValue, upperProhibitor) {

		var actualOffset = $(activeElement).offset().top - $(activeElement).parent().offset().top
		$('div.divAddressContent').append('<div class="prohibitorOverlay">');
		$('.prohibitorOverlay').css({
			'opacity':'1',
			'height':( $('#address div.divContent').outerHeight() - actualOffset - $(activeElement).height() + customHeightValue),
			'top': (actualOffset + $(activeElement).height() + customTopValue)
		});
		if (upperProhibitor) {
			$('div.divAddressContent').append('<div class="prohibitorOverlay prohibitorOverlayUpper">');
			$('.prohibitorOverlay.prohibitorOverlayUpper').css({
				'opacity':'1',
				'height':(actualOffset),
				'top': (0)
			})
		}
		else {
			$('.saveBtn').first().after('<div class="miniProhibitorOverlay">');
			$('.miniProhibitorOverlay').css({
				'opacity':'1',
				'height':( $('.saveBtn').outerHeight()+30 ),
				'width':( $('.saveBtn').outerWidth()+30 ),
			});
		}
	}
	function removeProhibitor(activeElement) {
		$('.prohibitorOverlay, .miniProhibitorOverlay').css('opacity','0')
		setTimeout(function(){
			$('.prohibitorOverlay').remove();
			$('.prohibitorOverlayUpper').remove();
			$('.miniProhibitorOverlay').remove();
		},350);
	}
}