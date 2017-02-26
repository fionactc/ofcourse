import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './courseList.html';

const name = 'list';

class List {
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
    controller: List
  })
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider.state('list', {
      url: '/list',
      template: '<list></list>'
    })
  }