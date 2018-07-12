## BlackJack

This is a game of BlackJack that I decided to build as part of my Sparta game project. In this game I try to combine everything I was taught so far to produce a complex and user interactive game. 

## How to play

1. Press on the red circle to trigger the prompt so you can enter a score. 

2. Lock your bet by clicking the bet button

----2 cards are dealt ------

3. Depending on the card combination make the optimal decision to hit a card combination bigger than your opponents.

4. Hit, Double or Hold (press hold if you want to end your turn)

5. The dealer plays their part.

6. Winner is declared, click next round and then repeat until you reach £500 or £0


## Requirements
	
Clone the file to your local machine and run it in Google Chrome or follow GitHub site hosting

## Troubleshooting/Issues

There are bugs with the Aces at this stage, if any ace does not go down to value of 1 if your score is over 21, then feel free to refresh the page to restart the hand.

## Project Details, how to code

SetUpDeck: Sets up your deck of cards by iterating through and array of card names and suits, saving everything to a new array named decks. Within the iterations values are set to every card, all the nubmers get their face value, the figures take the value of 10 and Ace the value of 11 or 1 if the score is over 21. Then the deck is shuffled by the function shuffle();

The game is initiated when the red circle is clicked or else, p1BetAmount button. within that function all the other actions exist. Starting with locking in your bet by clicking p1Bet.

The actions go as followed:
1. Dealign cards
	1) Set up the board (the image library of cards are named after the card name+value.png for example the 2 of clubs is 2C.png, Ace of Spades is AS).

	2) Every player is dealt two random cards and the score is set up for dealer and player 1.

2. User decision "Hold"
	1) Button Hold is clicked and immediately the two scores are compared and then the dealer decides whether they will need to hit or pass in order to win the game. 

	2) The dealer always strives to tie or win the player.

	3) The main logic and hand win condition is set in this function.

3. User decision "Hit"
	1) If the user has less than 21 they can decide to hit. If a user hits a card is assigned to their field and their score automatically increases. 

	2) The user is getting dealt a card and the process repeats until they press hold or get bust and then click next round.

4. User decision "Double"
	1) The user gets to draw only 1 more card and double downs their bet, after that, the dealer gets to play and try to beat the players hand.
