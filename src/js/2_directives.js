(function () {
  angular.module('sw')
  .directive('swHeader', swHeader);

  function swLandingPage() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/landingPage.html',
      controller: 'mainCtrl',
    }
  }
})();
