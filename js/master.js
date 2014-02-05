$(function () {
// Wrapper

var $quiz = $('#slickQuiz');
var timer;
var downtime = 30;
var device = false;

// See if we need to save data onload
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  device = device.name + device.uuid;
  navigator.network.isReachable("phonegap.com", reachableCallback, {});
}
// Check network status
function reachableCallback(reachability) {
  var networkState = reachability.code || reachability;
  if (NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK || NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK) {
    firebaseSave();
  }
}
//firebaseSave();

function firebaseSave() {
  var fb = new Firebase('https://dazzling-fire-8476.firebaseio.com/');
  Lawnchair(function(){
    var that = this;
    this.batch({saved: 0}, function() {
      this.each(function(record, index) {
        if (record.end != undefined) {
          record.time = record.end - record.start;
        }
        record.device = device;
        fb.push(record);
        that.remove(record.key, function() {
          //console.log('removed');
        });
      })
    })
  })
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
app.initialize();

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
  if (device) {
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

  // Create a new record
  uuid = guid();
  var d = new Date();
  Lawnchair(function() {
    this.save({key: uuid, start: d.getTime(), totalQuestions: 10});
  });
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


// Generate uuid, from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};
function guid() {
  return s4() + s4();
  //return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  //       s4() + '-' + s4() + s4() + s4();
}

// Wrapper
});


// Save the record in local cache
// This is called from slickQuiz.js
function lawnchairSave(data) {
  Lawnchair(function() {
    var that = this;
    this.get(uuid, function(record) {
      for (var attrname in data) { record[attrname] = data[attrname]; }
      var d = new Date();
      record.end = d.getTime();
      that.save(record);
    })
  })
}

