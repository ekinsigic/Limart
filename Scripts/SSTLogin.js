$(document).ready(function(){
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
                })
                setTimeout(function(){
                    $('#userOpenerInnerDivSignUp').css({'display':'block',
                                                            'opacity':'1',
                                                            '-webkit-transform':'scale(1)',
                                                            'transition':'opacity 0.3s, transform 0.3s'});
                    $('#userOpenerInnerDivLogin').remove();
                    signUpPageAjaxCall();
                },200)
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
                })
                setTimeout(function(){
                    $('#userOpenerInnerDivForgotPassword').css({'display':'block',
                                                            'opacity':'1',
                                                            '-webkit-transform':'scale(1)',
                                                            'transition':'opacity 0.3s, transform 0.3s'});
                    $('#userOpenerInnerDivLogin').remove();
                    forgotPasswordPageAjaxCall();
                },200)
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
                })
                setTimeout(function(){
                    $('#userOpenerInnerDivLogin').css({'display':'block',
                                                            'opacity':'1',
                                                            '-webkit-transform':'scale(1)',
                                                            'transition':'opacity 0.3s, transform 0.3s'});
                    $('#userOpenerInnerDivSignUp').remove();
                    loginPageAjaxCall();
                },200)
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
                })
                setTimeout(function(){
                    $('#userOpenerInnerDivLogin').css({'display':'block',
                                                            'opacity':'1',
                                                            '-webkit-transform':'scale(1)',
                                                            'transition':'opacity 0.3s, transform 0.3s'});
                    $('#userOpenerInnerDivForgotPassword').remove();
                    loginPageAjaxCall();
                },200)
            },500);
        });
}