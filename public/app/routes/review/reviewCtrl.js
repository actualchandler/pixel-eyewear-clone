angular.module("app").controller("reviewCtrl", function($scope, reviewSrv){

   $scope.getReviews = function(){
      reviewSrv.getReviews()
      .then(function(response){
         $scope.reviews = response.data
      })
   }

   $scope.getReviews()

   $scope.addReview = function (name, content, rating){
      reviewSrv.addReview(name, content, rating)
      .then($scope.getReviews)
   }


});