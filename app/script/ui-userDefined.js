var app=angular.module('ui.buaashuai.test', []);
app.controller('UiMyAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
    $scope.closeable = !!$attrs.close;
    var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
        $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;
    if (dismissOnTimeout) {
        $timeout(function() {
            $scope.close();
        }, parseInt(dismissOnTimeout, 10));
    }
}])
    .directive('myAlert', function() {
        return {
            controller: 'UiMyAlertController',
            controllerAs: 'mAlert',
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || 'template/myTemplate/buaashuai.html';
            },
            transclude: true,
            replace: true,
            scope: {
                type: '@',
                close: '&'
            }
        };
    });