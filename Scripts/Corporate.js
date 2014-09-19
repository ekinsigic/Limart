$(document).ready(function () {
    mainHeight();
});

$(window).load(function(){
    mainHeight();
});

$(window).resize(function () {
    mainHeight();
});



function mainHeight() {
    // giris kisminin, ekran cozunurlugune gore yuksekliginin ayarlanmasini sagliyoruz.
    $('#mainEntry').css({ height: wH - hH });
}
