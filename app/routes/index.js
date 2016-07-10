import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('invitation');
	},
	actions: {
		saveInvitation(invitation){
			// alert(`Saving of the following email address is in progress ${ invitation.get('email') }`);
			this.controller.set('responseMessage','The Record has been saved');
			// const email = this.get('emailAddress');
			// const newInvitation = this.store.createRecord('invitation', {email:email});
			invitation.save().then(()=> this.transitionTo('index'));
		}
	}	
});
