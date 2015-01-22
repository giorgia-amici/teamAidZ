angular.module('QanMP').controller('getQuestions', function($scope, $http){


$scope.trialFunction = function(){
    var urlTrial = "https://stopaidz-rails1.herokuapp.com/candidates/1/questions?callback=JSON_CALLBACK"
    $http.jsonp(urlTrial)
    .success(function(response){
        $scope.questions = []
        $scope.allQuestions = response.questions
        // $scope.allQuestions.forEach(function(singleQuestion){
        // 	$scope.questions.push(singleQuestion.ask_text)
        // })
        $scope.questions.push($scope.allQuestions[0].ask_text, $scope.allQuestions[1].ask_text)
    })
}


$scope.trialFunction()

})
