(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('catList', {
    url: '/cat-list',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'MenuCategoriesController as catList',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'MenuItemsController as items',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
              function($stateParams, MenuDataService) {
                return MenuDataService.getItemsByCategory($stateParams.categoryShortName);
      }]
    }
  })
}

})();
