angular.module("app").service("shopSrv", function ($http) {
   
   this.getProducts = function () {
      return $http({
         method: 'GET'
         , url: '/api/products'
      })
   },

   this.getProductById = function(product_id) {
      return $http({
         method: 'GET'
         , url: '/api/product/' + product_id
      })
   }




});