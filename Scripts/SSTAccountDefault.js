$(window).load(function () {

});



$(window).resize(function () {

});



$(document).ready(function () {
    if (isMobile) {
        $('#welcomeAccount .divAccount .divAcountItem .aHeader').removeAttr('onclick')
                                                                .bind("tap", function (e) {
                                                                     setupHomeAccountMenu(this);
                                                                });
    }
});



var isHomeAccountMenuActive = false;
var currActiveHomeAccountMenu = null;
var isHomeAccountMenuCurrAnimated = false;
var homeAccountMenuTimer = 500;

function setupHomeAccountMenu(sender) {
    if (!isHomeAccountMenuCurrAnimated) {
        isHomeAccountMenuCurrAnimated = true;

        // Eger menu kapsayıcısı div in genişliği 250 px den büyük ise, mobile formatına erişilmiştir.
        var isMobileFormat = (parseInt($('.divAcountItem').css('width')) > 250);

        if (isMobileFormat) {
            var parent = $(sender).parent();
            var subMenu = $(parent).find('.divAccountSubMenu');

            if (!isHomeAccountMenuActive) {
                openHomeAccountMenu(parent, subMenu);
            }
            else {
                var isSenderSame = ($(currActiveHomeAccountMenu).attr('id') == $(subMenu).attr('id'));
                closeActiveHomeAccountMenu();

                if (!isSenderSame) {
                    isHomeAccountMenuCurrAnimated = true;

                    setTimeout(function () {
                        openHomeAccountMenu(parent, subMenu);
                    }, homeAccountMenuTimer);
                }
            }
        }
    }
}

function openHomeAccountMenu(parent, subMenu) {
    isHomeAccountMenuActive = true;
    currActiveHomeAccountMenu = subMenu;

    var subMenuHeight = $(subMenu).find('.divAccountSubMenuContent').height();
    $(subMenu).css({ height: subMenuHeight });
    $(parent).addClass('activeSubMenu');

    setTimeout(function () {
        isHomeAccountMenuCurrAnimated = false;
    }, homeAccountMenuTimer);
}


function closeActiveHomeAccountMenu() {
    $(currActiveHomeAccountMenu).css({ height: 0 });
    $(currActiveHomeAccountMenu).parent().removeClass('activeSubMenu');

    setTimeout(function () {
        isHomeAccountMenuActive = false;
        currActiveHomeAccountMenu = null;
        isHomeAccountMenuCurrAnimated = false;
    }, homeAccountMenuTimer);
}