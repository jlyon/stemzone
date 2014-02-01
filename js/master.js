$(function () {
// Wrapper

var $quiz = $('#slickQuiz');
var timer;
var downtime = 30;
var isPhonegap = false;

// Phonegap Event listener    
function load() {
  document.addEventListener('deviceready', init, false);
}

// Called when device is ready - Do nothing 
function init() {
  isPhonegap = true;
}      

// Called to write file to card
function writeFile(param) {
  var writer = new FileWriter("/sdcard/stemzone_quizlog.txt");
  writer.write(param + "\n", false);              
  alert("file Written to SD Card");
}


// Init quiz
function startQuiz() {
  $quiz.slickQuiz({
    numberOfQuestions: 10,
    randomSortQuestions: true,
    preventUnanswered: true,
    perQuestionResponseMessaging: true,
    completionResponseMessaging: true,
    showScore: true
  });
}
startQuiz();

// Handle restarts and saving data
function restartQuiz(action) {
  /*
  console.log($quiz.data('slickQuiz'));
  var quiz = $quiz.data('slickQuiz');
  $('.quizScore .score-value').text('');
  $quiz.find('.questions').remove();
  quiz.method.resetQuiz();
  quiz.method.setupQuiz();
  $('body').addClass('front');
  //startQuiz();
  */
  if (isPhonegap) {
    writeFile(param);
  }
  

  if (!$('body').hasClass('front')) {
    location.reload();
  }
}   
$('.restart').bind('click', function() {
  restartQuiz('click');
});

// Automatically restart after x seconds of downtime
function resetTimer() {
  window.clearTimeout(timer);
  timer = setTimeout(function() {
    restartQuiz('timeout');
  }, downtime*1000);
}
resetTimer();
$('a, label, input').bind('click', resetTimer);


// change away from front-page stlying

$('a.startQuiz').click(function() {
  $('body').removeClass('front');
});

// handle question actions

var $questLi = $('.questions ul.answers > li');

$questLi.append('<span class="marker"></span>');

$questLi.children().click(function () {
  $(this).parents('li.question').addClass('selected');
});

$('a.checkAnswer').click(function () {
  $(this).parent('.selected').addClass('revealing');
});

$('a.nextQuestion').click(function () {
  if($(this).parent().is(':last-child')) {
    $('body').addClass('complete');
  }
});


// Wrapper
});

