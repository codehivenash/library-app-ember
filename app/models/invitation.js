import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
	email: attr('string'),

	isValid: Ember.computed.match('email', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),
	actualEmailAddress: Ember.computed('emailAddress', function(){
		console.log('Email Check was called:', this.get('email'));
	}),
	emailAddressChanged: Ember.observer('email', function(){
		console.log('Observer called:', this.get('email'));
	}),
});
