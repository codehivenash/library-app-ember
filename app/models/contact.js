import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';
// import Ember to use computed methods
import Ember from 'ember';

export default Model.extend({
	email: attr('string'),
	message: attr('string'),

	//Model Validation Methods
	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/ ),
	isMessageLongEnough: Ember.computed.gte('message.length', 5),

	isValidAll: Ember.computed.and('isValidEmail','isMessageLongEnough'),
	isNotValid: Ember.computed.not('isValidAll'),

	//Too Long: Remember to use more methods from Ember.computed (and not or match )
	// allFieldsOK: Ember.computed('isValidEmail', 'isMessageLongEnough', 'message',function(){
	// if (this.get('isValidEmail') && this.get('isMessageLongEnough') ){
	// 	if (this.get('message').length > 6){
	// 		return true;
	// 	}
	// 	return false;
	// }
	// return false;
	// }),

	submitReady: Ember.observer('isValidAll', function(){
	 if ('isValidAll'){
		console.log('Permission:', this.get('isValidAll'));
	 }
	})
});
