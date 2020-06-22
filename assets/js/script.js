//global variables for the questions and answers
var questions = ["What platform do you currently play on?","What game genre do you prefer?", "Would you prefer games released within the last month or anytime?"];
var platformOptions = ["Xbox","Playstation","PC","Nintendo"]
var genreOptions = ["Action", "Indie", "Adventure","Shooter",]

// variables created to make jquery easier to manipulate
var btn1 = $("#A");
var btn2 = $("#B");
var btn3 = $("#C");
var btn4 = $("#D");
var header = $("#question-header");
var answerSection = $("#answer-section")
var dataArray = [];

//used to view datapoints within API 
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
//Same as above
var platformData = function () {
    var apiURL = "https://api.rawg.io/api/genres";
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
        var Xbox = 3;
        localStorage.setItem("Answer1", JSON.stringify(Xbox));
        generateQuestion1();
    });

    btn2.on("click", function() {
        var Playstation = 2;
        localStorage.setItem("Answer1",JSON.stringify(Playstation));
        generateQuestion1();
    });

    btn3.on("click", function() {
        var PC = 1;
        localStorage.setItem("Answer1",JSON.stringify(PC));
        generateQuestion1();
    });

    btn4.on("click", function() {
        var Nintendo = 7;
        localStorage.setItem("Answer1",JSON.stringify(Nintendo));
        generateQuestion1();
    });

}

var generateQuestion1 = function () {
    resetButtons();
    createNewButtons();

    header.append(questions[1]);

    var btn5 = $("#E");
    var btn6 = $("#F");
    var btn7 = $("#G");
    var btn8 = $("#H");

    btn5.append(genreOptions[0]);
    btn6.append(genreOptions[1]);
    btn7.append(genreOptions[2]);
    btn8.append(genreOptions[3]);

    btn5.on("click", function() {
        var action = "action";
        localStorage.setItem("Answer2",JSON.stringify(action));
    });

    btn6.on("click", function() {
        var indie = "indie";
        localStorage.setItem("Answer2",JSON.stringify(indie))
    });

    btn7.on("click", function() {
        var adventure = "adventure";
        localStorage.setItem("Answer2",JSON.stringify(adventure))
    });

    btn8.on("click", function() {
        var shooter = "shooter";
        localStorage.setItem("Answer2",JSON.stringify(shooter))
    });
}


var resetButtons = function () {
    header.html('');
    btn1.html ('');
    btn2.html('');
    btn3.html('');
    btn4.html('');
}

var createNewButtons = function () {
    btn1.replaceWith('<button type ="button" id = "E" class="answer-button"> </button>');
    btn2.replaceWith('<button type ="button" id = "F" class="answer-button"> </button>');
    btn3.replaceWith('<button type ="button" id = "G" class="answer-button"> </button>');
    btn4.replaceWith('<button type ="button" id = "H" class="answer-button"> </button>');
}


gameData();
platformData();

var reDirect = function () {

}