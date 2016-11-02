(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['categories'];
function MenuCategoriesController(categories) {
  console.log(">> MenuCategoriesController <<")
  var catList = this;
  catList.categories = categories;
}

})();
