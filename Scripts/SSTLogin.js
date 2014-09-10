$(document).ready(function(){
    loginPageAjaxCall();
})


function loginPageAjaxCall() {
        $('.forgotPassword').on('click',function(e){
            e.preventDefault();
            $('main').css('height',$('main').height());
            $('.divLoginContent').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
                $('html, body').scrollTop(0);
                $.ajax({url:'forgotpassword.html',success:function(result){
                    $('#login').append($(result));
                    $('#forgotPasswordWrapper').css({'display':'block',
                        'opacity':'0',
                        '-webkit-transform':'scale(0.95)',
                        'transition':'opacity 0.3s, transform 0.3s'});
                forgotPasswordPageAjaxCall();
                miscImgLoader();
                    setTimeout(function(){
                        $('#forgotPasswordWrapper').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('.divLoginContent').remove();
                    },200)
                }});
            },500);
        });
}

function forgotPasswordPageAjaxCall() {
        $('.contShopping').on('click', function(e){
            e.preventDefault();
            $('main').css('height',$('main').height());
            $('#forgotPasswordWrapper').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('html, body').scrollTop(0);
                $.ajax({url:'login.html',success:function(result){
                    $('#login').append($(result).find('#divLoginWrapper'));
                    $('#divLoginWrapper').css({'display':'block',
                        'opacity':'0',
                        '-webkit-transform':'scale(0.95)',
                        'transition':'opacity 0.3s, transform 0.3s'});
                    loginPageAjaxCall();
                    miscImgLoader();
                    setTimeout(function(){
                        $('#divLoginWrapper').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('#forgotPasswordWrapper').remove();
                    },200)
                }})
            },500);
        });
}