$(document).ready(function(){
	deliveryAddressRadioChange();
	invoiceAddressRadioChange();
	personalOrCorporateRadioChange();
	openCloseElements('#cbAddressSelection2','.billingAddressWrapper');
	openCloseElements('#cbDifferentPerson','.divAnotherRecipientContent');
	openCloseElements('#cbGiftNote','.divGiftNoteTextareaWrapper');
	radioActions();
	SSTPopUp('#membershipAgreement');

	$('input[name="group1"]').each(function(){
		$(this).change(function(){
			deliveryAddressRadioChange();
		})
	});
	$('input[name="group2"]').each(function(){
		$(this).change(function(){
			invoiceAddressRadioChange();
		})
	});
	$('input[name="personalOrCorporate"]').each(function(){
		$(this).change(function(){
			personalOrCorporateRadioChange();
		})
	});

		$('#cbAddressSelection2').change(function(){
			openCloseElements('#cbAddressSelection2','.billingAddressWrapper');
		});
		$('#cbDifferentPerson').change(function(){
			openCloseElements('#cbDifferentPerson','.divAnotherRecipientContent');
		});
		$('#cbGiftNote').change(function(){
			openCloseElements('#cbGiftNote','.divGiftNoteTextareaWrapper');
		});
});

var selectedOption = 'saved'
var nonSelectedOption = 'new'

function deliveryAddressRadioChange() {
	if ($('#rbAddress2').is(':checked')) { // kayıtlı teslimat adresleri seçilirse
		selectedOption = '.deliveryAddressWrapper .divAddressOptionsWrapper'
		nonSelectedOption = '.deliveryAddressWrapper .divNewAddressContent'
	}
	else if ($('#rbAddress1').is(':checked')) { // yeni teslimat adresi seçilirse
		selectedOption = '.deliveryAddressWrapper .divNewAddressContent'
		nonSelectedOption = '.deliveryAddressWrapper .divAddressOptionsWrapper'
	};

	switchOptions(selectedOption, nonSelectedOption);
}

function personalOrCorporateRadioChange() {
	if ($('#personalRadio').is(':checked')) { // kayıtlı teslimat adresleri seçilirse
		selectedOption = '.divBillingAddress .divPersonalOptionInput'
		nonSelectedOption = '.divBillingAddress .divCorporateOptionInput'
	}
	else if ($('#corporateRadio').is(':checked')) { // yeni teslimat adresi seçilirse
		selectedOption = '.divBillingAddress .divCorporateOptionInput'
		nonSelectedOption = '.divBillingAddress .divPersonalOptionInput'
	};

	switchOptions(selectedOption, nonSelectedOption);
}

function invoiceAddressRadioChange() {
	if ($('#rbNewAddress1').is(':checked')) { // kayıtlı fatura adresleri seçilirse
		selectedOption = '.divBillingAddress .divBillingAddressOptionsWrapper'
		nonSelectedOption = '.divBillingAddress .divAddNewInvoiceAddress'
	}
	else if ($('#rbNewAddress2').is(':checked')) { // yeni fatura adresi seçilirse
		selectedOption = '.divBillingAddress .divAddNewInvoiceAddress'
		nonSelectedOption = '.divBillingAddress .divBillingAddressOptionsWrapper'
	};

	switchOptions(selectedOption, nonSelectedOption);
}

function switchOptions(selectedOption, nonSelectedOption) {
	$(nonSelectedOption).css({
		'opacity':'0',
		'-webkit-transform':'scale(0.95)',
		'transition':'transform 0.3s, opacity 0.3s',
		'-webkit-transition':'transform 0.3s, opacity 0.3s',
		'-moz-transition':'transform 0.3s, opacity 0.3s',
		'-ms-transition':'transform 0.3s, opacity 0.3s'
	});
	setTimeout(function(){
		$(nonSelectedOption).css('display','none');
		$(selectedOption).css({
			'display':'block',
			'opacity':'0',
			'-webkit-transform':'scale(0.95)',
			'transition':'transform 0.3s, opacity 0.3s',
			'-webkit-transition':'transform 0.3s, opacity 0.3s',
			'-moz-transition':'transform 0.3s, opacity 0.3s',
			'-ms-transition':'transform 0.3s, opacity 0.3s'
		});
		setTimeout(function(){
			$(selectedOption).css({
				'opacity':'1',
				'-webkit-transform':'scale(1)'
			});
		},300);
	},300);
}

function openCloseElements(openCloseSwitch, openedClosedElement) {
	if ($(openCloseSwitch).is(':checked')) {
		$(openedClosedElement).css({
			'display':'block',
			'opacity':'0',
			'-webkit-transform':'scale(0.95)',
			'transition':'transform 0.3s, opacity 0.3s'
		});
		setTimeout(function(){
			$(openedClosedElement).css({
				'opacity':'1',
				'-webkit-transform':'scale(1)'
			});
		},300);
	}
	else { // yeni teslimat adresi seçilirse
		$(openedClosedElement).css({
			'opacity':'0',
			'-webkit-transform':'scale(0.95)',
			'transition':'transform 0.3s, opacity 0.3s'
		});
		setTimeout(function(){
			$(openedClosedElement).css('display','none');
		},300);
	};
}



function editAddressInfo(affectedElement,classNamesToggle, addressId) {
	event.preventDefault();
	$('#rbAddress1').prop('checked',true);
	$('#rbAddress2').prop('checked',false);
	setTimeout(function(){
		deliveryAddressRadioChange();
	},20)
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




function radioActions() {
	$('.divAddressOption').find('input[type="radio"]').change(function(){
		$(this).parent().parent().parent().find('.divAddressOption').each(function(){
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
