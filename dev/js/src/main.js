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
            },

            sendMail = function(e){
                e.preventDefault();
                if(performingState) return;

                var val = emailInput.value;

                if(!/.+\@.+\..+/.test(val)){
                    showState('error');
                    return;
                }

                //send email
                BsendBtn.addClass('is-mailing');

                B.ajax({
                    url: '../php/form.php',
                    type: 'post',
                    data: 'email='+val,
                    dataType: 'json',
                    success: function(res){
                        BsendBtn.removeClass('is-mailing');
                        if(res.success) {
                            showState('success', true);
                        } else {
                            showState('error');
                        }
                    }
                });
            };

        B(emailInput).on('keyup', function(e){
            alert(e.keyCode);
            if(e.keyCode === 13){
                e.preventDefault();
                sendMail(e);
            }
        });
        BsendBtn.click(sendMail);

    }());

}());
