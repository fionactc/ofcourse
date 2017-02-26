import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './landing.html';

const name = 'landing';

class Landing {
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
    controller: Landing
  })
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider.state('landing', {
      url: '/landing',
      template: '<landing></landing>'
    })
  }