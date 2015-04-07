(function(){

    'use strict';

    var _gebi = function(id){
        return document.getElementById(id);
    };

    //email
    (function(){

        var emailInput = _gebi('email-input'),
            sendBtn = _gebi('email-send-btn'),

            BsendBtn = B(sendBtn),

            performingState = false,
            showState = function(stateName, freezeOnState){
                performingState = true;

                BsendBtn.addClass('is-hidden');
                setTimeout(function(){
                    BsendBtn.removeClass('is-hidden');
                    BsendBtn.addClass('is-'+stateName);

                    if(!freezeOnState){
                        setTimeout(function(){
                            BsendBtn.addClass('is-hidden');
                            setTimeout(function(){
                                BsendBtn.removeClass('is-'+stateName);
                                BsendBtn.removeClass('is-hidden');
                                performingState = false;
                            }, 300);
                        }, 1000);
                    }
                }, 300);
            };

        BsendBtn.click(function(e){
            e.preventDefault();
            if(performingState) return;

            var val = emailInput.value;

            if(!/.+\@.+\..+/.test(val)){
                showState('error');
                return;
            }

            //send email
            BsendBtn.addClass('is-mailing');

            setTimeout(function(){
                BsendBtn.removeClass('is-mailing');
                showState('success', true);
            }, 5000);
        });

    }());

}());
