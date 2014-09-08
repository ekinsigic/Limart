$(document).ready(function(){
    loginPageAjaxCall();
    signUpPageAjaxCall();
})


function loginPageAjaxCall() {
        var innerLink = $('.signUp, .forgotPassword')

        innerLink.on('click',function(e){
            e.preventDefault();

            var panelNow = '#'+$(this).parents('.activeInnerOpener').attr('id');
            var panelToGo = '#'+$(this).attr('data-innerOpenerAnchor');
            $(panelNow).removeClass('activeInnerOpener');
            $('main').css('height',$('main').height());
            $('#userOpenerInnerDivLogin').css({'opacity':'0',
                                                    '-webkit-transform':'scale(0.95)',
                                                    'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('#userOpenerInnerDivLogin').scrollTop(0);
                $.get( 'signup.html', function(data){
                    $('.loginPage').append($(data).find('#userOpenerInnerDivPassword'));
                    $('#userOpenerInnerDivPassword').css({'display':'block',
                                                            'opacity':'0',
                                                            '-webkit-transform':'scale(0.95)',
                                                            'transition':'opacity 0.3s, transform 0.3s'});
                })
                setTimeout(function(){
                    $('#userOpenerInnerDivPassword').css({'display':'block',
                                                            'opacity':'1',
                                                            '-webkit-transform':'scale(1)',
                                                            'transition':'opacity 0.3s, transform 0.3s'});
                    $('#userOpenerInnerDivLogin').remove();
                    signUpPageAjaxCall();
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
            $('#userOpenerInnerDivPassword').css({'opacity':'0',
                                                    '-webkit-transform':'scale(0.95)',
                                                    'transition':'opacity 0.3s, transform 0.3s'});
            setTimeout(function(){
            $('#userOpenerInnerDivPassword').scrollTop(0);
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
                    $('#userOpenerInnerDivPassword').remove();
                    loginPageAjaxCall();
                },200)
            },500);
        });
}