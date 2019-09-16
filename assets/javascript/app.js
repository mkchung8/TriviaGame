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
    var displayQuestion;
    var answerOne;
    var answerTwo;
    var answerThree;
    var score = 0;
    var timerCount = 10; 

   

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


function gameStart (){

    
    
  /* for (var i=0; i < gameQuestions.length; i++) {
        displayQuestion = gameQuestions[i].question
        answerOne = gameQuestions[i].answers[0]
        answerTwo = gameQuestions[i].answers[1]
        answerThree = gameQuestions[i].answers[2]
        answerFour = gameQuestions[i].answers[3]

    
    }; */
    displayQuestion = gameQuestions[0].question
    answerOne = gameQuestions[0].answers[0];
    answerTwo = gameQuestions[0].answers[1];
    answerThree = gameQuestions[0].answers[2];
    answerFour = gameQuestions[0].answers[3];
    $("#main-content").append("<h2>" + displayQuestion + "</h2>")
    $("#main-content").append('<p class="answer">' + answerOne + '</p>')
    $("#main-content").append('<p class="answer">' + answerTwo + '</p>')
    $("#main-content").append('<p class="answer">' + answerThree + '</p>')
    $("#main-content").append('<p class="answer">' + answerFour + '</p>')
}; 
});