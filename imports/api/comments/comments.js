import { Mongo } from 'meteor/mongo';

export const Comments = new Mongo.Collection('comments');

//Client Denied from any C-UD Operations
Comments.deny({ insert() { return true; }, update() { return true; }, remove() { return true; } });