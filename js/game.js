/*
Main Game Class
*/

// Stores the players inputed name
var playerName = "";

// Stores the players current opponent level
var level = 1;

// Stores the scores for both computer and player
var playerScore = 0;
var compScore = 0;

// Stores the health for both computer and player
var playerHealth = 25;
var compHealth = 25;

// Temporary storage for the player and computer's currently chosen option
var playerChoice = "";
var compChoice = "";

// Variable identifier for timed message displaying
var messageTimer;

// Starts the game and shows the player name entry interface
function gameInit()
{
	// Hides the first start game button and page title
	document.getElementById("playGameButton").style.visibility = "hidden";
	document.getElementById("titleText").style.visibility = "hidden";

	// Shows the name entry interface
	document.getElementById("nameEntry").style.visibility = "visible";
}

// Run after the user accepts their name entry
function gameStart()
{
	// Sets the global player name variable to equal whatever the user entered in the textbox
	playerName = document.getElementById("nameTextbox").value;

	// Checks if the user inputted a blank name and sets their name to "Player" if the name was blank
	if(playerName == "")
	{
		playerName = "Player";
	}

	// Hides the name entry interface
	document.getElementById("nameEntry").style.visibility = "hidden";

	// Shows the player and computer name and score info, inputting the stored player name for the players displayed name
	document.getElementById("playerNameDisplay").textContent = playerName;
	document.getElementById("playerInfoDisplay").style.visibility = "visible";
	document.getElementById("computerInfoDisplay").style.visibility = "visible";

	// Shows the opponent info for the current level the user is on (Default: 1)
	showOpponentInfo(level);

	// Shows the player and computer health displays
	document.getElementById("playerHealth").style.visibility = "visible";
	document.getElementById("compHealth").style.visibility = "visible";

	// Shows the "Rock", "Paper" and "Scissors" options to the player
	showChoiceOptions(true);
}

// Resets the game board, called once the player or computer reaches 0 health
function resetBoard()
{
	showOpponentInfo(level);

	// Hides the "Rock", "Paper" and "Scissors" images
	showChoiceImages(false);
	
	// Shows question marks where the "Rock", "Paper" or "Scissors" images are displayed
	showEmptyChoices(true);

	// Sets the player and computers health bars to full
	document.getElementById("playerHealthValue").style.height = "250px";
	document.getElementById("compHealthValue").style.height = "250px";
}

// Shows the opponent info for the level that is passed to the function
function showOpponentInfo(lvl)
{
	// Hides all opponent info displays for each level
	document.getElementById("opponentInfo1").style.visibility = "hidden";
	document.getElementById("opponentInfo2").style.visibility = "hidden";
	document.getElementById("opponentInfo3").style.visibility = "hidden";
	document.getElementById("opponentInfo4").style.visibility = "hidden";
	document.getElementById("opponentInfo5").style.visibility = "hidden";

	// Switch case for the level passed to the function to show the proper opponent info display
	switch(lvl)
	{
		case 1:
			document.getElementById("opponentInfo1").style.visibility = "visible";
			break;
		case 2:
			document.getElementById("opponentInfo2").style.visibility = "visible";
			break;
		case 3:
			document.getElementById("opponentInfo3").style.visibility = "visible";
			break;
		case 4:
			document.getElementById("opponentInfo4").style.visibility = "visible";
			break;
		case 5:
			document.getElementById("opponentInfo5").style.visibility = "visible";
			break;
	}
}

// Function to show or hide the "Rock", "Paper" and "Scissors" choice options and well as the choice option text
function showChoiceOptions(show)
{
	// If statement to hide the choices if false is passed to the function or to show them if anything else is passed
	if(show == false)
	{
		document.getElementById("choiceText").style.visibility = "hidden";
		document.getElementById("rockButton").style.visibility = "hidden";
		document.getElementById("paperButton").style.visibility = "hidden";
		document.getElementById("scissorsButton").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("choiceText").style.visibility = "visible";
		document.getElementById("rockButton").style.visibility = "visible";
		document.getElementById("paperButton").style.visibility = "visible";
		document.getElementById("scissorsButton").style.visibility = "visible";
	}
}

// Function to show or hide question marks in place of the choice images for the player and computer
function showEmptyChoices(show)
 {
	// If statement to hide the question marks if false is passed to the function or to show them and clear the players and computers current choices if anything else is passed
	if(show == false)
	{
		document.getElementById("playerChoiceEmpty").style.visibility = "hidden";
		document.getElementById("compChoiceEmpty").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("playerChoiceEmpty").style.visibility = "visible";
		document.getElementById("compChoiceEmpty").style.visibility = "visible";
		playerChoice = "";
		compChoice = "";
	}
}

// Function to show or hide the "rock", "paper" or "scissors" images for both the player and computer
function showChoiceImages(show)
 {
	 // If statement to hide the choice images if false is passed to the function or to show them if anything else is passed
	if(show == false)
	{
		document.getElementById("playerChoiceImage").style.visibility = "hidden";
		document.getElementById("compChoiceImage").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("playerChoiceImage").style.visibility = "visible";
		document.getElementById("compChoiceImage").style.visibility = "visible";
	}
}

// Function to be called when the player clicks the "rock" choice button 
function rockChoice()
{
	// Hides the choice options and sets the players choice image to be the "rock" symbol
	showChoiceOptions(false);
	showRock("user");

	// Writes the players choice to the playerChoice variable to be used later
	playerChoice = "rock";

	// Calls the function to initiate the computer picking its choice
	compChoose();
}

// Function to show the "rock" image for either the player or computer depending on what is passed to the function
function showRock(user) {
	// If statement to set the players image to "rock" if "user" is passed to the function or to set the computers image to "rock" if anything else is passed
	if(user == "user")
	{
		// Hides the question mark placeholders and sets the choice image to the proper image before making it visible
		showEmptyChoices(false);
		document.getElementById("playerChoiceImage").setAttribute("src", "images/rockSymbol.jpg");
		document.getElementById("playerChoiceImage").style.visibility = "visible";
	}
	else
	{
		showEmptyChoices(false);
		document.getElementById("compChoiceImage").setAttribute("src", "images/rockSymbol.jpg");
		document.getElementById("compChoiceImage").style.visibility = "visible";
	}
}

function paperChoice() {
	showChoiceOptions(false);
	showPaper("user");

	playerChoice = "paper";

	compChoose();
}

function showPaper(user)
{
	if(user == "user")
	{
		showEmptyChoices(false);
		document.getElementById("playerChoiceImage").setAttribute("src", "images/paperSymbol.jpg");
		document.getElementById("playerChoiceImage").style.visibility = "visible";
	}
	else
	{
		showEmptyChoices(false);
		document.getElementById("compChoiceImage").setAttribute("src", "images/paperSymbol.jpg");
		document.getElementById("compChoiceImage").style.visibility = "visible";
	}
}

function scissorsChoice() {
	showChoiceOptions(false);
	showScissors("user");

	playerChoice = "scissors";

	compChoose();
}

function showScissors(user)
{
	if(user == "user")
	{
		showEmptyChoices(false);
		document.getElementById("playerChoiceImage").setAttribute("src", "images/scissorsSymbol.jpg");
		document.getElementById("playerChoiceImage").style.visibility = "visible";
	}
	else
	{
		showEmptyChoices(false);
		document.getElementById("compChoiceImage").setAttribute("src", "images/scissorsSymbol.jpg");
		document.getElementById("compChoiceImage").style.visibility = "visible";
	}
}

// Function to determine how the computer will pick its choice depending on the opponent the player is currently facing
function compChoose()
{
	// Switch case to pick the basic choosing function if the player is on the first opponent and the harder choosing function with increasing difficulty percentages as the player goes from levels 2 to 5
	switch(level)
	{
		case 1:
			compChooseOppNorm();
			break;
		case 2:
			compChooseOppHard(5);
			break;
		case 3:
			compChooseOppHard(10);
			break;
		case 4:
			compChooseOppHard(15);
			break;
		case 5:
			compChooseOppHard(25);
			break;
	}
}

// Function to have the computer pick a choice without any added difficulty
function compChooseOppNorm()
{
	// Generate a random integer between 1 and 100
	var randValue = randIntGen(1, 100);

	// If statement to choose either "rock", "paper" or "scissors" randomly based on the random number stored in randValue
	if(randValue >= 1 && randValue <= 33)
	{
		// Calls the showRock function while passing "comp" to show the "rock" image in the computer choice image area and writes the computers choice to a variable to be used in the future
		showRock("comp")
		compChoice = "rock";
	}
	else if(randValue >= 34 && randValue <= 67)
	{
		showPaper("comp");
		compChoice = "paper";
	}
	else
	{
		showScissors("comp");
		compChoice = "scissors";
	}

	// Since at this point the player and computer have both chosen options the winnerDecide function is called to decide the winner of that round
	winnerDecide();
}

// Function to have the compuiter pick a choice that can be passed a number to be used as a percentage chance that the computer will win no matter what the player picks
function compChooseOppHard(diffPercent)
{
	var randValue = randIntGen(1, 100);
	
	// If statement to check whether the random value generated is within the percentage range passed to the function
	if(randValue >= 1 && randValue <= diffPercent)
	{
		// Calls the function which forces the computer to win the round
		compForceWin();
	}
	else
	{
		// Reverts back to using the choosing function with no added difficulty 
		compChooseOppNorm();
	}
}

// Function to handle the outcome of each round based on the players and computers choices
function winnerDecide()
{
	// Switch case to handle the 3 different possible player choices
	switch(playerChoice)
	{
		case "rock":
			//Switch case to handle the 3 different possible computer choices
			switch(compChoice)
			{
			case "rock":
				// Shows the tie message on screen
				showTieMessage(true);
				// Waits 3000ms (3 seconds) before hiding the tie message once again
				messageTimer = setTimeout(showTieMessage, 3000, false);
				break;
			case "paper":
				// Shows the lose message on screen
				showLoseMessage(true);
				// Waits 3000ms (3 seconds) before hiding the lose message once again
				messageTimer = setTimeout(showLoseMessage, 3000, false);
				// Calls the function to damage the player since they lost the round
				damagePlayer();
				break;
			case "scissors":
				// Shows the win message on screen
				showWinMessage(true);
				// Waits 3000ms (3 seconds) before hiding the win message once again
				messageTimer = setTimeout(showWinMessage, 3000, false);
				// Calls the function to damage the computer since it lost the round
				damageComp();
				break;
			}
			break;
		case "paper":
			switch(compChoice)
			{
			case "rock":
				showWinMessage(true);
				messageTimer = setTimeout(showWinMessage, 3000, false);
				damageComp();
				break;
			case "paper":
				showTieMessage(true);
				messageTimer = setTimeout(showTieMessage, 3000, false);		
				break;
			case "scissors":
				showLoseMessage(true);
				messageTimer = setTimeout(showLoseMessage, 3000, false);		
				damagePlayer();
				break;
			}
			break;
		case "scissors":
			switch(compChoice)
			{
			case "rock":
				showLoseMessage(true);
				messageTimer = setTimeout(showLoseMessage, 3000, false);
				damagePlayer();
				break;
			case "paper":
				showWinMessage(true);
				messageTimer = setTimeout(showWinMessage, 3000, false);
				damageComp();
				break;
			case "scissors":
				showTieMessage(true);
				messageTimer = setTimeout(showTieMessage, 3000, false);
				break;
			}
			break;
	}
}

// Function that when called will choose the computers choice in order to make it always win against the players choice
function compForceWin()
{
	// Switch case to handle the 3 different possible player choices
	switch(playerChoice)
	{
		case "rock":		
			// Calls the showPaper function while passing "comp" to show the "paper" image in the computer choice image area and writes the computers choice to a variable to be used in the future
			showPaper("comp");
			compChoice = "paper";
			break;
		case "paper":
			showScissors("comp");
			compChoice = "scissors";
			break;
		case "scissors":
			showRock("comp");
			compChoice = "rock";
			break;
	}
	
	// Since at this point the player and computer have both chosen options the winnerDecide function is called to decide the winner of that round
	winnerDecide();
}

// Function to handle damage being dealt to the player
function damagePlayer()
{
	// Generates a random integer between 1 and 5
	var randValue = randIntGen(1, 5);

	// Sets the players health value to be their old health value minus the randomly generated damage value
	playerHealth = playerHealth - randValue;

	// Shows the health loss notification with the proper amount of damage done beside the players health bar
	document.getElementById("playerHealthTextNotif").textContent = ("-" + randValue.toString());

	// If statement to check if the players health it still above 0 once the damage has been dealt
	if(playerHealth > 0)
	{
		// Sets the height of the red bar symbolizing the players health value to be equal to the players health times 10 in pixels
		document.getElementById("playerHealthValue").style.height = ((playerHealth * 10).toString() + "px");
	}
	else
	{
		// Sets the height of the red bar symbolizing the players health value to be 0
		document.getElementById("playerHealthValue").style.height = "0px";
		// Calls the function to handle the computer reducing the players health to 0
		compWin();
	}
}

// Function to handle damage being dealt to the computer
function damageComp()
{
	// Generates a random integer between 1 and 5	
	var randValue = randIntGen(1, 5);

	// Sets the computers health value to be its old health value minus the randomly generated damage value
	compHealth = compHealth - randValue;

	// Shows the health loss notification with the proper amount of damage done beside the computers health bar
	document.getElementById("compHealthTextNotif").textContent = ("-" + randValue.toString());

	// If statement to check if the computers health is still above 0 once the damage has been dealth
	if(compHealth > 0)
	{
		// Sets the height of the red bar symbolizing the computers health value to be equal to the computers health times 10 in pixels
		document.getElementById("compHealthValue").style.height = ((compHealth * 10).toString() + "px");
	}
	else
	{
		// Sets the height of the red bar symbolizing the computers health value to be 0
		document.getElementById("compHealthValue").style.height = "0px";
		// Calls the function to handle the player reducing the computers health to 0
		playerWin();
	}
}

// Function to handle the outcome of the player reducing the computers health to 0
function playerWin()
{
	// If statement to check whether or not the player is on the final opponent
	if(level < 5)
	{
		// Increases the players current level (opponent) by 1
		level = level + 1;

		// Sets both the computer and players health values back to full
		playerHealth = 25;
		compHealth = 25;

		// Resets the game board for the new opponent after waiting 3000ms (3 seconds)
		setTimeout(resetBoard, 3000);
	}
	else
	{
		// Cancels the timer that will hide the "You Win!" message after 3 seconds to show it permanently now that the player has beat the final opponent
		clearTimeout(messageTimer);
		
		// Hides the notification showing how much damage was done to the computer on the final turn after 3000ms (3 seconds)
		setTimeout(function()
		{
			document.getElementById("compHealthTextNotif").style.visibility = "hidden";
		}, 3000)
	}
	
	// Increases the players score by 1 by calling the appropriate function
	playerAddScore(1);
}

// Function to handle the outcome of the computer reducing the players health to 0
function compWin()
{
	// If statement to check if the computer is at the winning score of 5 yet
	if(compScore < 4)
	{
		// Sets both the computer and players health values back to full
		playerHealth = 25;
		compHealth = 25;
	
		// Resets the game board for for a new round against the same opponent after waiting 3000ms (3 seconds)
		setTimeout(resetBoard, 3000);
	}
	else
	{
		// Cancels the timer that will hide the "You Lose!" message after 3 seconds to show it permanently now that the computer has beat the player 5 times
		clearTimeout(messageTimer);
		
		// Hides the notification showing how much damage was done to the player on the final turn after 3000ms (3 seconds)
		setTimeout(function()
		{
			document.getElementById("playerHealthTextNotif").style.visibility = "hidden";
		}, 3000)
	}
	
	// Increases the computers score by 1 by calling the appropriate function
	compAddScore(1);
}

// Function to increase the players score by the passed amount
function playerAddScore(amount)
{
	// Increases the players score variable by the passed amount
	playerScore = playerScore + amount;

	// Sets the players on screen score to display the correct score
	document.getElementById("playerScoreDisplay").textContent = ("Score: " + playerScore.toString());
}

// Function to increase the computers score by the passed amount
function compAddScore(amount)
{
	// Increases the computers score variable by the passed amount
	compScore = compScore + amount;
	
	// Sets the computers on screen score to display the correct score
	document.getElementById("computerScoreDisplay").textContent = ("Score: " + compScore.toString());
}

function showLoseMessage(show)
{
	if(show == false)
	{
		document.getElementById("loseMessage").style.visibility = "hidden";
		showChoiceOptions(true);
		showEmptyChoices(true);
		showChoiceImages(false);
		document.getElementById("playerHealthTextNotif").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("loseMessage").style.visibility = "visible";
		document.getElementById("playerHealthTextNotif").style.visibility = "visible";
	}
}

function showTieMessage(show)
{
	if(show == false)
	{
		document.getElementById("tieMessage").style.visibility = "hidden";
		showChoiceOptions(true);
		showEmptyChoices(true);
		showChoiceImages(false);
	}
	else
	{
		document.getElementById("tieMessage").style.visibility = "visible";
	}
}

function showWinMessage(show)
{
	if(show == false)
	{
		document.getElementById("winMessage").style.visibility = "hidden";
		showChoiceOptions(true);
		showEmptyChoices(true);
		showChoiceImages(false);
		document.getElementById("compHealthTextNotif").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("winMessage").style.visibility = "visible";
		document.getElementById("compHealthTextNotif").style.visibility = "visible";
	}
}

function randIntGen(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
