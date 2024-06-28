$(document).ready(function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 7;
    $('#submitRestart').addClass('d-none');

    $('#submitRestart').click(function() {
        location.reload();
    });

    $('#submitGuess').click(function() {
        let userGuess = parseInt($('#guessInput').val());

        if (userGuess < 1 || userGuess > 100) {
            $('#feedback').text('Veuillez entrer un nombre entre 1 et 100.');
        } else {
            attempts--;
            if (userGuess === randomNumber) {
                $('#feedback').text('Félicitations ! Vous avez deviné le bon nombre.');
                $('#submitRestart').removeClass('d-none');
                $('#submitGuess').prop('disabled', true);
            } else if (userGuess > randomNumber) {
                $('#feedback').text('Trop grand ! Essayez encore.');
            } else {
                $('#feedback').text('Trop petit ! Essayez encore.');
            }

            $('#attemptsLeft').text(`Tentatives restantes : ${attempts}`);

            if (attempts === 0 && userGuess !== randomNumber) {
                $('#feedback').text(`Vous avez perdu ! Le nombre correct était ${randomNumber}.`);
                $('#submitRestart').removeClass('d-none');
                $('#submitGuess').prop('disabled', true);
            }
        }

        $('#guessInput').val('');
    });
});
