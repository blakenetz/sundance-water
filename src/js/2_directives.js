(function () {
  angular.module('sw')
  .directive('swHeader', swHeader);

  function swHeader() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/header.html',
      controller: 'mainCtrl',
    }
  }
})();