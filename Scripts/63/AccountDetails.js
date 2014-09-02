$(window).load(function () {

});

$(window).resize(function () {

});

$(document).ready(function () {
   
});





var isAccountMenuActive = false;

function openOrCloseAccountMenu() {

    if (!isAccountMenuActive) {
        isAccountMenuActive = true;
        $('#accountDetails .divDetail, footer').addClass('activeMenu');
    }
    else {
        $('#accountDetails .divDetail, footer').removeClass('activeMenu');
        isAccountMenuActive = false;
    }
}