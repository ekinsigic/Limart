var whereIsRequestComingFrom = null
var addressForm = $('.divNewAddressWrapper').clone();
$(document).ready(function(){
	openOrCloseTabs('#accountDetails .divDetail.address .divTabber .aTab', '#accountDetails .divDetail.address .wholeAddressesWrapper', 'billing,delivery');
	// openOrCloseNewAddress('input[name=addressNewOrSavedInvoice]:radio', '#payment .divBillingAddress', 'newAddress,savedAddress');
	radioActions();
	personalOrCorporateRadioChange();
	openOrCloseNewAddress();
});

	$('input[name="IsPersonalBillingAddress"]').each(function(){
		$(this).change(function(){
			personalOrCorporateRadioChange();
		})
	});
function openOrCloseTabs(triggerInput,affectedElement,classNamesToggle) {
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
	});


	$(triggerInput).click(function(e){
		e.preventDefault();
		var switchState = $(this).attr('data-selection')
		//scrollUserTo(affectedElement);
		showNewAddressForm(triggerInput,affectedElement,classNamesToggle,switchState);
	});
}

function showNewAddressForm(triggerInput, affectedElement, classNamesToggle, switchState){
		$(affectedElement).css({
			'opacity':'0',
			'-webkit-transform':'scale(0.95)'
		});
		$(affectedElement).wrapInner('<div class="innerWrapper">');
		var classNames = (classNamesToggle).split(',');
		setTimeout(function(){

			if (switchState == '1') {
				$(affectedElement).addClass(classNames[0]);
				$(affectedElement).removeClass(classNames[1]);
			}
			else {
				$(affectedElement).removeClass(classNames[0]);
				$(affectedElement).addClass(classNames[1]);
			}

			var currentHeight = $(affectedElement).find('.innerWrapper').outerHeight();
			$(affectedElement).find('.innerWrapper > *').unwrap();
			$(affectedElement).height(currentHeight);
			setTimeout(function(){
				$(affectedElement).css({
					'opacity':'1',
					'-webkit-transform':'scale(1)'
				});
				$(triggerInput).each(function(){
					$(this).removeClass('activeTab');
				})
				$(triggerInput).parent().find('[data-selection="'+switchState+'"]').addClass('activeTab');
				setTimeout(function(){
					$(affectedElement).css({
						'height':'auto'
					});
				},100)
			},100);
		},500);
}

function radioActions() {
	$('.divAddressOption').find('input[type="radio"]').change(function(){
		$('.divAddressOption').each(function(){
			$(this).removeClass('active');	
		})
		$(this).parents('.divAddressOption').addClass('active');
	});
}


function personalOrCorporateRadioChange() {
	if ($('#personalRadio').is(':checked')) { // kayıtlı teslimat adresleri seçilirse
		selectedOption = '.divPersonalOptionInput'
		nonSelectedOption = '.divCorporateOptionInput'
	}
	else if ($('#corporateRadio').is(':checked')) { // yeni teslimat adresi seçilirse
		selectedOption = '.divCorporateOptionInput'
		nonSelectedOption = '.divPersonalOptionInput'
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


var newAddressIsOpen = false
var newAddressType = null
function openOrCloseNewAddress() {
	$('#accountDetails  a.SSTAStyleH.aNewAddress, .divAddressOption a.edit').click(function(e){
		e.preventDefault();
		if  ($(this).parent().attr('class') == 'deliveryAddressesWrapper' || $(this).parent().parent().parent().attr('class') == 'deliveryAddressesWrapper') {
			if ($(this).parent().attr('class') == 'deliveryAddressesWrapper') {
				whereIsRequestComingFrom = 'newForm' 
			}
			else {
				whereIsRequestComingFrom = 'editForm'
			}
			newAddressType = 'delivery'
		}
		else {
			if ($(this).parent().attr('class') == 'billingAddressesWrapper') {
				whereIsRequestComingFrom = 'newForm'
			}
			else {
				whereIsRequestComingFrom = 'editForm'
			}
			newAddressType = 'billing'
		}
		if (whereIsRequestComingFrom == 'newForm') { // YENİ ADRES EKLE BUTONUNA BASILDIĞINDA HAREKETE GEÇECEK FONKSİYON
				// RESET FONKSİYONU BURAYA GELECEK
		}
		else { // DÜZENLE BUTONUNA BASILDIĞINDA HAREKETE GEÇECEK FONKSİYON
		}
		if (newAddressType == 'delivery') {
			$('#accountDetails .divNewAddressWrapper  .personalOrCorporate,'+
				' #accountDetails .divNewAddressWrapper .divPersonalOptionInput,'+
				' #accountDetails .divNewAddressWrapper .divCorporateOptionInput').hide();

			$('.divNewAddressWrapper input[placeholder="FATURA ADI"]').attr('placeholder','AD,SOYAD');
		}
		else {
			$('#accountDetails .divNewAddressWrapper  .personalOrCorporate,'+
				' #accountDetails .divNewAddressWrapper .divPersonalOptionInput,'+
				' #accountDetails .divNewAddressWrapper .divCorporateOptionInput').show();
			$('#accountDetails .divNewAddressWrapper input[placeholder="AD,SOYAD"]').attr('placeholder','FATURA ADI');
		}
		$('#accountDetails .addressSelections').css({
			'opacity':'0',
			'-webkit-transform':'scale(0.95)',
			'transition':'opacity 0.5s, transform 0.5s'
		});
		setTimeout(function(){
			$('#accountDetails .divNewAddressWrapper').css({
				'opacity':'0',
				'-webkit-transform':'scale(0.95)',
				'display':'block'
			});
			setTimeout(function(){
				$('#accountDetails .divNewAddressWrapper').css({
				'opacity':'1',
				'-webkit-transform':'scale(1)',
				'transition':'opacity 0.5s, transform 0.5s'
				});
			},55);
		},505);
	});

	$('#accountDetails .divNewAddressWrapper a.contShopping').click(function(e){
		e.preventDefault();
		$('#accountDetails .divNewAddressWrapper').css({
			'opacity':'0',
			'-webkit-transform':'scale(0.95)',
			'transition':'opacity 0.5s, transform 0.5s'
		});
		setTimeout(function(){
			$('#accountDetails .addressSelections').css({
				'opacity':'0',
				'-webkit-transform':'scale(0.95)',
				'display':'block'
			});

			$('#accountDetails .divNewAddressWrapper').css({
				'display':'none'
			});
			setTimeout(function(){
				$('#accountDetails .addressSelections').css({
				'opacity':'1',
				'-webkit-transform':'scale(1)',
				'transition':'opacity 0.8s, transform 0.8s'
				});
			},55);
		},505);
	})

}

// ÖZKAN BUNLAR YERİNE YUKARIDAKİ FONKSİYONLARI KULLANABİLİRSİN,
// GEREKLİ YERLERİ AÇTIM, İSTERSEN BENİ ARAYABİLİRSİN

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function showUpdateAdressForm() {
// 	$('#accountDetails .divNewAddressWrapper input, #accountDetails .divNewAddressWrapper select, #accountDetails .divNewAddressWrapper textarea').val('');
//     $('#accountDetails .addressSelections').css({
//         'opacity': '0',
//         '-webkit-transform': 'scale(0.95)',
//         'transition': 'opacity 0.5s, transform 0.5s'
//     });
//     setTimeout(function () {
//         $('#accountDetails .divNewAddressWrapper').css({
//             'opacity': '0',
//             '-webkit-transform': 'scale(0.95)',
//             'display': 'block'
//         });
//         setTimeout(function () {
//             $('#accountDetails .divNewAddressWrapper').css({
//                 'opacity': '1',
//                 '-webkit-transform': 'scale(1)',
//                 'transition': 'opacity 0.5s, transform 0.5s'
//             });
//         }, 55);
//     }, 505);
// }

// function backButton() {
//     $('#accountDetails .divNewAddressWrapper').css({
//         'opacity': '0',
//         '-webkit-transform': 'scale(0.95)',
//         'transition': 'opacity 0.5s, transform 0.5s'
//     });
//     setTimeout(function () {
//         $('#accountDetails .addressSelections').css({
//             'opacity': '0',
//             '-webkit-transform': 'scale(0.95)',
//             'display': 'block'
//         });

//         $('#accountDetails .divNewAddressWrapper').css({
//             'display': 'none'
//         });
//         setTimeout(function () {
//             $('#accountDetails .addressSelections').css({
//                 'opacity': '1',
//                 '-webkit-transform': 'scale(1)',
//                 'transition': 'opacity 0.8s, transform 0.8s'
//             });
//         }, 55);
//     }, 505);
// }