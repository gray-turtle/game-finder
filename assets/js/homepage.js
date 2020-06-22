var cardWrapperEl = document.querySelector("#scrolling-wrapper");
var suggestionsEl = document.querySelector("#suggestions");
var gameInfoEl = document.querySelector("#game-info");
var infoEl = document.createElement("p");
var gameCards = [];

var cardGenerator = function(numberOfGames) {
  for (i = 0; i < numberOfGames; i++) {
    gameCards[i] = document.createElement("div");
    gameCards[i].innerHTML = "<h3></h3>";
    gameCards[i].classList = "card";
    gameCards[i].id = "card" + i;
    cardWrapperEl.appendChild(gameCards[i]);
  }
}

var getGames = function() {
  var platformSelection = localStorage.getItem("");
  var genreSelection = localStorage.getItem("");
  var releaseSelection = localStorage.getItem("");

  console.log(platformSelection, genreSelection, releaseSelection);

  var apiUrl = "https://api.rawg.io/api/games?genres=" + genreSelection + "&platforms=";
  
  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function(response) {
        console.log(response);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  }).catch(function(error) {
    alert("Unable to connect to database");
  });
}

cardGenerator(5);

gameCards.forEach(element => element.addEventListener("mouseover", function() {
  infoEl.classList = "text-center not-permanant";
  infoEl.innerText = "lorem ipsum ;dlkfha;slkdjfa;lskjdf;lsjdf;lkj;laskjg;lfkjg;ldkjgl;kasjaslkdfj";

  gameInfoEl.appendChild(infoEl);
}));

gameCards.forEach(element => element.addEventListener("mouseout", function() {
  infoEl.parentNode.removeChild(infoEl);
}));

getGames();