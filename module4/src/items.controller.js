(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  var itemsList = this;
  itemsList.menu_items = items.data.menu_items;
  itemsList.category = items.data.category;
}

})();
