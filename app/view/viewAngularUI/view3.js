'use strict';

angular.module('myApp.view3', [])

.controller('View3Ctrl', ['$scope','$http','Phone','$document',function($scope,$http,Phone,$document) {
      //$scope.phones = [
      //  {"name": "Nexus S",
      //    "snippet": "Fast just got faster with Nexus S.",
      //    "age": 0},
      //  {"name": "Motorola XOOM? with Wi-Fi",
      //    "snippet": "The Next, Next Generation tablet.",
      //    "age": 1},
      //  {"name": "MOTOROLA XOOM?",
      //    "snippet": "The Next, Next Generation tablet.",
      //    "age": 2}
      //];

        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'hello world '});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.alerts =[];
        $scope.alerts.push({type: 'danger',msg: 'Ã·Ωª ß∞‹!'});

$scope.copyMessage="ggggggggggg.";

$scope.copiedText=false;

        $scope.showC=false;
    $scope.showShareButtonList=function(thisDom){
        $scope.showC=!$scope.showC;
    }

}]);