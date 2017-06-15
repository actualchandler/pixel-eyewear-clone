angular.module("app").controller("shopCtrl", function ($state, $scope, shopSrv) {
   
   $scope.getProducts = function () {
      shopSrv.getProducts()
         .then(function (response) {
         $scope.products = response.data
      })
   }

   $scope.getProducts()

$scope.readId = function(product_id){
   shopSrv.getProductById(product_id)
      .then(function (response) {
            $scope.productById = response.data
            $state.go('buteo')
      })
}


//    $scope.getProductById = function (product_id) {
//       shopSrv.getProductById(product_id)
//          .then(function (){
//             $scope.product = response.data
//          })
//    }


});