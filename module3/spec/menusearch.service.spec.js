describe ("MenuSearchService", function() {

  var menusearch;
  var $httpBackend;
  var ApiBasePath;

  var fakeResponse = {
    "menu_items": [{
      "name": "Rice",
      "description": "rice dish",
    }, {
      "name": "Meat",
      "description": "meat dish",
    }]
  }

  var fakeResponseWithMeat = {
    "menu_items": [{
      "name": "Meat",
      "description": "meat dish",
    }]
  }

  beforeEach(function() {
    module("NarrowItDownApp");

    inject(function($injector) {
      menusearch = $injector.get("MenuSearchService");
      $httpBackend = $injector.get("$httpBackend");
      ApiBasePath = $injector.get("ApiBasePath");
    })
  });

  it("should return the full menu when no search term was provided", function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(fakeResponse);
    menusearch.getMatchedMenuItems("").then(function(response) {
      expect(response).toEqual(fakeResponse.menu_items);
    });
    $httpBackend.flush();
  });

  it("should return the filtered menu for the given search term", function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(fakeResponse);
    menusearch.getMatchedMenuItems("meat").then(function(response) {
      expect(response).toEqual(fakeResponseWithMeat.menu_items);
    });
    $httpBackend.flush();
  });

  it("should return an empty list when the search term is not in the menu", function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(fakeResponse);
    menusearch.getMatchedMenuItems("cookies").then(function(response) {
      expect(response).toEqual([]);
    });
    $httpBackend.flush();
  });

})
