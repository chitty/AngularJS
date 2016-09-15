(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope) {
    $scope.message = "";
    $scope.message_class = "";
    $scope.border_color = "";

    $scope.displayMessage = function() {
        if ($scope.foods === undefined) {
            $scope.message = "Please enter data first";
            $scope.message_class = "alert alert-danger";
            $scope.border_color = "red";
        } else {
            var foods = $scope.foods.split(",");
            var number_of_items = foods.length;
            for (var i=0; i<foods.length; i++) {
                if (foods[i].trim() === "")
                    number_of_items--;
            }
            if (number_of_items === 0) {
                $scope.message = "Please enter data first";
                $scope.message_class = "alert alert-danger";
                $scope.border_color = "red";
            }
            else if (number_of_items > 3) {
                $scope.message = "Too much!";
                $scope.message_class = "alert alert-warning";
                $scope.border_color = "orange";
            } else {
                $scope.message = "Enjoy!"
                $scope.message_class = "alert alert-success"
                $scope.border_color = "green";
            }
        }
    };
});

})();