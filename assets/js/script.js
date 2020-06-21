var questions = ["What platform do you currently play on?","What game genre do you prefer?", ""];
var platformOptions = ["Xbox","Playstation","PC","Nintendo"]
var genreOptions = ["Action", "RPG", "Sports","Shooter",]

var btn1 = $("#A");
var btn2 = $("#B");
var btn3 = $("#C");
var btn4 = $("#D");
var header = $("#question-header");
var answerSection = $("#answer-section")
 
var gameData = function () {
    var apiURL = "https://api.rawg.io/api/platforms";
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

    generateQuestion0();
})

var generateQuestion0 = function() {
    header.append(questions[0]);
    answerSection.removeClass("hidden");

    btn1.append(platformOptions[0]);
    btn2.append(platformOptions[1]);
    btn3.append(platformOptions[2]);
    btn4.append(platformOptions[3]);
    
    header.append(questions[1]);

    btn1.append(genreOptions[0]);
    btn2.append(genreOptions[1]);
    btn3.append(genreOptions[2]);
    btn4.append(genreOptions[3]);
}





gameData();
