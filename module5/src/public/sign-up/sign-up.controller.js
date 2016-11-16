(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var signUp = this;

  signUp.submit = function () {
    console.log("Submitted: ",signUp);
    signUp.completed = true;
  };
}

})();
