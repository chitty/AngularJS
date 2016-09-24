(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']
function ToBuyShoppingController(ShoppingListCheckOffService){
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuy();

  toBuyList.buy = function(item) {
    ShoppingListCheckOffService.buy(item);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getBought();
}


function ShoppingListCheckOffService(){
  var service = this;

  var to_buy = [ { name: "mangos", quantity: 3 },
                 { name: "peppers", quantity: 5 },
                 { name: "onions", quantity: 4 },
                 { name: "pluots", quantity: 6 },
                 { name: "papayas", quantity: 2 },
                 { name: "carrots", quantity: 7 },
  ];

  var bought = []

  service.buy = function(item) {
    bought.push(to_buy[item]);
    to_buy.splice(item, 1);
  }

  service.getToBuy = function () {
    return to_buy;
  }

  service.getBought = function () {
    return bought;
  }

}


})();