
document.addEventListener("DOMContentLoaded", function(event) {

    //setting up the deck. Create it, shuffle, hit and pass functionalities
    var name = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    var suit = ["Spades","Hearts","Diamonds","Clubs"];
    var deck = [];

    setUpDeck();
    console.log(deck);


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
