console.log("exercice 5");
$(document).ready(() => {

    //point 3
    var listInputs = ['rock','paper','scissors'];

    $('.images img').on('click',event => {
        let userChoise = $(event.currentTarget).attr('alt');
        $(event.currentTarget).parentsUntil('.row').children('#bigImg').html('<img src="img/' + userChoise + '.jpg" height="240px" alt="rock">');
        let computerChoise = listInputs[Math.floor(Math.random() * 3)];
        $(event.currentTarget).parentsUntil('.container').children('#pcSelection').children('#PCbigImg').html('<img src="img/' + computerChoise + '.jpg" height="240px" alt="rock">');
        if(userChoise === computerChoise){
            $(event.currentTarget).parentsUntil('.container').children('#resultat').html('<strong>Tied!!</strong>');
        } else if (userChoise === 'paper' && computerChoise === 'rock') {
            $(event.currentTarget).parentsUntil('.container').children('#resultat').html('<strong>Won!!</strong>');
        } else if (userChoise === 'rock' && computerChoise === 'scissors') {
            $(event.currentTarget).parentsUntil('.container').children('#resultat').html('<strong>Won!!</strong>');
        } else if (userChoise === 'scissors' && computerChoise === 'paper') {
            $(event.currentTarget).parentsUntil('.container').children('#resultat').html('<strong>Won!!</strong>');
        } else {
            $(event.currentTarget).parentsUntil('.container').children('#resultat').html('<strong>Lost!!</strong>');
        }
    });

    // point 4


// END
});
