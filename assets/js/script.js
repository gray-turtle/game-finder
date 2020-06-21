//global variables for the questions and answers
var questions = ["What platform do you currently play on?","What game genre do you prefer?", "Would you prefer games released within the year or anytime?"];
var platformOptions = ["Xbox","Playstation","PC","Nintendo"]
var genreOptions = ["Action", "RPG", "Sports","Shooter",]
var releaseOptions = ["Anytime", "This Year"]

// variables created to make jquery easier to manipulate
var btn1 = $("#A");
var btn2 = $("#B");
var btn3 = $("#C");
var btn4 = $("#D");
var header = $("#question-header");
var answerSection = $("#answer-section")

 
var gameData = function () {
    var apiURL = "https://api.rawg.io/api/games";
    $.ajax({
        url: apiURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);

    })
}

var platformData = function () {
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
        var Xbox = "Xbox"
        console.log(answerArray);
        localStorage.setItem("Xbox", Xbox);
        generateQuestion1();
    });

    btn2.on("click", function() {
        var Playstation = "Playstation"
        localStorage.setItem("Playstation",Playstation);
        generateQuestion1();
    });

    btn3.on("click", function() {
        var PC = "PC"
        localStorage.setItem("PC",PC);
        generateQuestion1();
    });

    btn4.on("click", function() {
        var Nintendo = "Nintendo"
        localStorage.setItem("Nintendo",Nintendo);
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
        var Action = "Action";
        localStorage.setItem("Action",Action);
        console.log(localStorage);
        generateQuestion2();
    });

    btn2.on("click", function() {
        var RPG = "RPG";
        localStorage.setItem("RPG", RPG);
        generateQuestion2();
    });

    btn3.on("click", function() {
        var Sports = "Sports";
        localStorage.setItem("Sports",Sports);
        generateQuestion2();
    });

    btn4.on("click", function() {
        var Shooter = "Shooter";
        localStorage.setItem("Shooter",Shooter);
        generateQuestion2();
    });
}

var generateQuestion2 = function () {
    header.html('');
    btn1.html('');
    btn2.html('');
    btn3.html('');
    btn4.html('');

    header.append(questions[2]);

    btn1.append(releaseOptions[0]);
    btn2.append(releaseOptions[1]);

    btn3.remove();
    btn4.remove();

    btn1.on("click", function() {
        
    });

    btn2.on("click", function() {
        
    });

}

var reDirect = function () {

}


gameData();
platformData();
