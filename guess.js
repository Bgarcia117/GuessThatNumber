// GUESS THAT NUMBER
// Text/message to be used throughout file
const enterNumText = `Please enter a number greater than zero`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum; 
// For storing the number to be guessed
let randomNum; 
// For storing the number of attempts left
let attempts;
// For storing the user's guess
let guess;
// For storing user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has a value of true
while (restartGame){
    // Asks user to enter a numebr to set the upper bound for the random number that will be created
    rangeNum = parseInt(prompt(`Please enter a maximum number for the range:`));
    // Will convert a response into a number if possible, if not, it will return NaN
    
    // Verifies that user's entry for a range number is a number greater than zero (NOTE: All numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false. Also, NaN has a default boolean value of false as well.)
    while(!rangeNum || rangeNum < 1){
        parseInt(prompt(enterNumText));
        // This will ensure that valid input will be used
    }

    // Creates the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifies the user's entry for a number of attempts allowed is a number greater than zero.
    while(!attempts || attempts < 1){
       attempts = parseInt(prompt(enterNumText));
    }

    // Asks user to enter a guess in the range that they set
    guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`)

    // Continues looping until the user guesses the correct number, or runs out of attempts (Loops until a BREAK keyword is run).
    while (true){
      // Displays the number/answer when a code word is entered
      if(guess === `what`){
        alert(`The number is ${randomNum}`)
        guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`)
      }

        
        // Tries to convert the user's guess into a number
        guess = parseInt(guess)

         while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}.`));
        }

        attempts--;

        // Checks if the user guessed correctly. If so, the game ends.
        if(guess === rangeNum){
            alert(`CONGRATULATIONS YOU GUESS THE CORRECT NUMBER: ${rangeNum}`);
            break;
            // Checks if user has any attempts left. If not, then the game ends.
        } else if (attempts === 0){
            alert(`Sorry, but you have run out of attempts :(
                The number was ${rangeNum}`);
                break;
         //Checks if user's guess was too low and prompts user to guess agian if so 
        } else if (guess < rangeNum){
            // Guess does not need to be inside of a parseInt because it was done earlier
            guess = prompt(`Too low. You have ${attempts} attempt(s) left`);
            //Checks if user's guess was too high and prompts user to guess agian if so 
        } else{
            guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
            
        }
    }
      // Prompts user with option to play again
  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

     // Loop continues until user submits a valid response
  while (true){
    // Checks if the user's answer is no (AKA "N" or "n")
    if (playAgain.toUpperCase() === "N"){
      // Alerts the user that the game is over and game does not restart
      alert(`Thanks for playing!`);
      restartGame = false;
      break;
      // Checks if the user's answer is yes (AKA "Y" or "y")
    } else if (playAgain.toUpperCase() === "Y"){
      // The game restarts
      break;
      // Prompts the user to enter a valid response and start the loop again
    } else {
      playAgain = prompt(`Please enter Y or N:`);
    }
  }

}
