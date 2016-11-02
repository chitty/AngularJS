(function(){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService ($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    console.log("GET THEM ALL categories")
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
  }

  service.getItemsByCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    });    
  }

}

})();
