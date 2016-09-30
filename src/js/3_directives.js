(function () {
  angular.module('sw')
  .directive('navBar', navBar)
  .directive('waterCloseup', waterCloseup);

  function navBar() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../partials/navBar.html',
      controller: 'mainCtrl',
    }
  }

  function waterCloseup() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../partials/waterCloseup.html',
      controller: 'mainCtrl',
    }
  }
})();
