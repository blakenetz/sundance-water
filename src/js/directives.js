(function () {
  angular.module('sw')
  .directive('swWelcome', swWelcome);

  function swWelcome() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/welcome.html',
      controller: 'mainCtrl',
    }
  }
})();
