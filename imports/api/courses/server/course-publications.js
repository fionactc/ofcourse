import { Courses } from './../courses.js';

Meteor.public('courses', function() {
  return Courses.find({});
})