'use strict';

(function () {
  var dependencies = [];

  angular.module('sw', dependencies);
})();

(function () {
  angular.module('sw').controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = [];
  function mainCtrl() {
    console.log('hi');
  }
})();

(function () {
  angular.module('sw').directive('navBar', navBar).directive('waterCloseup', waterCloseup);

  function navBar() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../partials/navBar.html',
      controller: 'mainCtrl'
    };
  }

  function waterCloseup() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../partials/waterCloseup.html',
      controller: 'mainCtrl'
    };
  }
})();