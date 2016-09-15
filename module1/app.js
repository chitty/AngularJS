(function () {
'use strict';

angular.module('LunchFood', [])

.controller('LunchFoodController', function($scope) {
    $scope.message = ""

    $scope.displayMessage = function() {
        if ($scope.foods === undefined || $scope.foods.length === 0) {
            $scope.message = "Please enter data first"
        } else {
            var foods = $scope.foods.split(",");
            if (foods.length > 3) {
                $scope.message = "Too much!"
            } else {
                $scope.message = "Enjoy!"
            }
        }
    };
});

})();