
document.addEventListener("DOMContentLoaded", function(event) {

    //setting up the deck. Create it, shuffle, hit and pass functionalities
    var name = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    var suit = ["S","H","D","C"];
    var deck = [];
    var money = 100;
    var p2Score = 0;
    var dealerScore = 0;

    setUpDeck();
    $("#p1BetAmount").click(function() {
      var player1Bet = prompt("Enter the amount you want to bet");
      if (player1Bet < money) {
        $("#p1Bet").click(firstBets);
        $( "#p1BetAmount" ).hide( "slow", function(){});
      }
    })

    function reset(){

    }


    //After a bet has been placed, 2 cards are dealt to the player and their value should be calculated.
    //Options for hit and pass should be open
    function firstBets() {
      var p1Hand = [];
      var deHand = [];
      var p1Score = 0;
      var deScore = 0;

      for (var cd = 0; cd < 2; cd++) {
        p1Hand[cd] = deck.shift();
        $('#p1card'+cd).prepend('<img src= C:/Users/TECH-W74/Desktop/BJproject/images/'+p1Hand[cd].Name+p1Hand[cd].Suit+'.png />');
      }

      for (var de = 0; de < 2; de++) {
        deHand[de] = deck.shift();
      }
      $('#dealCard1').prepend('<img src= C:/Users/TECH-W74/Desktop/BJproject/images/gray_back.png />');
      $('#dealCard2').prepend('<img src= C:/Users/TECH-W74/Desktop/BJproject/images/'+ deHand[1].Name + deHand[1].Suit +'.png />');
      deScore = deHand[0].Value + deHand[1].Value;
      console.log(deScore);

      $( "#p1Bet" ).hide( "slow", function(){});
      p1score = p1Hand[0].Value + p1Hand[1].Value;
      $("#p1HandCounter").html("Player 1 score is "+p1score);


      //Once a player placed a bet, and seen their hand, they should be able to Hit on top of their combo
      //Here, an event is set that takes the top Card of the deck, matches it with the respective picture
      //Finally setting it up on it's column on the board
      $("#p1Hit").click(function() {
        var nextCard = deck.shift();
        if (p1score < 21) {
          p1score = p1score + nextCard.Value;
          $("#p1HandCounter").html("Player 1 score is: "+p1score);
          $('#p1card'+cd).prepend('<img src= C:/Users/TECH-W74/Desktop/BJproject/images/'+nextCard.Name+nextCard.Suit+'.png />');
          if (p1score > 21) {
            $("#p1HandCounter").html("Bust! Your score is: "+p1score);
            $( "#p1Hit" ).hide( "slow", function(){});
            $( "#p1Pass" ).hide( "slow", function(){});
            
          }
          }
        return cd++;
      });


      $("#p1Pass").click(function() {

      });

    }

    function pass() {

    }
    //gets 1 random integer from a pool of numbers
    function getRandomInteger(min,max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //setting up the deck, 2d array going through all suits and numbers
    function setUpDeck(){
      deck = [];
      for (var n = 0; n < name.length; n++) {
        for (var s = 0; s < suit.length; s++) {

          var value = parseInt(name[n]);

          if (name[n] == "J" || name[n] == "Q" || name[n] == "K" ) {
            value = 10;
          }else if (name[n] == "A") {
            value = 11;
          }

          var card = {Name: name[n], Suit: suit[s], Value: value};

          deck.push(card);
        };
      };
      shuffle(deck);
      return deck;
    };

    //shuffle the deck, get 2 counters in, set them to 0, count backwards the deck length, get random value for the next element,
    //replace the current element with another randomly chosen element in the deck
    function shuffle (deck) {
      var i = 0
      var j = 0
      var temp = null

      for (i = deck.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
        }
      }
    });
