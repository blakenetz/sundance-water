(function () {
  angular.module('sw')
  .directive('navBar', navBar)
  .directive('landingPage', landingPage);

  function navBar() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../partials/navBar.html',
      controller: 'mainCtrl',
    }
  }

  function landingPage() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../partials/landingPage.html',
      controller: 'mainCtrl',
    }
  }
})();
