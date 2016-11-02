(function(){
'use strict';

angular.module('MenuApp')
.component('myCategories', {
  templateUrl: 'src/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
})

})();
