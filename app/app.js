'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
    'myApp.view3',
  'myApp.form2',
  'myApp.viewEcharts',
  'myApp.version',
  'phoneFilter',
  'phonecatServices',
    'ui.buaashuai.test',
    'zeroclipboard',
    'eChart',
    'drag'
])
.config(['$routeProvider','uiZeroclipConfigProvider', function($routeProvider,uiZeroclipConfigProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view/view1/view1.html',
        controller: 'View1Ctrl'
      }).when('/view1/:id', {
        templateUrl: 'view/view2/view2.html',
        controller: 'View2Ctrl'
      }).when('/formTest', {
          templateUrl: 'view/form/formTest.html',
          controller: 'FormTestCtrl'
      }).when('/view2', {
          templateUrl: 'view/view2/view2.html',
          controller: 'View2Ctrl'
      }).when('/view3', {
          templateUrl: 'view/viewAngularUI/view3.html',
          controller: 'View3Ctrl'
      }).when('/echart', {
          templateUrl: 'view/viewEcharts/echart.html',
          controller: 'echartCtrl'
      })
      .otherwise({redirectTo: '/view1'});
        // config ZeroClipboard
        uiZeroclipConfigProvider.setZcConf({
            swfPath: 'bower_modules/zeroclipboard/dist/ZeroClipboard.swf'
        });
  //$routeProvider;
}]);
