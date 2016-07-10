import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('library');
	},
	setupController: function (controller, model){
		this._super(controller,model);
		controller.set('title', 'Create a new library');
		controller.set('buttonLabel', 'Create');
	},
	renderTemplate(){
		this.render('libraries/form');
	},
	actions: {
		saveLibrary(newLib){
			newLib.save().then(()=> this.transitionTo('libraries'));
		},
		willtransition(){
			this.controller.get('model').rollbackAttributes();
		}
	}
});