enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
	paymentDynamics();
});

$(window).load(function(){
});

function paymentDynamics() {
	// ADDRESS SELECT ADDRESS BOXES ACTIVE PASSIVE STATES
		$( "input[name=addressSelect]:radio" ).change(function(){
			$(this).parents('.divAddressContent').find('.divAddressOption.active').removeClass('active');
			$(this).parents('.divAddressOption').addClass('active');
		});

		$( "input[name=invoiceAddressSelect]:radio" ).change(function(){
			$(this).parents('.divAddressContent').find('.addressNewOrSavedInvoice ~ .divAddressOption.active').removeClass('active');
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
					},700);
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
				},700);

			});

			$('.divAddressContent .saveBtn, .divAddressContent .saveBtnA').click(function(e){
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

			$('#payment a.edit').click(function(e){
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

			$('.divAddNewAddress .addBtn, .divAddNewAddress .cancelAddingNewAddress').click(function(e){
				e.preventDefault();
				closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
				$("#savedAddressRadio").prop("checked", true);
			});

			$('.divAddNewInvoiceAddress .cancelAddingNewInvoiceAddress, .divAddNewInvoiceAddress .saveAddingNewInvoiceAddress').click(function(e){
				e.preventDefault();
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'0',
					'-webkit-transform':'scale(0.95)'
				});
				setTimeout(function(){
					$('.divBillingAddress').height(divBillingAddressClosedHeight);
				},200);
				$("#savedAddressInvoiceRadio").prop("checked", true);
			});
		}
	//


	// CLOSED SELECTION BOXES'S OPEN AND CLOSE STATES ON RADIO OR CHECKBOX SELECTS
		$( "input[name=addressNewOrSaved]:radio" ).change(function(){
			if ($('#newAddressRadio').is(':checked')) {
				openClosedAsDefaultDiv('main .divContent .divAddNewAddress');
			}
			else {
				closeOpenOnOptionDiv('main .divContent .divAddNewAddress');
			}
		});

			var divBillingAddressClosedHeight = null;
		$( "input[name=addressNewOrSavedInvoice]:radio" ).change(function(){
			if ($('#newAddressInvoiceRadio').is(':checked')) {
				openClosedAsDefaultDiv('main .divContent .divInvoiceAddressContent');
				$('.divBillingAddress').css('height',$('main .divContent .divInvoiceAddressContent').find('.innerWrapper').outerHeight() + $('.divBillingAddress').height());
				divBillingAddressClosedHeight = $('.divBillingAddress').height();
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				});
			}
			else {
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
				$('main .divContent .divInvoiceAddressContent').css({
					'opacity':'0',
					'-webkit-transform':'scale(0.95)'
				});
				setTimeout(function(){
					$('.divBillingAddress').height(divBillingAddressClosedHeight);
				},200);
			}
		});

		$('#differentBillingAddress').change(function(){
			if ($(this).is(':checked')) {
				openClosedAsDefaultDiv('.divAddressContent .divBillingAddress.closedAsDefault');
			}
			else {
				closeOpenOnOptionDiv('.divAddressContent .divBillingAddress.closedAsDefault');
				closeOpenOnOptionDiv('main .divContent .divInvoiceAddressContent');
			}
		});

		$('#someoneElse').change(function(){
			if ($(this).is(':checked')) {
				openClosedAsDefaultDiv('.sendToSomeoneElse .sendToSomeoneElseDetails');
			}
			else {
				closeOpenOnOptionDiv('.sendToSomeoneElse .sendToSomeoneElseDetails');
			}
		});

		$('#giftNoteThis').change(function(){
			if ($(this).is(':checked')) {
				openClosedAsDefaultDiv('.giftNoteTextareaWrapper');
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
}