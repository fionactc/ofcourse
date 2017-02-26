import { Meteor } from 'meteor/meteor';
import { Courses } from '/imports/api/courses/courses';

Meteor.methods({
  createCourse,
  updateCourse,
  addSession,
  removeCourse
})

function createCourse(doc) {
  Courses.insert(doc);
}

function updateCourse(id, doc) {
  // Courses.update({_id: id}, { $set: {}})
}

function addSession(id, session) {
  Courses.update({_id: id }, {$push: { session: session }});
}

function removeCourse(id) {
  Courses.remove({_id: id});
}