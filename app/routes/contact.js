import Ember from 'ember';

export default Ember.Route.extend({

	model(){
		return this.store.createRecord('contact');
	},
	actions: {
		submitMessage(newContactMessage){
			// console.log(`Sender: ${this.emailAddress}, Message: ${this.message}`);
			
			newContactMessage.save().then(()=>{
				this.controller.set('responseMessage', true);
			});

		}
	}
});
