/**
 * Created by dell on 2015/9/25.
 */
'use strict';

angular.module('myApp.form2', [])

    .controller('FormTestCtrl', ['$scope','Phone',function($scope,Phone) {

        $scope.master= {};



        $scope.update = function(user) {
            $scope.master= angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

        $scope.changeSelect = function(selectData){
            $scope.selectShow={
                aa:true,
                bb:true,
                cc:true
            }
            console.log("sdfsfsfsf");
            if(selectData=='bb')
                $scope.selectShow.bb=false;
            else if(selectData=='cc')
                $scope.selectShow.cc=false;
            else
                $scope.selectShow.aa=false;
        }
        //测试。。。。。。。。。。。
        if($scope.searchStr!=null&&$scope.searchStr!=''){
            $scope.parms.query_str=$scope.searchStr;
        }
        if($scope.startTime!=null){
            $scope.parms.push_begin_time=$scope.startTime;
        }
        if($scope.endTime!=null){
            $scope.parms.push_end_time=$scope.endTime;
        }

        $scope.viewStatue={
            edit:true,
            alow:true,
            reject:true
        };

        if($scope.status==2)//已通过消息
            $scope.viewStatue.alow=false;
        if($scope.status==1)//已拒绝消息
            $scope.viewStatue.alow=false;

        //js测试
        var id=$(this).attr('id')
    }]);