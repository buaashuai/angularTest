var app=angular.module('eChart', []);
app.directive('eChart', function() {
    function link($scope, element, attrs) {

        var myChart = echarts.init(element[0]);

        if (attrs.uiOptions) {
            attrs.$observe('uiOptions', function () {
                console.log("sdfsdfsdfsfd");
                console.log(attrs.uiOptions);
                var options = $scope.$eval(attrs.uiOptions);
                if (angular.isObject(options)) {
                    myChart.setOption(options);
                }
            }, true);

        }

    }
    return {
        restrict: 'A',
        link: link
    };
});

app.directive('eChart2', ['$http', function ($http) {

    function getLinkFunction($http) {
        return function (scope, element, attrs) {
            // update when charts config changes
            scope.$watch(function () { return scope.config; }, function (value) {
                if (value) { setOptions(); }
            }, true);

            scope.$watch(function () { return scope.data; }, function (value) {
                if (value) { setOptions(); }
            }, true);

        };
    }

    return {
        restrict: 'EA',
        template: '<div></div>',
        scope: {
            config: '=config',
            data: '=data'
        },
        link: getLinkFunction($http)
    };
}]);