/**
 * Created by dell on 2015/9/24.
 */
angular.module('phonecatServices', ['ngResource'])
    .factory('SearchSettingService',
    ['$http', '$q', function($http, $q) {
        return {
            setting: function() {
                var deferred = $q.defer();

                $http.get('/settings.json').success(function(result) {
                    deferred.resolve(result);
                }).error(function(result) {
                    deferred.reject("network error");
                });

                console.log(deferred.promise);
                return deferred.promise;
            }
        };
    }])
    .factory('Phone', function($resource){
        return $resource('data/:phoneId.json', {}, {
            //query: {method:'GET', params:{phoneId:':id'}, isArray:true}
            query: {method:'GET', isArray:true}
        });
    });