$(window).load(function () {
});


$(window).resize(function () {
});


$(document).ready(function () {


});





var isAccountOrderDetailActive = false;
var currActiveOrder = null;
var isAccountOrderDetailCurrAnimated = false;

function openOrCloseOrderDetails(sender) {
    if (!isAccountOrderDetailCurrAnimated) {
        isAccountOrderDetailCurrAnimated = true;

        if (!isAccountOrderDetailActive) {
            openOrderDetails(sender);
        }
        else {
            var isSenderSame = (currActiveOrder == $(sender).attr('data-order-id'));

            closeOrderDetails(isSenderSame);

            if (!isSenderSame) {
                isAccountOrderDetailCurrAnimated = true;

                setTimeout(function () {
                    openOrderDetails(sender);
                }, 1350);
            }
        }
    }
}




function openOrderDetails(sender) {
    isAccountOrderDetailActive = true;
    currActiveOrder = $(sender).attr('data-order-id');

    $('html, body').animate({ scrollTop: parseInt($(sender).offset().top - 170) }, 500, 'swing');

    // bütün içeriğin yüksekliğini inner wrapper ile elde ediyoruz
    $(sender).find('.divOrderDetails').wrapInner('<div class="innerWrapper" />');
    var orderDetailsContentHeight = $(sender).find('.innerWrapper').height();
    //

    $(sender).addClass('activeOrder');
    $(sender).find('.divOrderDetails').css({ height: orderDetailsContentHeight }).addClass('activeOrder');
    $(sender).find('span, img').addClass('activeOrder');

    setTimeout(function () {
        $(sender).find('.innerWrapper').addClass('activeOrder');
    }, 400);

    setTimeout(function () {
        isAccountOrderDetailCurrAnimated = false;
    }, 1000);
}


function closeOrderDetails(isSenderSame) {
    $('div.divOrderRow[data-order-id=' + currActiveOrder + ']').find('.innerWrapper').removeClass('activeOrder');

    setTimeout(function () {
        $('div.divOrderRow[data-order-id=' + currActiveOrder + ']').find('.divOrderDetails').css({ height: 0 }).removeClass('activeOrder');

        setTimeout(function () {
            $('div.divOrderRow[data-order-id=' + currActiveOrder + ']').removeClass('activeOrder');
            $('div.divOrderRow[data-order-id=' + currActiveOrder + ']').find('span, img').removeClass('activeOrder');
            $('div.divOrderRow[data-order-id=' + currActiveOrder + ']').find('.innerWrapper > *').unwrap();

            isAccountOrderDetailActive = false;
            currActiveOrder = null;
            isAccountOrderDetailCurrAnimated = isSenderSame ? false : true;
        }, 1000);
    }, 300);
}