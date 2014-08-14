enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
	paymentDynamics();
});

$(window).load(function(){
});

var originalDivBillingAddressHeight = -1;

function paymentDynamics() {
		$('#differentBillingAddress').change(function(){

if(originalDivBillingAddressHeight == -1) originalDivBillingAddressHeight = $('.divBillingAddress').height();

				if (!$('#differentBillingAddress').is(':checked')) {

					
					$('.divBillingAddress').css({
						'height':'0px',
						'transition':'all 0.7s',
						'overflow':'hidden',
						'margin':'0px',
						'opacity':'0',
						'-webkit-transform':'scale(0.9)'
					});

					setTimeout(function(){
						$('.divBillingAddress').addClass('billingAddressOff');
					},700);
				}
				else {


					$('.divBillingAddress').css({
						'height':'0px',
						'transition':'all 0.0s',
						'overflow':'hidden',
						'margin':'0px',
						'opacity':'0',
						'-webkit-transform':'scale(0.8)'
					});

					$('.divBillingAddress').removeClass('billingAddressOff');

					setTimeout(function(){
						$('.divBillingAddress').css({
							'height': originalDivBillingAddressHeight,
							'transition':'all 0.7s',
							'overflow':'hidden',
							'opacity':'1',
							'-webkit-transform':'scale(1)'
						});
					},5)
				}
		});

		$('#giftNoteThis').change(function(){
			transitions('.orderDetailNotes');
			setTimeout(function(){
				if ($('#giftNoteThis').is(':checked')) {
					$('.giftNoteTextarea').addClass('innerPaymentMakeVisible');
				}
				else {
					$('.giftNoteTextarea').removeClass('innerPaymentMakeVisible');
				}
			},700)
		});

		$('#someoneElse').change(function(){
			transitions('.sendToSomeoneElse');
			setTimeout(function(){
				if ($('#someoneElse').is(':checked')) {
					$('.sendToSomeoneElseDetails').addClass('innerPaymentMakeVisible');
				}
				else {
					$('.sendToSomeoneElseDetails').removeClass('innerPaymentMakeVisible');
				}
			},700)
		});

		$('#newAddressRadio').change(function(){
			transitions('.divAddressContent');
			setTimeout(function(){
				if ($('#newAddressRadio').is(':checked')) {
					$('.divAddressContent').addClass('divAddNewAddressOff');
					$('.divAddNewAddress').removeClass('divAddNewAddressOff');
				}
			},700)
		});

		$('#newAddressInvoiceRadio').change(function(){
			transitions('.divAddressContent');
			setTimeout(function(){
				if ($('#newAddressInvoiceRadio').is(':checked')) {
					$('.divAddressContent').addClass('divAddNewAddressOff');
					$('.divAddNewAddress').removeClass('divAddNewAddressOff');
				}
			},700)
		});


		$('.divAddressContent .divAddressOption label input[type="radio"]').change(function(){
			$('.divAddressContent .divAddressOption').removeClass('active');
			$(this).parents('.divAddressOption').addClass('active');
		});

		$('.divPaymentContent .divWirePaymentOption label input[type="radio"]').change(function(){
			$('.divPaymentContent .divWirePaymentOption').removeClass('active');
			$(this).parents('.divWirePaymentOption').addClass('active');
		});


	if (!isMobile) {

		$('.divAddressContent a.saveBtn, .divAddressContent a.saveBtnA').click(function(e){
			setupTabs('payment', e);
		});

		$('.divAddress a.edit').click(function(e){
			setupTabs('address', e);
		});

		$('.divPay .paymentBtn').click(function(e){
			orderComplete();
		});

		$('.aNewAddress').click(function(e){
			setupNewAddressForm(e);
		});

		$('.addBtn.addingNewAddress.saveAddingNewAddress').click(function (){
			saveNewAddress();
		});

		$('a.addBtn.addingNewAddress.cancelAddingNewAddress').click(function (e){
			cancelNewAddress(e);
		});

		$('.divPaymentContent .paymentOptions .singlePaymentOption').click(function (){
			paymentOptions($(this));
		});
	}


	else {
		mobileTap('.divAddress a.edit', 'openAddressTab');
		mobileTap('.divPay .paymentBtn', 'openPaymentTab');
		mobileTap('.addBtn.addingNewAddress.saveAddingNewAddress', 'saveNewAddress');
		mobileTap('.addBtn.addingNewAddress.cancelAddingNewAddress', 'cancelNewAddress');
		mobileTap('.divPaymentContent .paymentOptions .singlePaymentOption', 'paymentOptions');
	}

}


function mobileTap(appliedElement, functionName) {
	$(appliedElement).bind('touchstart', function(e){
		var isScroll = false
		$(this).bind('touchmove', function(){
			isScroll = true
		});
		$(this).bind('touchend', function(e){
			if (!isScroll) {
				if (functionName == 'newAddress') {
					setupNewAddressForm();
				}
				else if (functionName == 'openPaymentTab') {
					setupTabs('payment');
				}
				else if (functionName == 'openAddressTab') {
					setupTabs('address');
				}
				else if (functionName == 'orderComplete') {
					orderComplete();
				}
				else if (functionName == 'saveNewAddress') {
					saveNewAddress();
				}
				else if (functionName == 'cancelNewAddress') {
					cancelNewAddress(e);
				}
				else if (functionName == 'paymentOptions') {
					paymentOptions($(this));
				}
			};
		})
	});
}

function setupNewAddressForm(e) {
	e.preventDefault()
	transitions('#address');
	setTimeout(function(){
		$('.divAddressContent').addClass('divAddNewAddressOff');
		$('.divAddNewAddress').removeClass('divAddNewAddressOff');
	},700);
}

function setupTabs(status,e) {
		e.preventDefault();
		if (status == 'payment') {
			transitions('#address', 'big');
			setTimeout(function(){
				$('#payment').removeClass('adressInfo');
				$('#payment').addClass('paymentOptions');
			},700)
		}
		else if (status == 'address') {
			transitions('#address', 'big');
			setTimeout(function(){
				$('#payment').addClass('adressInfo');
				$('#payment').removeClass('paymentOptions');
			},700);
		}
}

function orderComplete() {
		window.location.replace('OrderCompleted.html');
}

function saveNewAddress() {
	transitions('#address');
	setTimeout(function(){
		$('.divAddressContent').removeClass('divAddNewAddressOff');
		$('.divAddNewAddress').addClass('divAddNewAddressOff');
	},700);
}

function cancelNewAddress(e) {
	if (e != null) e.preventDefault();
		transitions('#address');
		setTimeout(function(){
			$('.divAddressContent').removeClass('divAddNewAddressOff');
			$('.divAddNewAddress').addClass('divAddNewAddressOff');
		},700);
}


function paymentOptions(selectedElement) {
	var selectedPayment = selectedElement.attr('data-payment-selection');
	$('.singlePaymentOption').each(function(){
		$(this).removeClass('activeOption');
	});
	selectedElement.addClass('activeOption');
	transitions('.optionBox.activePayment');
	setTimeout(function(){
		$('.optionBox').each(function(){
			$(this).removeClass('activePayment');
		});
		$('.divPaymentContent').find('.'+selectedPayment).addClass('activePayment');
	},700);
}





function transitions(elementName, transitionType) {
	$('body').animate({scrollTop: $(elementName).offset().top - 100}, '700');
	if (elementName == null) {
		elementName = '.divAddressContent';
	};
	if (transitionType == null) {
		transitionType = 'small'
	};

	if (transitionType == 'small') {
		$(elementName).css({
			'transition':'all 0.7s',
			'opacity':'0'
		})
		setTimeout(function(){
			$(elementName).css({
				'transition':'all 0.7s',
				'opacity':'1'
			})
		},700);
	}
	else if (transitionType == 'big') {
		$(elementName).css({
			'transition':'all 0.7s',
			'opacity':'0',
			'-webkit-transform':'scale(0.98)'
		})
		setTimeout(function(){
			$(elementName).css({
				'transition':'all 0.7s',
				'opacity':'1',
				'-webkit-transform':'scale(1)'
			})
		},700);
	}

}










