enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
	paymentDynamics();
});

$(window).load(function(){
});

function paymentDynamics() {

		$('.divAddressContent label input[type="checkbox"]#sampleD').change(function(){
			transitions('#payment');
			setTimeout(function(){
				if ($('.divAddressContent #sampleD').is(':checked')) {
					$('.divBillingAddress').addClass('billingAddressOff');
				}
				else {
					$('.divBillingAddress').removeClass('billingAddressOff');
				}
			},700)
		});

		$('#newAddressRadio').change(function(){
			transitions('#payment');
			setTimeout(function(){
				if ($('#newAddressRadio').is(':checked')) {
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


	/////////////////////
////YAPILACAKLAR!!! PAYMENT SUBMIT BUTTON A ÇEVİRİLECEK VE POST EDİLECEK

////ANİMASYONLAR

	/////////////////////	


	else {
		mobileTap('.divAddress a.edit', 'openAddressTab');
		mobileTap('.divPay .paymentBtn', 'openPaymentTab');
		mobileTap('.addBtn.addingNewAddress.saveAddingNewAddress', 'saveNewAddress');
		mobileTap('.addBtn.addingNewAddress.cancelAddingNewAddress', 'cancelNewAddress');
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
			};
		})
	});
}

function setupNewAddressForm(e) {
	e.preventDefault()
	transitions('#payment');
	setTimeout(function(){
		$('.divAddressContent').addClass('divAddNewAddressOff');
		$('.divAddNewAddress').removeClass('divAddNewAddressOff');
	},700);
}

function setupTabs(status,e) {
		e.preventDefault();
		if (status == 'payment') {
			transitions('#payment');
			setTimeout(function(){
				$('#payment').removeClass('adressInfo');
				$('#payment').addClass('paymentOptions');
			},700)
		}
		else if (status == 'address') {
			transitions('#payment');
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
	transitions('#payment');
	setTimeout(function(){
		$('.divAddressContent').removeClass('divAddNewAddressOff');
		$('.divAddNewAddress').addClass('divAddNewAddressOff');
	},700);
}

function cancelNewAddress(e) {
	if (e != null) e.preventDefault();
		transitions('#payment');
		setTimeout(function(){
			$('.divAddressContent').removeClass('divAddNewAddressOff');
			$('.divAddNewAddress').addClass('divAddNewAddressOff');
		},700);
}


function transitions(elementName) {
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

function paymentOptions(selectedElement) {
	var selectedPayment = selectedElement.attr('data-payment-selection');
	$('.singlePaymentOption').each(function(){
		$(this).removeClass('activeOption');
	});
	selectedElement.addClass('activeOption');
	transitions('.divPaymentContent');
	setTimeout(function(){
		$('.optionBox').each(function(){
			$(this).removeClass('activePayment');
		});
		$('.divPaymentContent').find('.'+selectedPayment).addClass('activePayment');
	},700);
}














