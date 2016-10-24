(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      found: '<foundItems',
      title: '@title',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true,
  };

  return ddo;
}


function FoundItemsDirectiveController(){
  var menu = this;
}


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;

  menu.getMatchedMenuItems = function (searchTerm) {
    if (searchTerm === undefined || searchTerm.length == 0) {
      menu.found = {};
      updateFoundItems();
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        menu.found = response;
        updateFoundItems();
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }
  }

  menu.removeItem = function(index) {
    menu.found.splice(index, 1);
    updateFoundItems();
  }

  function updateFoundItems() {
    if (menu.found.length === undefined || menu.found.length === 0) {
      menu.title = "Nothing found"
    } else if (menu.found.length === 1) {
      menu.title = menu.found.length + " item found";
    } else {
      menu.title = menu.found.length + " items found";
    }
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
