import { Meteor } from 'meteor/meteor';
import { Comments } from '/imports/api/comments/comments';

Meteor.methods({
  createComment,
  removeComment
});

function createComment(cmDoc) {
  console.log('inserting cmDoc', cmDoc);
  Comments.insert(cmDoc, (err)=>{});
}

function removeComment(cmId) {
  Comments.remove({_id: cmId});
  console.log('removed comment', cmId);
}