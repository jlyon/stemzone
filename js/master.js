$(function () {
// Wrapper

var $quiz = $('#slickQuiz');
var timer;
var downtime = 30;
var isPhonegap = false;

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


/* **************** FILES/PHONEGAP support ******************* */

function onDeviceReady() {
   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
   window.resolveLocalFileSystemURI("/sdcard/example.txt", onResolveSuccess, fail);
   var isApp = 'yes';
   var root = this;
   cb = window.plugins.childBrowser;
   call();
}

function onFileSystemSuccess(fileSystem) {
   console.log(fileSystem.name);
}

function onResolveSuccess(fileEntry) {
   console.log(fileEntry.name);
}

function fail(evt) {
   console.log(evt.target.error.code);
}


function call(){
   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, successDirectoryReader, null);

}
function successDirectoryReader(fileSystem){
  try {
    var dirEntry = fileSystem.root;
    var directoryReader = dirEntry.createReader();
    directoryReader.readEntries(success,failure);
  } catch (e) {
    alert(e);
  }
}


// Wrapper
});

