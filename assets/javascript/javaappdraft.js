function gameStart (){
 
    
    /* for (var i=0; i < gameQuestions.length; i++) {
          displayQuestion = gameQuestions[i].question
          answerOne = gameQuestions[i].answers[0]
          answerTwo = gameQuestions[i].answers[1]
          answerThree = gameQuestions[i].answers[2]
          answerFour = gameQuestions[i].answers[3]
      
      
      }; */
  
      var timerCount = 10;
      setInterval(timerFunction, 1000*10)
      function timerFunction() {
          timerCount--;
      var timerDiv = $('<div id="timer-display">')
      $("#main-content").append(timerDiv)
      timerDiv.html("You have " + timerCount + " seconds left.")
      }
  
      displayQuestion = gameQuestions[0].question
      answerOne = gameQuestions[0].answers[0];
      answerTwo = gameQuestions[0].answers[1];
      answerThree = gameQuestions[0].answers[2];
      answerFour = gameQuestions[0].answers[3];
      
      $("#main-content").append("<h2>" + displayQuestion[count] + "</h2>")
      $("#main-content").append('<p id="a1" class="answer">' + answerOne + '</p>')
      $("#main-content").append('<p id="a2" class="answer">' + answerTwo + '</p>')
      $("#main-content").append('<p id="a3" class="answer">' + answerThree + '</p>')
      $("#main-content").append('<p id="a4" class="answer">' + answerFour + '</p>')
      console.log(answersCorrect.indexOf(answerTwo))
  
      
  
      $(".answer").on("click",function(){
          var answerSelect = $(this).attr("id")
          if (answerSelect === answersCorrect[0]) {
              alert("correct!")
          }
          else {
              alert("sorry the correct answer is")
          }
  
         
          });
  
      }
  
      
      
  
  });