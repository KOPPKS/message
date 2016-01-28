var app = angular.module('chatroom');

app.service('parseService', function($http){
  //Here two methods are created. One called postData and the other called getData.
  
  //The lines below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request is 'https://api.parse.com/1/classes/chat?order=-createdAt'
  
  this.getData = function(){
    return $http({
      method: "GET",
      url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
    });
  };

  
  
  this.postData = function(yourMessage){
    // $http.post('https://api.parse.com/1/classes/chat').then(function(data) {
    return $http({
      method: "POST",
      url: 'https://api.parse.com/1/classes/chat',
      data: { text: yourMessage }
    })
  }
  
  //getData method here
});
