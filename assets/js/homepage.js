var cardWrapperEl = document.querySelector("#scrolling-wrapper");
var cardEl = document.querySelector("#card");
var suggestionsEl = document.querySelector("#suggestions");

$('.card').mouseover(function() {
  var infoEl = document.createElement("p");
  infoEl.classList("");
  infoEl.innerText = "lorem ipsum ;dlkfha;slkdjfa;lskjdf;lsjdf;lkj;laskjg;lfkjg;ldkjgl;kasjaslkdfj";

  infoEl.appendChild(suggestionsEl);
});

$('.card').mouseout(function() {

});