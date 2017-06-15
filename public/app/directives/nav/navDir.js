angular.module("app").directive("navDir", function () {
   return {
      restrict: "AE"
      , templateUrl: "./app/directives/nav/navTmpl.html"
      , controller: "navCtrl"
   }
});