document.addEventListener("DOMContentLoaded", function(event) {

    //setting up the deck. Create it, shuffle, hit and pass functionalities
    var name = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    var suit = ["S","H","D","C"];
    var deck = [];
    var money = 100;
    var player1Bet;
    var count = 1;

    setUpDeck();
    $("#remainingCardsf").html("<h4>Remaining cards: "+deck.length+"</h4>");
    $("#player1RemainingMoney").html("You have: £"+money);
    $("#p1BetAmount").click(function() {
      var betAmountInString = prompt("Enter the amount you want to bet");
      player1Bet = (parseInt(betAmountInString));

      if (player1Bet <= money) {
        $("#p1Bet").one("click",firstBets);
        $( "#p1BetAmount" ).hide( "slow", function(){});
      }
    });


    //After a bet has been placed, 2 cards are dealt to the player and their value should be calculated.
    //Options for hit and pass should be open
    function firstBets() {
      $( "#p1Reset" ).hide( "slow", function(){});
      $("#player1RemainingMoney").html("You have: £"+(money-player1Bet));
      var p1Hand = [];
      var deHand = [];
      var p1Score = 0;
      var deScore = 0;

      for (var cd = 0; cd < 2; cd++) {
        p1Hand[cd] = deck.shift();
        $('#p1card'+cd).prepend('<img class=card src= images/'+p1Hand[cd].Name+p1Hand[cd].Suit+'.png />');
      }

      p1score = p1Hand[0].Value + p1Hand[1].Value;

      for (var de = 0; de < 2; de++) {
        deHand[de] = deck.shift();
      }

      $('#dealCard1').prepend('<img class = card src= images/gray_back.png />');
      $('#dealCard2').prepend('<img class = card src= images/'+ deHand[1].Name + deHand[1].Suit +'.png />');

      deScore = deHand[0].Value + deHand[1].Value;

      $("#remainingCards").html("<h4>Remaining cards: "+deck.length+"</h4>");

      //Hide button bet as it shouldn't be used again
      $( "#p1Bet" ).hide( "slow", function(){});

      $("#p1HandCounter").html("Player 1 score is "+p1score);

      //Pass anonymous function is created. 1st SPRINT: here the dealers turn should be coded.
      $( "#p1Pass" ).one( "click", function(){
        $( "#p1Hit" ).hide( "slow", function(){});
        $( "#p1Pass" ).hide( "slow", function(){});
        //replacing the face down card with the face up card. Because replaceWith() is used, we must re-add the col-md-2 class
        //which was removed by the function
        $('#dealCard1').replaceWith('<div id="dealCard1" class="col-md-2 cardContainer card"><img src= C:/Users/TECH-W74/Desktop/BJproject/images/'+deHand[0].Name+deHand[0].Suit+'.png /></div>');
        $('#dealerScoreLabel').html('<h4>Dealer score: '+deScore+'</h4>');


        setTimeout(function(){
          for (var de = 3; de <= 5; de++) {
            if (deScore < p1score && p1score <= 21) {
            var dealerCard = deck.shift();
            deScore = deScore + dealerCard.Value;
            switch (de) {
              case 3:
                  $('#dealCard3').prepend('<img class=card src= images/'+dealerCard.Name+dealerCard.Suit+'.png />');
                break;
              case 4:
                  $('#dealCard4').prepend('<img class=card src= images/'+dealerCard.Name+dealerCard.Suit+'.png />');
                break;
              case 5:
                  $('#dealCard5').prepend('<img class=card src= images/'+dealerCard.Name+dealerCard.Suit+'.png />');
                break;
              default:
            }
              $('#dealerScoreLabel').html('<h4>Dealer score: '+deScore+'</h4>');
            };
          };
          $("#remainingCards").html("<h4>Remaining cards: "+deck.length+"</h4>");
            if (deScore > 21 || p1score > deScore && p1score < 21) {
            money = money + player1Bet;
               $("#player1RemainingMoney").html("You have: £"+money);//AI LOSES
           }
           else if (deScore >= p1score && deScore <= 21 || p1score>21) {
             money = money - player1Bet;
            $("#player1RemainingMoney").html("You have: £"+money);//AI wins
            }
            else if (deScore == p1Score) {
             $("#player1RemainingMoney").html("You have: £"+money);//draw
           }
          }, 1500);
       
        $( "#p1Reset" ).show( "slow", function(){});

      });

        //after 3 seconds, the the AI logic will be coded

      //Once a player placed a bet, and seen their hand, they should be able to Hit on top of their combo
      //Here, an event is set that takes the top Card of the deck, matches it with the respective picture
      //Finally setting it up on it's column on the board
      $("#p1Hit").unbind().click(function() {
        $("#remainingCards").html("<h4>Remaining cards: "+deck.length+"</h4>");
        if (p1score < 21) {
          count++;
          var nextCard = deck.shift();
          p1score = p1score + nextCard.Value;
          $("#p1HandCounter").html("Player 1 score is: "+p1score);
          switch (count) {
            case 2:
              $('#p1card2').prepend('<img class=card src= images/'+nextCard.Name+nextCard.Suit+'.png />');
              break;
            case 3:
              $('#p1card3').prepend('<img class=card src= images/'+nextCard.Name+nextCard.Suit+'.png />');
              break;
            case 4:
              $('#p1card4').prepend('<img class=card src= images/'+nextCard.Name+nextCard.Suit+'.png />');
              break;
            default:
          }


          //if the player passes after a hit
          // $( "#p1Pass" ).click( function(){
          //   $("dealCard1").replaceWith('<img class=card src= images/'+deHand[0].Name+ deHand[0].Suit +'.png />')
          //   setTimeout(function(){
          //       for (var de = 3 ; de <= 5; de++) {
          //         if (deScore < p1score && p1score<=21) {
          //         var dealerCard = deck.shift();
          //         descore = descore + dealerCard.Value;
          //         switch (de) {
          //           case 3:
          //             $('#dealCard3').prepend('<img class=card src= images/'+dealerCard.Name+dealerCard.Suit+'.png />');
          //             break;
          //           case 4:
          //             $('#dealCard4').prepend('<img class=card src= images/'+dealerCard.Name+dealerCard.Suit+'.png />');
          //             break;
          //           case 5:
          //             $('#dealCard5').prepend('<img class=card src= images/'+dealerCard.Name+dealerCard.Suit+'.png />');
          //             break;
          //           default:
          //         }
          //         $('#dealerScoreLabel').html('<h4>Dealer score: '+deScore+'</h4>');
          //       }
          //     }
          //   }, 2000);
          //   $("#remainingCards").html("<h4>Remaining cards: "+deck.length+"</h4>");
          //   if (deScore > 21) {
          //     money = money + player1Bet;
          //     $("#player1RemainingMoney").html("You have: £"+money);//AI LOSES
          //   }
          //   else if (deScore >= p1score && deScore <= 21 || p1score>21) {
          //     money = money - player1Bet;
          //     $("#player1RemainingMoney").html("You have: £"+money);//AI wins
          //   }
          //   else if (deScore == p1Score) {
          //     $("#player1RemainingMoney").html("You have: £"+money);//draw
          //   }
          //   //reset everything
          //   $( "#p1Reset" ).show( "slow", function(){});
          // });
        }
        else if (p1score > 21 ){
          $("#p1HandCounter").html("Bust! Your score is: "+p1score);
          money = money - player1Bet;
          $( "#p1Hit" ).hide( "slow", function(){});
          $( "#p1Pass" ).hide( "slow", function(){});
          //reset everything
          $( "#p1Reset" ).show( "slow", function(){});
        };
      });
    };

    //function that checks for the winner comparing the 2 values
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

    //Board reset function
    $("#p1Reset").click("click", function() {
      setUpDeck();
      $(".cardContainer").empty();
      p1Hand = [];
      deHand = [];
      count = 1;
      $('#dealerScoreLabel').html('<h4>Dealer hand</h4>');
      $('#p1HandCounter').html('<h4>Player hand</h4>');
      $( "#p1Hit" ).show( "slow", function(){});
      $( "#p1Pass" ).show( "slow", function(){});
      $( "#p1BetAmount" ).show( "slow", function(){});
      $( "#p1Bet" ).show( "slow", function(){});
    });

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
