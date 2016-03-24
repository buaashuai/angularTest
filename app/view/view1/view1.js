'use strict';

angular.module('myApp.view1', [])

.controller('View1Ctrl', ['$scope','$http','Phone','SearchSettingService',View1Ctrl]);
function View1Ctrl($scope,$http,Phone,SearchSettingService) {
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

    //$http.get('data/phones.json').success(function(data) {
    //  $scope.phones = data.splice(0,3);
    //});

    //$scope.phones=Phone.query({phoneId: 'phones'});

    $scope.setting=SearchSettingService.setting();
    console.log("$scope.setting");
    console.log($scope.setting);

    $scope.orderProp = 'age';


    $scope.parms=[];
    $scope.parms.query_str="sdddddddd";

    $scope.parms.putsh_startTime="2015-01-01";

    var req = new XMLHttpRequest();
    var run = function(){

        req.timeout = 5000;
        req.onreadystatechange=state_Change;
        req.open('GET', 'http://localhost:8000/app/assets/img/tiny-image.gif', true);
        req.send();
    };

    function state_Change()
    {
        if (req.readyState==4)
        {// 4 = "loaded"
            if (req.status==200)
            {// 200 = OK
                console.log("inline");
            }
            else
            {
                console.log("offline¡£¡£");
            }
        }
    }
    setInterval(run, 3000);
}