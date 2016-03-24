'use strict';

angular.module('myApp.controller', [])
    .controller('myDrag', ['$scope', '$parse', '$document', function ($scope, $parse, $document) {
        $scope.list1 = [{'title': 'Lolcat Shirt'},{'title': 'Cheezeburger Shirt'},{'title': 'Buckit Shirt'}];
        $scope.list2 = [{'title': 'Zebra Striped'},{'title': 'Black Leather'},{'title': 'Alligator Leather'}];
        $scope.list3 = [{'title': 'iPhone'},{'title': 'iPod'},{'title': 'iPad'}];
        $scope.list4 = [];
        $scope.hideMe = function() {
            return $scope.list4.length > 0;
        }
        $scope.outCallback = function(event, ui) {
            console.log('I`m not, hehe');
        };
}])
    .controller('drag2', ['$scope', '$parse', '$document', '$filter', '$timeout', function ($scope, $parse, $document, $filter, $timeout) {
        $scope.filterIt = function() {
            return $filter('filter')($scope.list2, $scope.search);
            // Alternate way
            // return filterFilter($scope.list2, $scope.search);
        };
        $scope.list1 = [];
        $scope.list2 = [
            { 'title': 'Item 3', 'drag': true },
            { 'title': 'Item 2', 'drag': true },
            { 'title': 'Item 1', 'drag': true },
            { 'title': 'Item 4', 'drag': true }
        ];
        angular.forEach($scope.list2, function(val, key) {
            $scope.list1.push({});
        });
    }])

    .controller('drag3', ['$scope', '$parse', '$document', '$filter', '$timeout', function ($scope, $parse, $document, $filter, $timeout) {
        $scope.list1 = [];
        $scope.list2 = [];
        $scope.list3 = [];
        $scope.list4 = [];

        $scope.list5 = [
            { 'title': 'Item 1', 'drag': true },
            { 'title': 'Item 2', 'drag': true },
            { 'title': 'Item 3', 'drag': true },
            { 'title': 'Item 4', 'drag': true },
            { 'title': 'Item 5', 'drag': true },
            { 'title': 'Item 6', 'drag': true },
            { 'title': 'Item 7', 'drag': true },
            { 'title': 'Item 8', 'drag': true }
        ];
        // Limit items to be dropped in list1
        $scope.optionsList1 = {
            accept: function (dragEl) {
                if ($scope.list1.length >= 2) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }])

    .controller('drag4', ['$scope', '$parse', '$document', '$filter', '$timeout', function ($scope, $parse, $document, $filter, $timeout) {
        $scope.images = [{'thumb': '1.png'},{'thumb': '2.png'},{'thumb': '3.png'},{'thumb': '4.png'}]
        $scope.list1 = [];
        angular.forEach($scope.images, function(val, key) {
            $scope.list1.push({});
        });
        $scope.list2 = [
            { 'title': 'Item 1', 'drag': true },
            { 'title': 'Item 2', 'drag': true },
            { 'title': 'Item 3', 'drag': true },
            { 'title': 'Item 4', 'drag': true }
        ];
        $scope.startCallback = function(event, ui, title) {
            console.log('You started draggin: ' + title.title);
            $scope.draggedTitle = title.title;
        };
        $scope.stopCallback = function(event, ui) {
            console.log('Why did you stop draggin me?');
        };
        $scope.dragCallback = function(event, ui) {
            console.log('hey, look I`m flying');
        };
        $scope.dropCallback = function(event, ui) {
            console.log('hey, you dumped me :-(' , $scope.draggedTitle);
        };
        $scope.overCallback = function(event, ui) {
            console.log('Look, I`m over you');
        };
        $scope.outCallback = function(event, ui) {
            console.log('I`m not, hehe');
        };

    }])