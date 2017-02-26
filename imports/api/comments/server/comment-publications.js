import { Comments } from './../comments.js';

Meteor.public('comments', function() {
  return Comments.find({});
})

Meteor.public('comment.course', function(courseId) {
  return Comments.find({courseId: courseId })
})