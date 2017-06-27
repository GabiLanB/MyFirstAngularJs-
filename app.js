"use strict";
(function(){
	angular.module('AppTest', ['ui.router','ngStorage'])
	       .config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				    url: '/home',
				    templateUrl:'home/home.html',
				    controller:'homeController',
                    controllerAs:'homeCtrl'
				 })
			.state('activeUsers', {
				    url: '/activeUsers',
				    templateUrl:'activeUsers/activeUsers.html',
				    controller:'activeUsersController',
                    controllerAs:'activeUsersCtrl'
				 })
			.state('users', {
				    url: '/users',
				    templateUrl:'users/users.html',
				    controller:'usersController',
                    controllerAs:'usersCtrl',
                    resolve: {
						myData: function (usersFactory) {
                        	return usersFactory.getUsers().then(function(data) {  // get the JSON data
								return data;
							});
						}
					}

				 })
            
	}]);
})();