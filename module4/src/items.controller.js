(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  var itemsList = this;
  itemsList.items = items.data;
}

})();
