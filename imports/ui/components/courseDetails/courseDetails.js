import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './courseDetails.html';

import { Course } from '/imports/api/courses/courses';
import { Comments } from '/imports/api/comments/comments';

const name = 'details';


class Details {
  constructor($scope, $reactive, $state, $stateParams) {
    'ngInject';

    this.$state = $state;
    this.courseId = $stateParams.courseId;

    $reactive(this).attach($scope);

    this.subscribe('courses');
    this.helpers({
      course() {
        return Courses.findOne({_id: this.getReactively('courseId')})
      },
      comments() {
        return Comments.findOne({courseId: this.getReactively('courseId') })
      }
    })
  }
}

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: Details
  })
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider.state('details', {
      url: '/details',
      template: '<details></details>'
    })
  }