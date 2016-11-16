(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'http://cch-restaurantapp.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
