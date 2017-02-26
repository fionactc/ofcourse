import { Mongo } from 'meteor/mongo';

export const Courses = new Mongo.Collection('courses');

Courses.deny({ insert() { return true; }, update() { return true; }, remove() { return true; } });