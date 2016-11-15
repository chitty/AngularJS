describe ("ToBuyShoppingController", function() {

  beforeEach(module("ShoppingListCheckOff"));

  var $controller;
  var toBuyShoppingController;
  
  var to_buy = [ { name: "mangos", quantity: 3 },
                 { name: "peppers", quantity: 5 },
  ];

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    var ShoppingListCheckOffServiceMock = {};

    ShoppingListCheckOffServiceMock.getToBuy = function () {
      return to_buy;
    }

    toBuyShoppingController =
      $controller("ToBuyShoppingController", 
                  {ShoppingListCheckOffService: ShoppingListCheckOffServiceMock});

  }));

  it("should return the complete list of to buy items", function(){
    expect(toBuyShoppingController.items).toBe(to_buy);
  });

  it("should return false when the list of already to buy items is not empty", function(){
    expect(toBuyShoppingController.isEmpty()).toBe(false);
  });

})
