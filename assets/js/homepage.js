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
  console.log(gameCards);

}

cardGenerator(5);

gameCards.forEach(element => element.addEventListener("mouseover", function() {
  console.log("boiiiiii");
  infoEl.classList = "text-center not-permanant";
  infoEl.innerText = "lorem ipsum ;dlkfha;slkdjfa;lskjdf;lsjdf;lkj;laskjg;lfkjg;ldkjgl;kasjaslkdfj";

  gameInfoEl.appendChild(infoEl);
})); 

//gameCards.addEventListener("mouseout", function(event) {
//  infoEl.parentNode.removeChild(infoEl);
//});
