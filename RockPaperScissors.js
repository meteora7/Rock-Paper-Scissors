const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error!');
    }
     };
  //console.log(getUserChoice('Scissors'))
   
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  //console.log(getComputerChoice());
  function determineWinner(userChoice,computerChoice) {
  if(userChoice === computerChoice) {
  return 'The game is a tie!';
  }
   if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won!'
    } else {
      return 'You won!';
    } 
   }
    if(userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'You won!';
      } 
    }
      if (userChoice === 'scissors') {
        if(computerChoice === 'rock') {
          return 'Computer won!';
        } else {
          return 'You won!';
        }
      }
  };
  //console.log(determineWinner('rock','scissors'));
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  };
  playGame();