let navbarTimer = document.getElementById('navbarTimer')
let secondsLeft =  75;
let quizPage = document.getElementById('quizPage')
let start = document.getElementById('start')
let startBtn = document.getElementById('startBtn')
let questions = document.getElementById('questions')
let quizQuestions = document.getElementById('quizQuestions')
let questionBtn = document.getElementsByClassName('questionBtn')

let choice1 = document.getElementById('alpha')
let choice2 = document.getElementById('beta')
let choice3 = document.getElementById('gamma')
let choice4 = document.getElementById('delta')
let userReply = document.getElementById('userReply')
let scorePage = document.getElementById('scorePage')
let finalScore = document.getElementById('finalScore')
let allDone = document.getElementById('allDone')
let initials = document.getElementById('initials')
let initialEntry = document.getElementById('initialEntry')
let entryBtn = document.getElementById('entryBtn')
let highScoreList = document.getElementById('highScoreList')
let clearHighScore = document.getElementById('clearHighScore')
elem = document.createElement("hr"); //this will create a new element
/* Use setAttribute to define the property and values you'd like give the element */
elem.setAttribute("width", "400px",'style', 'color:black; border:2px solid black;');
/* Then you'll need to add the element to the page */

let QandAs = [
    {
        'quizQuestions' : 'What does HTML stand for?',
        'alpha': '1. Hypertext Markup Language',
        'beta': '2. Hypertext Management Language',
        'gamma': '3. Header Title Main Language',
        'delta': '4. All of the above',
        'correctAnswer': 1,
    },
    {
        'quizQuestions' : 'What does CSS stand for?',
        'alpha': '1. Creative Style Sheet',
        'beta': '2. Cascading Style Sheet',
        'gamma': '3. Clear Section Sheet',
        'delta': '4. None of the above',
        'correctAnswer': 2,
    },
    {
        'quizQuestions' : 'What does DOM stand for?',
        'alpha': '1. Dominion Operating Managenment',
        'beta': '2. Div Object Model',
        'gamma': '3. Document Object Model',
        'delta': '4. None of the above',
        'correctAnswer': 3,
    },
    {
        'quizQuestions' : 'What are JavaSript arrays used for?',
        'alpha': '1. JavaScript arrays are used to prompt for an error',
        'beta': '2. JavaScript arrays are used to alert a statement.',
        'gamma': '3. JavaScript arrays are used to call a function',
        'delta': '4. JavaScript arrays are used to store multiple values in a single variable.',
        'correctAnswer': 4,
    },
    {
        'quizQuestions' : 'What does Math.random returns?',
        'alpha': '1. Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)',
        'beta': '2. Math.random() returns a random number',
        'gamma': '3. Math.random() returns a random number between 1 (inclusive),  and 2 (exclusive)',
        'delta': '4. None of the above',
        'correctAnswer': 1,
    }
]

let score = 0;
let QandAsIndex = 0;

function quizFrontPage() {
    quizPage.style.display = 'block';
    questions.style.display = 'none';
    scorePage.style.display ='none';
    navbarTimer.textContent ="Time: 75";
}

function quizStart() {
    quizPage.style.display = 'none';
    scorePage.style.display = 'none';
    questions.style.display = 'block';
    navbarTimer.textContent = 'Time: ' + 75;
    
function setTime () {
        let timerInterval = setInterval(function () {
          secondsLeft = secondsLeft - 1 
          navbarTimer.textContent = 'Time: ' + secondsLeft;
          if (secondsLeft === 0 || QandAs.length === QandAsIndex){
            clearInterval(timerInterval)
            highScore (); 
          }
        }, 1000)        
      }
      setTime ();         
}

startBtn.addEventListener('click', function() { 
    quizStart()
    console.log('begin')
})

function displayQuestions () {
    let inquiry = QandAs[QandAsIndex];  

    quizQuestions.innerHTML = inquiry.quizQuestions;
    choice1.innerHTML = inquiry.alpha;
    choice1.setAttribute('data', inquiry.alpha);
    choice2.innerHTML = inquiry.beta;
    choice2.setAttribute('data', inquiry.beta);
    choice3.innerHTML = inquiry.gamma;
    choice3.setAttribute('data', inquiry.gamma);
    choice4.innerHTML = inquiry.delta;
    choice4.setAttribute('data', inquiry.delta);
}

displayQuestions ();
  choice1.addEventListener('click', function (event) {
    event.preventDefault();
    verifyAnswer(1);
  })
  choice2.addEventListener('click', function (event) {
    event.preventDefault();
    verifyAnswer(2);
  })
  choice3.addEventListener('click', function (event) {
    event.preventDefault();
    verifyAnswer(3);
  })
  choice4.addEventListener('click', function (event) {
    event.preventDefault();
    verifyAnswer(4);
  })
  
function verifyAnswer(choice) {
      let answer = QandAs[QandAsIndex].correctAnswer;
      let userAnswer = choice;
      if(answer === userAnswer) {        
        userReply.textContent = 'Correct!';
        document.body.appendChild(elem);
      }else{
        userReply.textContent = 'Wrong!';
        secondsLeft -= 10;
      }
      if(QandAs.length === QandAsIndex+1){
        
        
      }
      QandAsIndex++;
      //displayQuestions ();      
}
   
   function highScore (){ 
    scorePage.style.display ='block';
    finalScore.style.display = 'block';
    allDone.style.display = 'block';
    initials.style.display = "block"; 
    initialEntry.style.display = "block"; 
    entryBtn.style.display = "block"; 
    quizPage.style.display = 'none';
    questions.style.display = 'none';    

     finalScore.textContent = "Final score is " + secondsLeft;   
     initials.textContent ="Enter your initials: ";
     entryBtn.textContent ="submit";     
    }
    let scoreArray =[];
    entryBtn.addEventListener("click", function() { 
        
        let obtainInitials = document.getElementById('initialEntry').value;
        let localStorageArray = { initials: obtainInitials, secondsLeft };
      scoreArray.push(localStorageArray)
      localStorage.setItem('finalScore', JSON.stringify(scoreArray));  
        location.href = "highScore.html";
        console.log("entryBtn")
    })     
    
    function highScorePage() { //Does not work yet but will add for later troubleshooting
      //Stores Key and Value and couldnt get it to diplay in my UL in highscore.html

      //let obtainInitials = document.getElementById('initialEntry').value;  
      let scoreArray = JSON.parse(localStorage.getItem('finalScore'))

      if (scoreArray !== null) {
        finalScore = scoreArray
      }
      //let localStorageArray = { score: secondsLeft, initials: obtainInitials };
     // scoreArray.push(localStorageArray)
      //localStorage.setItem('finalScore', JSON.stringify(scoreArray));  

      //let highScores = obtainInitials + ": " + secondsLeft; 
      //highScoreList = obtainInitials + ": " + secondsLeft; 
      //highScoreList.innerHTML = ''
      
      

      finalScore.forEach(function (finalScore) {
        let li = document.createElement('li')
        li.textContent = finalScore
        //li.setAttribute('data-index', index)
        
        //let button = document.createElement('button')
        //button.textContent = 'Complete'

        //li.appendChild(button)
        finalScoreList.appendChild(li)
      })

     
    
  }
    function clearScores(){
        clearHighScore.addEventListener("click", function() {  
        localStorage.clear();
        })
    }
    quizFrontPage();
   
   
   
   
   
 
  