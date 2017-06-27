'use strict';
angular
    .module('AppTest')
    .factory('usersFactory',['$http', function($http) {
 
        function getUsers() {
            return $http.get('../data/data.json').then(function(data){
                return data;
            });
        }
 
        return {
            getUsers: getUsers
        }
    }]);