describe ("AlreadyBoughtShoppingController", function() {

  beforeEach(module("ShoppingListCheckOff"));

  var $controller;
  var alreadyBoughtShoppingController;
  
  var bought = [];

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    var ShoppingListCheckOffServiceMock = {};

    ShoppingListCheckOffServiceMock.getBought = function () {
      return bought;
    }

    alreadyBoughtShoppingController =
      $controller("AlreadyBoughtShoppingController", 
                  {ShoppingListCheckOffService: ShoppingListCheckOffServiceMock});
  }));

  it("should return the complete list of already bought items", function(){
    expect(alreadyBoughtShoppingController.items).toBe(bought);
  });

  it("should return true when the list of already bought items is empty", function(){
    expect(alreadyBoughtShoppingController.isEmpty()).toBe(true);
  });

})
