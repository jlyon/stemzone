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
});