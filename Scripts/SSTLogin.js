$(document).ready(function(){
    getSocialIcons();
    loginPageAjaxCall();
})


function loginPageAjaxCall() {
        var innerLinkSignUp = $('.signUp');

        innerLinkSignUp.on('click',function(e){
            e.preventDefault();

            var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
            var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
            $(panelNow).removeClass('activeInnerOpener');
            $('main').css('height',$('main').height());
            $('#userOpenerInnerDivLogin').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('html, body').scrollTop(0);
                $.get( 'signup.html', function(data){
                    $('.loginPage').append($(data).find('#userOpenerInnerDivSignUp'));
                    $('#userOpenerInnerDivSignUp').css({'display':'block',
                        'opacity':'0',
                        '-webkit-transform':'scale(0.95)',
                        'transition':'opacity 0.3s, transform 0.3s'});
                signUpPageAjaxCall();
                miscImgLoader();
                    setTimeout(function(){
                        $('#userOpenerInnerDivSignUp').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('#userOpenerInnerDivLogin').remove();
                    },500)
                })
            },500);
        });

        var innerLinkPassword = $('.forgotPassword')

        innerLinkPassword.on('click',function(e){
            e.preventDefault();

            var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
            var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
            $(panelNow).removeClass('activeInnerOpener');
            $('main').css('height',$('main').height());
            $('#userOpenerInnerDivLogin').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('html, body').scrollTop(0);
                $.get( 'ForgotPassword.html', function(data){
                    $('.loginPage').append($(data).find('#userOpenerInnerDivForgotPassword'));
                    $('#userOpenerInnerDivForgotPassword').css({'display':'block',
                        'opacity':'0',
                        '-webkit-transform':'scale(0.95)',
                        'transition':'opacity 0.3s, transform 0.3s'});
                forgotPasswordPageAjaxCall();
                miscImgLoader();
                    setTimeout(function(){
                        $('#userOpenerInnerDivForgotPassword').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('#userOpenerInnerDivLogin').remove();
                    },500)
                })
            },500);
        });
}


function signUpPageAjaxCall() {
        var innerLink = $('.contShopping');

        innerLink.on('click', function(e){
            e.preventDefault();

            var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
            var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
            $(panelNow).removeClass('activeInnerOpener');
            $('main').css('height',$('main').height());
            $('#userOpenerInnerDivSignUp').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('html, body').scrollTop(0);
                $.get( 'login.html', function(data){
                    $('.loginPage').append($(data).find('#userOpenerInnerDivLogin'));
                    $('#userOpenerInnerDivLogin').css({'display':'block',
                        'opacity':'0',
                        '-webkit-transform':'scale(0.95)',
                        'transition':'opacity 0.3s, transform 0.3s'});
                loginPageAjaxCall();
                getSocialIcons();
                miscImgLoader();
                    setTimeout(function(){
                        $('#userOpenerInnerDivLogin').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('#userOpenerInnerDivSignUp').remove();
                    },500)
                })
            },500);
        });
}

function forgotPasswordPageAjaxCall() {
        var innerLink = $('.contShopping');

        innerLink.on('click', function(e){
            e.preventDefault();

            var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
            var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
            $(panelNow).removeClass('activeInnerOpener');
            $('main').css('height',$('main').height());
            $('#userOpenerInnerDivForgotPassword').css({'opacity':'0',
                '-webkit-transform':'scale(0.95)',
                'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('html, body').scrollTop(0);
                $.get( 'login.html', function(data){
                    $('.loginPage').append($(data).find('#userOpenerInnerDivLogin'));
                    $('#userOpenerInnerDivLogin').css({'display':'block',
                        'opacity':'0',
                        '-webkit-transform':'scale(0.95)',
                        'transition':'opacity 0.3s, transform 0.3s'});
                    loginPageAjaxCall();
                    getSocialIcons();
                    miscImgLoader();
                    setTimeout(function(){
                        $('#userOpenerInnerDivLogin').css({'display':'block',
                            'opacity':'1',
                            '-webkit-transform':'scale(1)',
                            'transition':'opacity 0.3s, transform 0.3s'});
                        $('#userOpenerInnerDivForgotPassword').remove();
                    },500)
                })
            },500);
        });
}


function getSocialIcons() {
    $('.divSocialIcons').load('SocialLogin.html #socialIconsHandler', function(){
        setTimeout(function(){
            miscImgLoader();
        },100);
    });
}