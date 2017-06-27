angular
    .module('AppTest')
    .controller('homeController', ['$scope',function($scope)    
        {
        $scope.title = 'WELCOME';
        $scope.subtitle = 'some Home Page details';
        }]);