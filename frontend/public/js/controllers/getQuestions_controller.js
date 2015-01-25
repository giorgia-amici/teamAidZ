angular.module('qAnMp').controller('getQuestions', function($scope, $http){
$scope.getQuestions = function(){
    var urlTrial = "https://stopaidz-rails1.herokuapp.com/candidates/1/questions?callback=JSON_CALLBACK"
    $http.jsonp(urlTrial)
    .success(function(response){
        $scope.questions = []
        $scope.allQuestions = response.questions
        $scope.allQuestions.forEach(function(singleQuestion){
     		$scope.questions.push(singleQuestion.ask_text)    
     		$scope.FirstMockQuestion = $scope.questions[0] 
     		// console.log($scope.FirstMockQuestion)       
        })
    })
}

$scope.getQuestions()
$scope.postQuestion = function(){

    $( "#hidden_form" ).submit();
    console.log("hidden form submitted")
}

})
