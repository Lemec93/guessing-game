$(document).ready(function() {
    // Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // Set the number of attempts
    let attempts = 7;
    // Hide the restart button initially
    $('#submitRestart').addClass('d-none');

    // Reload the page when the restart button is clicked
    $('#submitRestart').click(function() {
        location.reload();
    });

    // Handle the guess submission
    $('#submitGuess').click(function() {
        // Get the user's guess and convert it to an integer
        let userGuess = parseInt($('#guessInput').val());

        // Check if the guess is within the valid range
        if (userGuess < 1 || userGuess > 100) {
            $('#feedback').text('Please enter a number between 1 and 100.');
        } else {
            // Decrease the number of attempts
            attempts--;
            // Check if the guess is correct
            if (userGuess === randomNumber) {
                $('#feedback').text('Congratulations! You guessed the correct number.');
                $('#submitRestart').removeClass('d-none'); // Show the restart button
                $('#submitGuess').prop('disabled', true); // Disable the guess button
            } else if (userGuess > randomNumber) {
                // Provide feedback if the guess is too high
                $('#feedback').text('Too high! Try again.');
            } else {
                // Provide feedback if the guess is too low
                $('#feedback').text('Too low! Try again.');
            }

            // Update the number of remaining attempts
            $('#attemptsLeft').text(`Attempts left: ${attempts}`);

            // Check if the user has run out of attempts
            if (attempts === 0 && userGuess !== randomNumber) {
                $('#feedback').text(`You lost! The correct number was ${randomNumber}.`);
                $('#submitRestart').removeClass('d-none'); // Show the restart button
                $('#submitGuess').prop('disabled', true); // Disable the guess button
            }
        }

        // Clear the input field
        $('#guessInput').val('');
    });
});