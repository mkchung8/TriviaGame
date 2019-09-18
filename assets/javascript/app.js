$(document).ready(function(){

    // Question & Answers Object

    var gameQuestions = [
        {question: "What is another name for the treble clef?",
         answers: ["C Clef","G Clef","Soprano Clef","T Clef"] },
    
        {question: "A minim is exactly half of the length of a...",
         answers: ["Semibreve", "Quarter Rest", "Quaver", "Semiquaver"] },

        {question: "What is the shortest distance between two musical sounds called?",
         answers: ["Octave", "Semitone","Sharp","Scale"] },

        {question: "Which of these is music written on?",
          answers: ["Bar Lines", "Leger Lines", "Staves", "Sharps"] },

        {question: "Where can you find the key signature?",
         answers: ["After Time Signatures", "Before Time Signatures","After a Bar Line","Before the Natural Sign"] },

        {question: "A sharp sign next to the note tells you to play the note: ",
         answers: ["One Tone Lower","One Tone Higher","One Semitone Lower", "One Semitone Higher"] },

        {question: "What do bar lines do?",
         answers: ["Divide Bars", "Join Staves", "End Sections", "Join Notes"] },

        {question: "Which one of these represents the chord E# Augmented?", 
         answers: ["E# G## B#","E# G# B#","E# G# B","E# G# B##"] },

        {question: "The Circle of Fifths is an organization of what?", 
         answers: ["Key Signatures","Time Signatures","Intervals","Chord Progessions"]},

        {question: "How many keys does a standard piano have?", 
         answers: ["80","100","78","88"]}

    ];

    var answersCorrect = ["G Clef", "Semibreve","Semitone","Staves","Before Time Signatures","One Semitone Higher","Divide Bars","E# G# B##","Key Signatures","88"]
    var count = 0;
    var showQuestion; 
    var score = 0;
    var timerCount = 11; 

   

    function startScreen() {
        
        var startButton = $('<button id="start" type="button" class="btn btn-secondary">Start</button>');
        $("#main-content").html("<h2><b>Are you a Music Theory Master?</b> <br> <br> Answer each question in 10 seconds.<br> Press start to begin!</h2>");
        $("#main-content").append('<img src="assets/images/startimage.gif" alt="image">');
        $("#main-content").append(startButton);
        };

    startScreen();

    $("#start").on("click", function(){
        $("#main-content").empty();
    gameStart();
    });

    var intervalId;

    function gameStart () {

    displayQuestion();

    function displayQuestion () {
        $("#main-content").append("<h2>" + gameQuestions[count].question + "</h2>");
            for (var i=0; i < 4; i++) {
                var guesses = $("<button>")
                guesses.attr("data-name",gameQuestions[count].answers[i])
                guesses.text(gameQuestions[count].answers[i])
                $("#main-content").append(guesses) 
            };
        var timerDiv = $("<div id='timer-div'>")
                        $("#main-content").prepend(timerDiv)
            
        };

       intervalId = setInterval(timeWindow, 1000)
            function timeWindow () {
                timerCount--;
                $("#timer-div").html("<p>You have " + timerCount + " seconds left.")
                if(timerCount === -1) {
                    clearInterval(intervalId)
                    $("#timer-div").html("Your time is up!")
                    $("#timer-div").append("<br> The correct answer was " + answersCorrect[count] + ".")
                    setTimeout(nextQuestion, 1000*3)
                }
                }
    
                
                
                
    var userGuess;


    $("button").on("click", function(){
        clearInterval(intervalId)
        $("#timer-div").empty();
        userGuess = $(this).attr("data-name")
        console.log(userGuess)

       var answerCheck =  answersCorrect.indexOf(userGuess)
       console.log(answerCheck)

       if (answerCheck === -1) {
           $("#timer-div").html("Wrong! The correct answer is " + answersCorrect[count]);
           $(this).css("border-color","red")
           setTimeout(nextQuestion, 1000*3)
       }
       else {
           score++;
           $("#timer-div").html("You are correct!")
           $(this).css("border-color", "green")
           setTimeout(nextQuestion, 1000*3)
           console.log(score)
       }
        
     });
     
     function nextQuestion(){
         $("#main-content").empty();
         count++;
         timerCount = 11;
         gameStart();
     };
    
     if (count === 9) {
         endScreen();
     }
      
      

    }
    function endScreen(){
        $("#main-content").empty();
        clearInterval(intervalId)
        var results = $("<div id='results'>")
        results.html("You got " + score + " out of 10")
        $("#main-content").append(results)
        var masterLevel = $("<div id='master-level'>")
        $("#main-content").append(masterLevel)
        if (score > 5) {
            masterLevel.html("You are a theory master")
        } 
        else if (score < 5) {
            masterLevel.html("You are not a theory master. Try again.")
        }
    }
    

})