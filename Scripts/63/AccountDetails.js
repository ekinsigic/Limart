$(window).load(function () {

});

$(window).resize(function () {

});

$(document).ready(function () {
    if (isMobile) {
        $('.aAccountNav').removeAttr('onclick')
                         .bind("tap", function (e) {
                             setupHomeAccountMenu(this);
                         });
    }
});





var isAccountMenuActive = false;

function openOrCloseAccountMenu() {
    if (!isAccountMenuActive) {
        if(isMobile){
            $(window).bind('touchmove', function (e) {
                e.preventDefault();
            });
        }

        isAccountMenuActive = true;

        if ($('header nav .innerHtml').length == 0) {
            $('header nav').append('<div class="innerHtml"></div>');
        }

        $('#menuActiveOverlay').show();
        $('aside').show();

        setTimeout(function () {
            $('header nav .innerHtml, #breadcrumbs, .aAccountNav, .aAccountNav .spanDot, #menuActiveOverlay, #accountDetails .divDetail, footer').addClass('activeMenu');
        }, 10);
    }
    else {
        $('header nav .innerHtml, #breadcrumbs, .aAccountNav, .aAccountNav .spanDot, #menuActiveOverlay, #accountDetails .divDetail, footer').removeClass('activeMenu');
        setTimeout(function () {
            if (isMobile) {
                $(window).unbind('touchmove');
            }
            $('#menuActiveOverlay').hide();
            $('aside').hide();
            $('header nav .innerHtml').remove();
            isAccountMenuActive = false;
        }, 500);
    }
}