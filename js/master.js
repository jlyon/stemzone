var $quiz = $('#slickQuiz');
var timer;
var downtime = 30;
var device = false;



$(function () {
// Wrapper

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

  // Save how the quiz ended on the row
  lawnchairSave({'action': action});
  
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



//
// Phonegap integration
//

// See if we need to save data onload
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log('ready');
  device = device.uuid;

  // Check network status
  if (navigator.connection.type != Connection.NONE) {
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
        fileSave(record);
        that.remove(record.key, function() {
          //console.log('removed');
        });
      })
    })
  })
}

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

var textLine = '';
function fileSave(item) {
  console.log('filesave');
  textline = json2csv(item);
  console.log(textline);
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
  console.log('gotfs');
  fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
  fileEntry.createWriter(gotFileWriter, fail);
}

function gotFileWriter(writer) {
  writer.onwriteend = function(evt) {
      console.log('appended');
  };
  writer.seek(writer.length);
  writer.write("\r\n" + textline);
}

function fail(error) {
  console.log(error.code);
}


function json2csv(item) {
  var csv = [
      item.device,
      item.action,
      item.start,
      item.end,
      item.time,
      item.totalQuestions,
      item.totalAnswered,
      item.correct,
      item.incorrect,
  ];
  for (i=1; i<=20; i++) {
      if (item[i] != undefined) {
          csv.push(item[i]);
      }
      else {
          csv.push('');
      }
  }
  console.log(csv);
  return csv.join(',');
}
