import angular from 'angular';

import { Meteor } from 'meteor/meteor';

import { name as Socially } from '../imports/ui/components/socially/socially';

import { name as Ofcourse } from '../imports/ui/components/ofcourse/ofcourse';

function onReady() {
  angular.bootstrap(document, [
    Ofcourse
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
