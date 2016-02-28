'use strict';

angular.module('myApp.view2', [])


.controller('View2Ctrl', ['$scope','$routeParams',function($scope,$routeParams) {
      $scope.id = $routeParams.id;
          $scope.count = 0;
          $scope.$on('MyEvent', function() {
                $scope.count++;
          });
}])
    .controller('View22Ctrl', ['$routeParams',function($scope,$routeParams) {
        $scope.id = $routeParams.id;
        $scope.count = 0;
        $scope.$on('MyEvent', function() {
            $scope.count++;
        });
    }]);