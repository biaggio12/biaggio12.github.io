angular.module('myApp', ['ngMaterial','ngAnimate']);
var app = angular.module('myApp');
app.controller('appController',function($scope, $rootScope){

  $scope.chosenTask = 0;

  $scope.showSolution = false;

  $scope.toggleSolution = function(showSolution){

    if ($scope.showSolution == true) {
      $scope.showSolution = false;
    }
    else {
    $scope.showSolution = true;
    }
  };

  $scope.rollTask = function () {
      $scope.chosenTask = Math.floor((Math.random() * 60) + 1);
      $scope.showSolution = false;
  };

  $rootScope.$on('myApp:change', function (event) {
      //console.log('On');
      $scope.$apply(function () {
        $scope.path = 'img/zadania/' + $scope.chosenTask +'.png';// DOESN'T WORK!
      });
      $scope.$apply(function () {
        $scope.pathSolution = 'img/rozwiazania/' + $scope.chosenTask +'.png'; // DOESN'T WORK!
      });
    });
});


app.directive('changeDirective', function () {

  var linker = function (scope, element, attrs) {
    element.on('click', function () {
      scope.$emit('myApp:change');
    });
  };

  return {
    restrict: 'A',
    link: linker
  };

});
