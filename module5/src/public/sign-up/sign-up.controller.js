(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ['MenuService', 'UserService']
function SignUpController(MenuService, UserService) {
  var signUp = this;

  signUp.submit = function () {
    var favoriteDish = MenuService.getMenuItem(signUp.user.favoritedish.toUpperCase());

    favoriteDish
    .then(function(favoriteDish) {
        if (favoriteDish === "error") {
          signUp.favoriteDishError = true;
          signUp.infoSaved = false;
        } else {
          signUp.favoriteDishError = false;
          UserService.saveUserPreferences(signUp.user, favoriteDish);
          signUp.infoSaved = true;
        }
      });


  };
}

})();
