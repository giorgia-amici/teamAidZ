angular.module('qAnMp').controller('getCandidatesByPC', function($scope, $http){
$scope.getCandidates = function(){
    var url = "http://www.theyworkforyou.com/api/getMP?&id=&constituency=&postcode=" + $scope.postCode + "&key=CCa95kDVHTT2Dj2zmPDdYN4f&callback=JSON_CALLBACK"
    var searchCandidate = $http.jsonp(url)
                .success(function(candidate) {
                 $scope.mpCandidate = candidate
                 console.log($scope.mpCandidate)
                })
                 .error(function(error) {
                  $scope.erroR = error
                  // $scope.myError = "Invalid Postcode"
                  // console.log($scope.myError)
                })                
}
  $scope.getCandidates()


})