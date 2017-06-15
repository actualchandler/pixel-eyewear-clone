angular.module("app").service("reviewSrv", function($http) {

this.getReviews = function() {
   return $http({
      method: 'GET'
      , url: '/api/reviews'
   })
},

this.addReview = function(name, content, rating){
   return $http({
      method: 'POST'
      , url: '/api/review'
      , data: {
         name: name
         , content: content
         , rating: rating
      }
   })
}

});