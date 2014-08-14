enoughtTimeStoppedToLoadItems = true;

$(document).ready(function () {
	paymentDynamics();
});

$(window).load(function(){
});

function paymentDynamics() {

		$('.divAddressContent #sampleD').change(function(){
			if ($(this).is(':checked')) {
				$('.divBillingAddress').addClass('billingAddressOff');
			}
			else {
				$('.divBillingAddress').removeClass('billingAddressOff');
			}
		});

		$('.divAddressContent .divAddressOption label input[type="radio"]').change(function(){
			$('.divAddressContent .divAddressOption').removeClass('active');
			$(this).parents('.divAddressOption').addClass('active');
		});


	if (!isMobile) {

		$('.divAddressContent a.saveBtn, .divAddressContent a.saveBtnA').click(function(){
			setupTabs('payment');
		});

		$('.divAddress a.edit').click(function(){
			setupTabs('address');
		});

		$('.divPay .paymentBtn').click(function(e){
			orderComplete(e);
		});

		$('.aNewAddress').click(function (){
			setupNewAddressForm(e);
		});

		$('.addBtn.addingNewAddress.saveAddingNewAddress').click(function (){
			saveNewAddress(e);
		});

		$('a.addBtn.addingNewAddress.cancelAddingNewAddress').click(function (){
			cancelNewAddress(e);
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
		$(this).bind('touchend', function(){
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

function setupNewAddressForm() {
	$('.divAddressContent').addClass('divAddNewAddressOff');
	$('.divAddNewAddress').removeClass('divAddNewAddressOff');
}

function setupTabs(status) {
		if (status == 'payment') {
			$('#payment').removeClass('adressInfo');
			$('#payment').addClass('paymentOptions');
		}
		else if (status == 'address') {
			$('#payment').addClass('adressInfo');
			$('#payment').removeClass('paymentOptions');
		}
}

function orderComplete() {
		window.location.replace('OrderCompleted.html');
}

function saveNewAddress() {
	$('.divAddressContent').removeClass('divAddNewAddressOff');
	$('.divAddNewAddress').addClass('divAddNewAddressOff');
}

function cancelNewAddress(e) {
	if (e != null) e.preventDefault();
		
		$('.divAddNewAddress').css({
			'transition':'all 0.3s',
			'opacity':'0'
		})
		setTimeout(function(){
			$('.divAddressContent').removeClass('divAddNewAddressOff');
			$('.divAddNewAddress').addClass('divAddNewAddressOff');
		},300);
}



















