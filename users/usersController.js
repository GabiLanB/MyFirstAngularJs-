"use strict";
angular
    .module('AppTest')
	.controller('usersController', ['myData', '$localStorage','$http', function(myData, $localStorage,$http) {
            var usersCtrl = this;
            usersCtrl.title = 'users'; 
            usersCtrl.subtitle = 'some Users Page details';
            usersCtrl.textAddList = 'Add Users';
            usersCtrl.textList = 'List of Added Users';
            usersCtrl.table = ['Check','Name','Last Name','Age','Phone','E-mail', 'Gender','Actions']; //table Header
            usersCtrl.gender = ["Male", "Female"]; // Array for gender 

            usersCtrl.onlyNumbers = /^\d+$/; // Use this for input text to accept only numbers
            usersCtrl.contactsBefore = myData;
            
            usersCtrl.$storage = $localStorage.$default({
                contactsList: usersCtrl.contactsBefore.data
            });
            usersCtrl.contacts = $localStorage.contactsList;

            usersCtrl.clearForm = function(){
                    usersCtrl.newName = "";
                    usersCtrl.newLastName = "";
                    usersCtrl.newAge = "";
                    usersCtrl.newPhone = "";
                    usersCtrl.newEmail = "";
                    usersCtrl.newGender = "";
            }
            // Submit new contact with values from the form fields, then reset values of the fields
            usersCtrl.submit = function() {  
                //console.log("Before localStoreUpdate: ",usersCtrl.contacts);
                var newContact = {
                    "active" : false,
                    "newName" : usersCtrl.newName,
                    "newLastName" : usersCtrl.newLastName,
                    "newAge" : usersCtrl.newAge,
                    "newPhone" : usersCtrl.newPhone,
                    "newEmail" : usersCtrl.newEmail,
                    "newGender" : usersCtrl.newGender
                };
                $localStorage.contactsList.push(newContact); // push the new contact to the localStore
                //console.log("After localStoreUpdate: ",usersCtrl.contacts);
                usersCtrl.clearForm();
            };
            usersCtrl.clearAll = function(){
                delete $localStorage.contactsList;
                usersCtrl.contacts = $localStorage.contactsList;
            }
            usersCtrl.populate = function(){
                   $localStorage.contactsList = usersCtrl.contactsBefore.data;
                    usersCtrl.contacts = $localStorage.contactsList;
            }
            usersCtrl.deleteContact = function(a,b){
                $localStorage.contactsList.splice(a,b);
            }
            usersCtrl.editContact = function(a,b){
                var contactForEdit = $localStorage.contactsList.slice(a,b); /*It will be save at the end of the list - for now :) */
                    usersCtrl.newName = contactForEdit[0].newName;
                    usersCtrl.newLastName = contactForEdit[0].newLastName;
                    usersCtrl.newAge = contactForEdit[0].newAge;
                    usersCtrl.newPhone = contactForEdit[0].newPhone;
                    usersCtrl.newEmail = contactForEdit[0].newEmail;
                    usersCtrl.newGender = contactForEdit[0].newGender;
                   $localStorage.contactsList.splice(a,b);
                   usersCtrl.contacts = $localStorage.contactsList;
            }    

        }]);