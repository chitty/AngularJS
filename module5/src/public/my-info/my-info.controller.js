(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['UserService']
function MyInfoController(UserService) {
  var myInfo = this;
  myInfo.userInfo = UserService.getUserPreferences();

  myInfo.displayInfo = false;
  if (!angular.equals(myInfo.userInfo, {}))
    myInfo.displayInfo = true;
}

})();
