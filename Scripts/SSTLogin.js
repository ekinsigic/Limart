$(document).ready(function(){
    getSocialIcons();
    loginPageAjaxCall();
})


function loginPageAjaxCall() {

        $('.signUp').on('click',function(e){
            e.preventDefault();
            $('main').css('height',$('main').height());
            $('.divLoginContent').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
                $('html, body').scrollTop(0);
                $.ajax({url:'signup.html',success:function(result){
                        $('#login').append($(result));
                        $('#divSignUpWrapper').css({'display':'block',
                            'opacity':'0',
                            '-webkit-transform':'scale(0.95)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                    signUpPageAjaxCall();
                    miscImgLoader();
                        setTimeout(function(){
                            $('#divSignUpWrapper').css({'display':'block',
                                'opacity':'1',
                                '-webkit-transform':'scale(1)',
                                'transition':'opacity 0.3s, transform 0.3s'});
                            $('.divLoginContent').remove();
                        },200)
                }});
            },500);
        });

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


function signUpPageAjaxCall() {
        $('.contShopping').on('click', function(e){
            e.preventDefault();
            $('main').css('height',$('main').height());
            $('#divSignUpWrapper').css({'opacity':'0',
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
                getSocialIcons();
                miscImgLoader();
                    setTimeout(function(){
                        $('#divLoginWrapper').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('#divSignUpWrapper').remove();
                    },200)
                }})
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
                    getSocialIcons();
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


function getSocialIcons() {
    $.ajax({url:'SocialLogin.html',success:function(result){
        $('.divSocialIcons').html($(result).find('#socialIconsHandler'));
        setTimeout(function(){
            miscImgLoader();
        },100);
    }});
}