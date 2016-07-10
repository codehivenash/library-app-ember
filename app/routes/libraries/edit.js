import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('library' ,params.library_id);
	},
	actions: {
		saveLibrary(newLib){
			newLib.save().then(()=> this.transitionTo('libraries'));	
		},
		willtransition(transition){
			let model = this.controller.get('model');

			if(model.get('hasDirtyAttributes')){
				let confirmation = confirm("Your record was not saved. Woudl you liek to leave this form");

				if(confirmation){
					model.rollbackAttributes();
				}else{
					transition.abort();
				}
			}
		}
	}
});
