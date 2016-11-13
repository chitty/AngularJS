describe ("ShoppingListCheckOff Controllers", function() {

  beforeEach(module("ShoppingListCheckOff"));

  var $controller;
  var toBuyShoppingController;
  
  var bought = [];
  var to_buy = [ { name: "mangos", quantity: 3 },
                 { name: "peppers", quantity: 5 },
  ];

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    var ShoppingListCheckOffServiceMock = {};

    ShoppingListCheckOffServiceMock.getToBuy = function () {
      return to_buy;
    }

    ShoppingListCheckOffServiceMock.getBought = function () {
      return bought;
    }

    toBuyShoppingController =
      $controller("ToBuyShoppingController", 
                  {ShoppingListCheckOffService: ShoppingListCheckOffServiceMock});

    alreadyBoughtShoppingController =
      $controller("AlreadyBoughtShoppingController", 
                  {ShoppingListCheckOffService: ShoppingListCheckOffServiceMock});
  }));

  it("ToBuyShoppingController should return the complete list of to buy items", function(){
    expect(toBuyShoppingController.items).toBe(to_buy);
  });

  it("ToBuyShoppingController should return false when the list of already to buy items is not empty", function(){
    expect(toBuyShoppingController.isEmpty()).toBe(false);
  });

  it("AlreadyBoughtShoppingController should return the complete list of already bought items", function(){
    expect(alreadyBoughtShoppingController.items).toBe(bought);
  });

  it("AlreadyBoughtShoppingController should return true when the list of already bought items is empty", function(){
    expect(alreadyBoughtShoppingController.isEmpty()).toBe(true);
  });

})
