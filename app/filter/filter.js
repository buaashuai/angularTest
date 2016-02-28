/**
 * Created by dell on 2015/9/24.
 */
angular.module('phoneFilter', [])
    .filter('changeState', function() {
        return function(number) {
            if(number==0)
                return '状态0';
            else
                return '状态1';
        };
    })
    .filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    })
    .filter('myFormFilter', function() {
        return function(input) {
            return selectData=='bb'?1:0;
        };
    })

    .filter('checkmark2', function() {
        return function(input) {
            return input ? '对' : '错';
        };
    });