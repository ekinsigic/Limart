$(document).ready(function(){
	openOrCloseNewAddress('#accountDetails .divDetail.address .divTabber .aTab', '#accountDetails .divDetail.address .wholeAddressesWrapper', 'billing,delivery');
	openOrCloseNewAddress('#accountDetails .divDetail.address .wholeAddressesWrapper .deliveryAddressesWrapper .aNewAddress, #accountDetails .divDetail.address .wholeAddressesWrapper .deliveryAddressesWrapper .contShopping, #accountDetails .divDetail.address .wholeAddressesWrapper .deliveryAddressesWrapper .saveAddingNewAddress', '#accountDetails .divDetail.address .wholeAddressesWrapper .deliveryAddressesWrapper', 'new,saved');
	openOrCloseNewAddress('#accountDetails .divDetail.address .wholeAddressesWrapper .billingAddressesWrapper .aNewAddress, #accountDetails .divDetail.address .wholeAddressesWrapper .billingAddressesWrapper .contShopping, #accountDetails .divDetail.address .wholeAddressesWrapper .billingAddressesWrapper .saveAddingNewAddress', '#accountDetails .divDetail.address .wholeAddressesWrapper .billingAddressesWrapper', 'new,saved');
	// openOrCloseNewAddress('input[name=addressNewOrSavedInvoice]:radio', '#payment .divBillingAddress', 'newAddress,savedAddress');
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
			console.log(switchState);
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
				},6000)
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

