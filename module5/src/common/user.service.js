(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;
  var user = {};

  service.saveUserPreferences = function (newUser, favoriteDish) {
    user.favoriteDish = favoriteDish;
    user.firstname = newUser.firstname;
    user.lastname = newUser.lastname;
    user.email = newUser.email;
    user.phone = newUser.phone;
  };

  service.getUserPreferences = function() {
    return user;
  };
}

})();
