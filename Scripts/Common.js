var deviceIs;
var isMobile;

var wW;
var wH;
var sW;
var sH;
var hH;
var isLandscape = false;
var isPortrait = false;

var scrollTopVal = 0;
var scrollDir;
var lastScrollAmount = 0;
var openOpener = null;
var SSTInteraction = 'click'



checkDevice();

if (isMobile) {
    // load jQuery Mobile dynamically
    $(document).on('mobileinit', function () {
        $.mobile.ignoreContentEnabled = true; // disable jqm styling
        $.mobile.ajaxEnabled = false; // disable ajax loading
    });

    var pathPrefix = ($('#input63').length > 0 ? "../" : "");
    document.write('<script type="text/javascript" src="Scripts/Mobile/jquery.mobile-1.4.3.min.js"><\/script>');
    //
}

var orientationChangeTimer = null;
$(window).on("orientationchange", function () {
    setMainMargin();
    if (orientationChangeTimer == null) {
        clearTimeout(orientationChangeTimer);
    }

    orientationChangeTimer = setTimeout(function () {
        smartphoneLandscape();
    }, 300);
});

$(window).resize(function () {
    setGlobals();
    setMainMargin();
});

$(window).load(function(){
    setMainMargin();
    hH = $('header').height();
});

$(document).ready(function () {
    scrollEvents();
    setGlobals();
    smartphoneLandscape();
    miscImgLoader();
    SSTSelectCustomizer();
});

function setGlobals() {
    wW = $(window).width();
    wH = $(window).height();
    sW = screen.width;
    sH = screen.height;
    hH = $('header').height();
    isLandscape = (wW >= wH);
    isPortrait = (wW < wH);
    SSTInteraction = (isMobile ? 'tap' : 'click');
}

function checkDevice() {
    isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));

    if (!isMobile) {
        deviceIs = "laptop";
    }
    else if (screen.width < 580 || window.devicePixelRatio == 3) { // tablet
        deviceIs = "smartphone";
    }
    else {
        deviceIs = "tablet";
    }
}

function scrollEvents() {
    $(window).scroll(function () {
        scrollTopVal = $(window).scrollTop();

        if (scrollTopVal > lastScrollAmount) {
            scrollDir = 'down';
        }
        else {
            scrollDir = 'up';
        }
    });
}

/* mobilde yatayda gelecek ekran */
function smartphoneLandscape() {
    if (deviceIs == 'smartphone' && isLandscape) {
        $('#smartphoneLandscape').show();
        $('.divPreloader').addClass('loading');
    }
    else if (deviceIs == 'smartphone' && isPortrait) {
        $('#smartphoneLandscape').hide();
        $('.divPreloader').removeClass('loading');
    }
}



// misc imajlarını sayfa açılışında retina olup olmadığına göre yükleme fonksiyonu
function miscImgLoader() {

    var imgFolderPath = 'Images'

    $('body').find('img[data-sixtyThree]').each(function () {

        var miscIdentifier = $(this).attr('data-sixtyThree');

        if (isMobile) {
            if ($(this).hasClass('white')) {
                $(this).attr('src', imgFolderPath + '/@2x/' + miscIdentifier + '-white@2x.png');
            }
            else {
                $(this).attr('src', imgFolderPath + '/@2x/' + miscIdentifier + '@2x.png');
            }
        }
        else {
            if ($(this).hasClass('white')) {
                $(this).attr('src', imgFolderPath + '/' + miscIdentifier + '-white.png');
            }
            else {
                $(this).attr('src', imgFolderPath + '/' + miscIdentifier + '.png');
            }
        }
    });
}


function scrollTop63(scrollLocation,scrollTime,selectedElement) {
    var topDistance = $(document).scrollTop();

    if (scrollLocation > ($(document).height() - wH)) {
        scrollLocation = ($(document).height() - wH)
    };
    if (scrollLocation < 0) {
        scrollLocation = 0
    };

    var scrollDistance = scrollLocation - topDistance 

    if (selectedElement == null) {
        selectedElement = 'body'
    };
    $(window).bind('mousewheel', function(e){
        e.preventDefault();
    });
    $(window).bind('touchmove', function(e){
        e.preventDefault();
    });
    $(selectedElement).css({
        '-webkit-transform':'translate3d(0px,'+(-scrollDistance)+'px,0px)',
        'transition':'transform 0.'+(scrollTime/100)+'s'
    });

    setTimeout(function(){
        $(document).scrollTop(topDistance + scrollDistance);
        $(selectedElement).css({
            '-webkit-transform':'none',
            'transition':'transform 0s'
        });
        setTimeout(function(){
            $(window).unbind('mousewheel');
            $(window).unbind('touchmove');
        })
    },scrollTime);
}



function selectCustomizer() {
    $(document).find('.SSTCustomSelectOriginal').each(function(){
        $(this).after('<ul class="SSTCustomSelectMirror">')
        var numberOfOptions = $(this).find('option').length()

    })
}


function setMainMargin() {
    $('main').css('margin-top',$('header').outerHeight());
}


$('.error').focus(function(){
    $(this).removeClass('error');
})


//SST SELECT CUSTOMIZER PLUG-IN TESTING
    var SSTInteraction = (isMobile ? 'tap' : 'click');
    var thereIsAnOpenSSTSelect = false;

    function SSTSelectCustomizer() {

        //For every element that has the class called SSTSelect
        $('select.SSTSelect').each(function(index,element){

            //firstly, we name our element by index number
            var validIndex = index + 1

            $(element).attr('data-SSTID','SSTSelect'+validIndex);
            var elementID = $(element).attr('data-SSTID');
            //

            var selectHeading = $(element).find('option:first-child').html();
            $(element).attr('data-SSTID','SSTSelect'+validIndex);
            $(element).after('<ul class="SSTSelectMirror" data-SSTID="'+elementID+'">'+
                                '<li>'+
                                    '<a href="#">'+
                                        selectHeading+
                                    '</a>'+
                                    '<ul></ul>'+
                                '</li>'+
                            '</ul>');



            ///////hidden/////////////////////////////////////hidden////////////
            //////////////////////////////////hidden////////////////////////////
            ////////////hidden//////////////////////////////////////////////////
            //$(element).hide();
            ///////////////////////////////////////////////hidden///////////////
            ///////hidden//////////////////////hidden///////////////////////////
            /////////////////hidden//////////////////////////////////////hidden/




            $('.SSTSelectMirror').css({
                'overflow':'hidden',
                'height': $('ul[data-SSTID="'+elementID+'"] a').height(),
                'cursor':'pointer'
            })


            $(element).find('option').each(function(innerIndex,innerElement) {
                innerElementContent = $(innerElement).html()
                if (innerIndex > 0) {// if this is not the header
                    $('ul[data-SSTID="'+elementID+'"] ul').append('<li>'+innerElementContent+'</li>');
                    if ($(this).attr('selected')) {};
                };
            });

        });

            $('.SSTSelectMirror').each(function(){
                $(this).addClass('off');
            })

            $(window).bind(SSTInteraction, function(){
                $('.SSTSelectMirror.on').css({
                    'height': $('.SSTSelectMirror.on').find('a').height()
                });
                $('.SSTSelectMirror.on').toggleClass('off on');
            });

            $('.SSTSelectMirror').bind(SSTInteraction, function(e){
                e.stopPropagation();
                if ($(this).hasClass('off')) {

                    $(this).css({
                        'height': $(this).find('li').height()
                    });
                    $(this).toggleClass('off on');

                }
                else {
                    $(this).css({
                        'height': $(this).find('a').height()
                    });
                    $(this).toggleClass('off on');
                }
            });

            $(window).keydown(function(e){
                if (e.which == 27 || e.which == 13) {
                    if (e.which == 13) {
                        var currentSSTID = $('.SSTSelectMirror.on ul li.hovered').parents('.SSTSelectMirror').attr('data-SSTID');
                        var currentIndex = $('.SSTSelectMirror.on ul li.hovered').index() + 1;
                        var currentVal = $('select[data-SSTID="'+currentSSTID+'"] option:nth-child('+(currentIndex+1)+')').val();
                        var currentContent = $('.SSTSelectMirror.on ul li.hovered').html();
                        $('select[data-SSTID=' + currentSSTID + ']').trigger('change');
                        $('select[data-SSTID=' + currentSSTID + '] option').removeAttr('selected');
                        $('select[data-SSTID=' + currentSSTID + '] option:nth-child(' + (currentIndex + 1 ) + ')').attr('selected','selected');

                        $('.SSTSelectMirror.on ul li.hovered').parents('.SSTSelectMirror').find('a').html(currentContent);
                    };
                    if (e.which == 27) {
                        setTimeout(function(){
                            $('.SSTSelectMirror.on').css({
                                'height': $('.SSTSelectMirror.on').find('a').height()
                            });
                            $('.SSTSelectMirror.on').toggleClass('off on');
                        },50)
                    };
                };
            });

        $('.SSTSelectMirror ul li').bind(SSTInteraction, function(){
            var currentSSTID = $(this).parents('.SSTSelectMirror').attr('data-SSTID');
            var currentIndex = $(this).index() + 1;
            var currentVal = $('select[data-SSTID="'+currentSSTID+'"] option:nth-child('+(currentIndex+1)+')').val();
            var currentContent = $(this).html();
            $('select[data-SSTID=' + currentSSTID + ']').trigger('change');
            $('select[data-SSTID=' + currentSSTID + '] option').removeAttr('selected');
            $('select[data-SSTID=' + currentSSTID + '] option:nth-child(' + (currentIndex + 1 ) + ')').attr('selected','selected');

            $(this).parents('.SSTSelectMirror').find('a').html(currentContent);
        });

        $( '.SSTSelectMirror ul li' ).bind( 'mouseenter mouseleave', function() {
          $( this ).toggleClass( 'hovered' );
        });

        $( '.SSTSelectMirror ul li' ).bind( 'mouseleave', function() {
          $( this ).removeClass( 'hovered' );
        });

        $(window).keydown(function(e){
            if (e.which == 40) {
                e.preventDefault();
                $(window).unbind('mouseenter');
                var hoveredElementNow = $('.SSTSelectMirror.on ul li.hovered').index();

                if (hoveredElementNow + 1 == $('.SSTSelectMirror.on ul li').length) {
                    $('.SSTSelectMirror.on ul li').each(function(){
                        $(this).removeClass('hovered');
                    });
                    $('.SSTSelectMirror.on ul li:first-child').addClass('hovered');
                }
                else {
                    $('.SSTSelectMirror.on ul li').each(function(){
                        $(this).removeClass('hovered');
                    });
                    $('.SSTSelectMirror.on ul li:nth-child('+(hoveredElementNow + 2)+')').addClass('hovered');
                }


            };
        });

        $(window).keydown(function(e){
            if (e.which == 38) {
                e.preventDefault();
                $(window).unbind('mouseenter');
                var hoveredElementNow = $('.SSTSelectMirror.on ul li.hovered').index();

                if (hoveredElementNow == 0) {
                    $('.SSTSelectMirror.on ul li').each(function(){
                        $(this).removeClass('hovered');
                    });
                    $('.SSTSelectMirror.on ul li:last-child').addClass('hovered');
                }
                else {
                    $('.SSTSelectMirror.on ul li').each(function(){
                        $(this).removeClass('hovered');
                    });
                    $('.SSTSelectMirror.on ul li:nth-child('+(hoveredElementNow)+')').addClass('hovered');
                }
            };
        });


        $('.SSTSelect').change(function(){
            var elementID = $(this).attr('data-SSTID');
            var currentContent = $(this).val();
            $('ul.SSTSelectMirror[data-SSTID="'+elementID+'"]').find('a').html(currentContent);
        });


    }
//

