//global variables for the questions and answers
var questions = ["What platform do you currently play on?","What game genre do you prefer?", ""];
var platformOptions = ["Xbox","Playstation","PC","Nintendo"]
var genreOptions = ["Action", "RPG", "Sports","Shooter",]

// variables created to make jquery easier to manipulate
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

    btn1.on("click", function() {
        generateQuestion1();
    });

    btn2.on("click", function() {
        generateQuestion1();
    });

    btn3.on("click", function() {
        generateQuestion1();
    });

    btn4.on("click", function() {
        generateQuestion1();
    });

}

var generateQuestion1 = function () {
    header.html('');
    btn1.html('');
    btn2.html('');
    btn3.html('');
    btn4.html('');
    
    header.append(questions[1]);

    btn1.append(genreOptions[0]);
    btn2.append(genreOptions[1]);
    btn3.append(genreOptions[2]);
    btn4.append(genreOptions[3]);

    btn1.on("click", function() {
        generateQuestion2();
    });

    btn2.on("click", function() {
        generateQuestion2();
    });

    btn3.on("click", function() {
        generateQuestion2();
    });

    btn4.on("click", function() {
        generateQuestion2();
    });
}

var generateQuestion2 = function () {
    header.html('');
    btn1.html('');
    btn2.html('');
    btn3.html('');
    btn4.html('');

    header.append(questions[1]);

    btn1.append(genreOptions[0]);
    btn2.append(genreOptions[1]);
    btn3.append(genreOptions[2]);
    btn4.append(genreOptions[3]);

    btn1.on("click", function() {
        
    });

    btn2.on("click", function() {
        
    });

    btn3.on("click", function() {
        
    });

    btn4.on("click", function() {
        
    });
}

var reDirect = function () {

}




gameData();
