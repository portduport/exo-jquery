console.log("exercice 4");
$(document).ready(() => {
// point 1
/*$('.btn-danger').on('click',() => {
    alert('Merci nous vous tiendrons informé des différentes offres');
});*/

// point 2
    $('.btn-danger').on('click',() => {
        let email = $("#email").val();
        alert('Merci ' + email + ' , nous vous tiendrons informé des différentes offres');
    });

// point 3
    $('#myNavbar ul:first li:last').on('dblclick',() => {
        $('#myNavbar ul:first li:last').remove();
    });

// point 4
//     let cart = 0;
//     $('.panel-body img').on('click',() => {
//         cart++;
//         $('#myNavbar ul li:last a').text('Cart (' + cart + ')');
//     });

// point 5
//     $('.img-responsive').on('mouseenter',event => {
//         var text = $(event.currentTarget).parentsUntil('.panel-heading').children('.panel-footer').html();
//         console.log('L\'utilisateur regarde ' + text);
//     });

// point 6
    $('#email').on('focus', event => {
       console.log("L'utilisateur a fait clic pour ajouter son mail");
    }).on('keypress', event => {
        console.log('Il ecriiiiiiiiiiiiiiii');
    })

// point 7
    let cart = 0;
    $('.img-responsive').on('click',event => {
        var text = $(event.currentTarget).parentsUntil('.panel-heading').children('.panel-footer').text();
        var num = text.match(/(\d+)/g);
        var numProduct = parseInt(num,10);
        console.log(numProduct);
        cart = cart + numProduct;
        console.log(cart);
        $('#myNavbar ul li:last a').html('Cart (' + cart + ')');
    });
// End
});