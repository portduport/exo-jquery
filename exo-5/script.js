console.log("exercice 5");
$(document).ready(() => {

    //point 3
    $('.images img').on('click',event => {
        let choise = $(event.currentTarget).attr('alt');
        console.log(choise);
    });
});
