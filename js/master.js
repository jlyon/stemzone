// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
      numberOfQuestions: 10,
      randomSortQuestions: true,
      preventUnanswered: true,
      perQuestionResponseMessaging: true,
      completionResponseMessaging: true,
      showScore: true
    });


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
        console.log($(this).parent());
        $('body').addClass('complete');
      }
    });
});

