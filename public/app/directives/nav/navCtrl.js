angular.module("app").controller("navCtrl", function ($state, $scope) {
   
   $scope.goToReview = function(){
      $state.go('review')
   }
   
});