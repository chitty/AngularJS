(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['categories'];
function MenuCategoriesController(categories) {
  var categoriesList = this;
  categoriesList.categories = categories.data;
}

})();
