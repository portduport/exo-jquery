console.log("exercice 6");
$(document).ready(() => {
    // Point 1 - ok

    // Point 2
    var infos = [];
    $('button').on('click', event => {
        //alert('Attention mon pote!!');
        let email = $(event.currentTarget).parent().children('.form-group').children('#InputEmail').val();
        let password = $(event.currentTarget).parent().children('.form-group').children('#InputPassword').val();
        let validationEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!email) {
            $('#emailHelp').after('<div class="alert alert-warning">email obligatoire</div>');
        } else if(!validationEmail.test(email)){
            $('#emailHelp').after('<div class="alert alert-danger">Is not a email address</div>');
        } else if (!password) {
            $('#InputPassword').after('<div class="alert alert-warning">password obligatoire</div>');
        } else if(password.length < 6){
            $('#InputPassword').after('<div class="alert alert-danger">password has less than 6 characters</div>');
        } else if(email === 'hello@me.com' && password === 'secret8'){
            alert('Vous êtes connecté!!');
    }
        else {
        infos.push(email);
        infos.push(password);
        }
        console.log(infos);
    });


    // END
});