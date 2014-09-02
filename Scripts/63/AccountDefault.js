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

function setupHomeAccountMenu(sender) {
    // Eger menu kapsayıcısı div in genişliği 250 px den büyük ise, mobile formatına erişilmiştir.
    var isMobileFormat = (parseInt($('.divAcountItem').css('width')) > 250);

    if (isMobileFormat) {
        var parent = $(sender).parent();
        var subMenu = $(parent).find('.divAccountSubMenu');
      
        if (isHomeAccountMenuActive) {
            var isSenderSame = ($(currActiveHomeAccountMenu).attr('id') == $(subMenu).attr('id'));
          
            closeActiveHomeAccountMenu();

            if (!isSenderSame) {
                setTimeout(function () {
                    openHomeAccountMenu(parent, subMenu);
                }, 500);
            }
        
        }
        else {
            openHomeAccountMenu(parent, subMenu);
        }
    }
}

function openHomeAccountMenu(parent, subMenu) {
    isHomeAccountMenuActive = true;
    currActiveHomeAccountMenu = subMenu;

    var subMenuHeight = $(subMenu).find('.divAccountSubMenuContent').height();
    $(subMenu).css({ height: subMenuHeight });

    $(parent).addClass('activeSubMenu');
}


function closeActiveHomeAccountMenu() {
    $(currActiveHomeAccountMenu).css({ height: 0 });
    $(currActiveHomeAccountMenu).parent().removeClass('activeSubMenu');

    isHomeAccountMenuActive = false;
    currActiveHomeAccountMenu = null;
}