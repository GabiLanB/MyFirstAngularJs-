"use strict";
angular
    .module('AppTest')
        .controller('activeUsersController',['$localStorage',function($localStorage){
            var activeUsersCtrl = this;
            activeUsersCtrl.title = 'Active Users';
            activeUsersCtrl.subtitle = 'Active Users Page details';
            activeUsersCtrl.textList = 'List of Active Users';
            activeUsersCtrl.activeHead = ['Name','LastName','Age','Phone','E-mail', 'Gender'];

           activeUsersCtrl.activeUsersList = $localStorage.contactsList;
        }]);
