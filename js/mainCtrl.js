var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  
  $scope.getParseData = function(){
    parseService.getData().then(function(data) {
      console.log(data);
      $scope.messages = data.data.results;
    })
  }


  $scope.postParseData = function(message){
    parseService.postData(message).then(function(data) {
      console.log(data);
    });
  }



  
  setInterval(function(){
    $scope.getParseData();
  }, 3000)
})
