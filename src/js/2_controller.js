(function () {
  angular.module('sw')
  .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = [];
  function mainCtrl() {
    console.log('hi');
  }
})();
