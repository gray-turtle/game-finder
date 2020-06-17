
var gameData = function () {
    var apiURL = "https://api.rawg.io/api/";
    $.ajax({
        url: apiURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);

    })
}

var quiz = function () {
    var question1 = "What platform do you currently play on?";
    var question2 = "What game genre do you prefer?"
    
}

gameData();
