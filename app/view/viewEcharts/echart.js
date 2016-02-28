'use strict';

angular.module('myApp.viewEcharts', [])

.controller('echartCtrl', ['$scope','$routeParams','$route',function($scope,$routeParams,$route) {
    $scope.str="hello";

        function initData() {
            var arr = [];
            for (var i = 0; i < 6; i++) {
                arr.push(parseInt(Math.random() * 100));
            }
            return arr;
        }


        $scope.tip=['浏览量','访客','线索','案源','订单','成交'];
        $scope.dataX=[
            '2016/1/1',
            '2016/1/2',
            '2016/1/3',
            '2016/1/4',
            '2016/1/5',
            '2016/1/6'
        ];

        $scope.changData = function () {
            $scope.data1 = initData();
            $scope.data2 = initData();
            $scope.data3 = initData();
            $scope.data4 = initData();
            $scope.data5 = initData();
            $scope.data6 = initData();
            //angular.extend($scope.options,s1);
        };

        $scope.changData();
}]);