import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import template from './ofcourse.html';
import { name as Navigation } from '../navigation/navigation';
import { name as Auth } from '../auth/auth';
import { name as Landing } from '../landing/landing';
import { name as Compare } from '../courseCompare/courseCompare';
import { name as Details } from '../courseDetails/courseDetails';
import { name as List } from '../courseList/courseList';

class Ofcourse {}

const name = 'ofcourse';

export default angular.module(name, [
  angularMeteor,
  ngMaterial,
  uiRouter,
  Navigation,
  Landing,
  Compare,
  Details,
  List,
  Auth
]).component(name, {
  template,
  controllerAs: name,
  controller: Ofcourse
})
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider, $qProvider, $mdIconProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/landing');

  $qProvider.errorOnUnhandledRejections(false);
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error==='AUTH_REQUIRED') {
      $state.go('landing');
    }
  })
}