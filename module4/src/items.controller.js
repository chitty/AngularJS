(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  console.log(">> Menu ITEMSSS Controller <<")
  var itemsList = this;
  itemsList.items = items;
}

})();
