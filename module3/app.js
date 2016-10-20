(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;

  menu.getMatchedMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      menu.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

}


MenuSearchService.$inject = ['$filter', '$http', 'ApiBasePath']
function MenuSearchService($filter, $http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var httpPromise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })

    return httpPromise.then( function(response) {
      var full_menu = response.data.menu_items;
      var filtered_menu = $filter('filter')(full_menu, {description: searchTerm});
      return filtered_menu;
    })
  }
}

})();