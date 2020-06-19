var questions = ["What platform do you currently play on?","What game genre do you prefer?"];

console.log(questions);
 
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

$("#start-button").on("click", function() {
    //removes card element to be replaced with a question
    $("#starter-card").removeClass("card");
    $("#start-button").remove();
    $("#questions").addClass("card");

    generateQuestions();
})

var generateQuestions = function() {
    for ( var i =0; i < questions.length; i++){
        if (i == 0) {
            $("#quiz-content").append(questions[0]);
        }

        if (i == 1) {
            
        }
    }
}

gameData();
