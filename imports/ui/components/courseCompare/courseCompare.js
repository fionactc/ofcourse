import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './courseCompare.html';

const name = 'compare';

class Compare {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);
  }
}

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: Compare
  })
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider.state('compare', {
      url: '/compare',
      template: '<compare></compare>'
    })
  }