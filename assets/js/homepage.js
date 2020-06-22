var cardWrapperEl = document.querySelector("#scrolling-wrapper");
var suggestionsEl = document.querySelector("#suggestions");
var gameInfoEl = document.querySelector("#game-info");
var infoEl = document.createElement("p");
var gameCards = [];
var gameNames = [];
var gameIds = [];
var gameDescriptions = [];

var cardGenerator = function(numberOfGames) {
  for (i = 0; i < numberOfGames; i++) {
    gameCards[i] = document.createElement("div");
    gameCards[i].innerHTML = "<h3>" + gameNames[i] + "</h3>";
    gameCards[i].classList = "card";
    gameCards[i].id = "card" + i;
    cardWrapperEl.appendChild(gameCards[i]);
  }
}

var getGames = function() {
  var platformSelection = localStorage.getItem("Answer1");
  var genreSelection = localStorage.getItem("Answer2");

  console.log(platformSelection, genreSelection);

  var apiUrl = "https://api.rawg.io/api/games?genres=" + genreSelection + "&parent_platforms=" + platformSelection;
  
  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function(response) {
        console.log(response);
        for (i = 0; i < 20; i++ ) {
          gameNames[i] = response.results[i].name;
          gameIds[i] = response.results[i].id;
        }
        cardGenerator(20);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  }).catch(function(error) {
    alert("Unable to connect to database");
  });
}

//var describeGames = function() {
//  var currentGame = gameIds[0];

//  var apiUrl = "https://api.rawg.io/api/games/{" + currentGame + "}?description";

//  fetch(apiUrl).then(function(response) {
//    if (response.ok) {
//      response.json().then(function(response) {
//        console.log(response);
//        for (i = 0; i < 20; i++ ) {
//          gameDescriptions[i] = response.description;
//          currentGame += 1;
//        }
//      });
//    } else {
//      alert("Error: " + response.statusText);
//    }
//  }).catch(function(error) {
//    alert("Unable to connect to database");
//  });
//}

//describeGames();

//gameCards.forEach(element => element.addEventListener("mouseover", function() {
//  infoEl.classList = "text-center not-permanant";
//  infoEl.innerText = gameDescriptions[0];

//  gameInfoEl.appendChild(infoEl);
//}));

//gameCards.forEach(element => element.addEventListener("mouseout", function() {
//  infoEl.parentNode.removeChild(infoEl);
//}));

getGames();