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
                console.log("offline。。");
            }
        }
    }
    //setInterval(run, 3000);

    $scope.areaContent = '';
    $scope.getTime = function () {
        var myDate = new Date();
        var str='';
        str+=myDate.getHours();//获取当前小时数(0-23)
        str+=":";
        str+=myDate.getMinutes();//获取当前分钟数(0-59)
        str+=":";
        str+=myDate.getSeconds();//获取当前秒数(0-59)
        $scope.areaContent = str;
    };
    function DownLoad(strUrl) {
        var form = $("<form>");   //定义一个form表单
        form.attr('style', 'display:none');   //在form表单中添加查询参数
        form.attr('target', '');
        form.attr('method', 'post');
        form.attr('action', "/QuestionInfo/DowmLoad");

        var input1 = $('<input>');
        input1.attr('type', 'hidden');
        input1.attr('name', 'strUrl');
        input1.attr('value', strUrl);
        $('body').append(form);  //将表单放置在web中
        form.append(input1);   //将查询参数控件提交到表单上
        form.submit();

    }
    //页面不跳转下载文件
    $scope.downloadAPK=function(){
        var url='http://m.baidu.com/baidu.php?url=a00000jU_NumoCK6_KRo8GxlFltSBkodQTtGgztrPy3zm6p4D6navVwuLtjXcRxlF7Z7QVIaru62Op6dNbKE4TOqBZx2_OinRVYhOGPCL11aDlXqoKJnk8NVcvH6j9VqA5VezHs.7D_ipoMTDg-X1Bsc68uCnsTj3YlhI2mr5ZGLFvFeQVSeF8E9ecPj_71QVAj6H7T1nhQ-oLNSHr5VyFWKjoCl79h9m3vN4rkf.U1Yz0ZDqYSOrkPAM1eK9TZ00IjLHeteDYpx5_A7sT0KGUHYznWn0u1dLuHbs0ZNG5fKspyfqnfKWpyfqn0KVIjYznj0zg1DsnHIxnH0krNt1PW0k0AVG5HD0TMfqrHDz0ANGujYknjcdPW-xnH0YPjb1g1fsP7tknjfknjuxnH0zPjT4g1DsnWmzr7tknjm1PW9xnH0vnjT1g1DsPjf3ndtknj0srH9xnH0vn1Dsg1DsPWDLPNtknjmznWIxnH0YPjRsg1DsPjnYnNtknjm1nWc0mhbqnW0vg1csnj0zg1csnjm10AdW5HDsnWmsn1nsg1bkrjTYnHTkg1Kxn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00ULu_5HDsnHTVn7tzPWDdQywlg1cvnHNmQywlg1nYnHRVn7t1PHTLQywl0A7spyfqn1fLPH64P-tkg1DdnfK9mWYsg100ugFM5H00TZ0qn1Rznj01Pj010A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qn0KzpWYs0Aw-IWdLpgP-0AuY5Hc0TA6qPHfdP1D0ULnqn6KBI1YY0A4Y5HD0TLCqnHnzn7tknj0k0ZwdT1YzPH04nWc4njfvnjRsn1m3P1m0ThNkIjYkPjm1PHmznHDkPH6s0ZPGujd-nycLPW6dPAuhuhNBrAc40AP1UHY4nDcYnDmsP1csfWFDPWDk0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYs0AwYpyfqn0K9TLKWm1Ykn1D0IgKGUhPW5HD1nfKWThnqPjbLnj6&qid=e1b76854fffeb8b9&sourceid=111&placeid=1&rank=2&ck=0.0.0.0.0.0.0.0.0.0.0';
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        iframe.src =url;
    };
    $scope.test=function (){
        for(var i=0;i<10;i++){
            (function(e){
                setTimeout(function(){
                    console.log(e);
                },1000);
            })(i);

        }
    };
}