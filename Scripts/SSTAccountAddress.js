$(document).ready(function(){
	addNewDeliveryAddress();
	editNewDeliveryAddress();
	saveNewDeliveryAddress();
	saveEditedDeliveryAddress();
	cancelNewDeliveryAddress();
	cancelEditedDeliveryAddress();

	addNewBillingAddress();
	editNewBillingAddress();
	saveNewBillingAddress();
	saveEditedBillingAddress();
	cancelNewBillingAddress();
	cancelEditedBillingAddress();
	switchCorporateOrPersonalBilling();

	switchBillingOrDeliveryAddress();
});

//TESLİMAT ADRESİ / FATURA ADRESİ GEÇİŞ FONKSİYONU
	function switchBillingOrDeliveryAddress() {
		$('.addressSelections .divTabber a[data-selection="0"]').click(function(e){
			e.preventDefault();
			$(this).addClass('activeTab');
			$('.addressSelections .divTabber a[data-selection="1"]').removeClass('activeTab')
			$('.wholeAddressesWrapper .deliveryAddressesWrapper').css('display','block');
			$('.wholeAddressesWrapper .billingAddressesWrapper').css('display','none');
			$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','block');
			$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','none');
		});

		$('.addressSelections .divTabber a[data-selection="1"]').click(function(e){
			e.preventDefault();
			$(this).addClass('activeTab');
			$('.addressSelections .divTabber a[data-selection="0"]').removeClass('activeTab')
			$('.wholeAddressesWrapper .billingAddressesWrapper').css('display','block');
			$('.wholeAddressesWrapper .deliveryAddressesWrapper').css('display','none');
			$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','block');
			$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','none');
		});
	}
//

//TÜM ADRESLER VE YENİ ADRESLER ARASI GEÇİŞLER

	//TESLİMAT ADRESİ SEKMESİ

		//YENİ TESLİMAT ADRESİ DURUMU
			function addNewDeliveryAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper .aNewAddress').click(function(e){
					e.preventDefault();
					//YENİ TESLİMAT ADRESİ AKTİF DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','none');
					$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','block');
				});
			}

			function saveNewDeliveryAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress .saveAddingNewAddress').click(function(e){
					e.preventDefault();
					//YENİ TESLİMAT ADRESİ KAYDET DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','none');
				});
			}

			function cancelNewDeliveryAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress a.contShopping').click(function(e){
					e.preventDefault();
					//YENİ TESLİMAT ADRESİ İPTAL DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','none');
				});
			}
		//

		//TESLİMAT ADRESİ DÜZENLEME DURUMU
			function editNewDeliveryAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper .divAddressOption a.edit').click(function(e){
					e.preventDefault();
					//TESLİMAT ADRESİ DÜZENLEME AKTİF DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','none');
					$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','block');
				});
			}

			function saveEditedDeliveryAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress .saveAddingNewAddress').click(function(e){
					e.preventDefault();
					//TESLİMAT ADRESİ DÜZENLEME KAYDET DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','none');
				});
			}

			function cancelEditedDeliveryAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress a.contShopping').click(function(e){
					e.preventDefault();
					//TESLİMAT ADRESİ DÜZENLEME İPTAL DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .deliveryAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress').css('display','none');
				});
			}
		//

	//

	//FATURA ADRESİ SEKMESİ

		//YENİ FATURA ADRESİ DURUMU
			function addNewBillingAddress(){
				$('.wholeAddressesWrapper .billingAddressesWrapper .aNewAddress').click(function(e){
					e.preventDefault();
					//YENİ FATURA ADRESİ AKTİF DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','none');
					$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','block');
				});
			}

			function saveNewBillingAddress(){
				$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress .saveAddingNewAddress').click(function(e){
					e.preventDefault();
					//YENİ FATURA ADRESİ KAYDET DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','none');
				});
			}

			function cancelNewBillingAddress(){
				$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress a.contShopping').click(function(e){
					e.preventDefault();
					//YENİ FATURA ADRESİ İPTAL DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','none');
				});
			}
		//

		//FATURA ADRESİ DÜZENLEME DURUMU
			function editNewBillingAddress(){
				$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper .divAddressOption a.edit').click(function(e){
					e.preventDefault();
					//FATURA ADRESİ DÜZENLEME AKTİF DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','none');
					$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','block');
				});
			}

			function saveEditedBillingAddress(){
				$('.wholeAddressesWrapper .deliveryAddressesWrapper #newDeliveryAddress .saveAddingNewAddress').click(function(e){
					e.preventDefault();
					//FATURA ADRESİ DÜZENLEME KAYDET DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','none');
				});
			}

			function cancelEditedBillingAddress(){
				$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress a.contShopping').click(function(e){
					e.preventDefault();
					//FATURA ADRESİ DÜZENLEME İPTAL DURUMUNDAKİ FONKSİYON BURAYA GELİYOR
					$('.wholeAddressesWrapper .billingAddressesWrapper .divAddressOptionsWrapper').css('display','block');
					$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress').css('display','none');
				});
			}
		//

		//FATURA ADRESİ BİREYSEL KURUMSAL GEÇİŞİ
			function switchCorporateOrPersonalBilling() {
				$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress input[name="personalOrCorporate"]').change(function(){
					if($('#corporateRadio').is(':checked')) {
						$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress .divCorporateOptionInput').css('display','block');
						$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress .divPersonalOptionInput').css('display','none');
					}
					else {
						$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress .divPersonalOptionInput').css('display','block');
						$('.wholeAddressesWrapper .billingAddressesWrapper #newBillingAddress .divCorporateOptionInput').css('display','none');
					}
				});
			}

	//

//