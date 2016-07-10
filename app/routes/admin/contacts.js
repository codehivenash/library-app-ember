import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('contact');
	},
	actions: {
		deleteLibrary(message){
			let confirmation = confirm(`Are you sure you want to delete message: ${ message.id }`);
			
			if (confirmation){
				message.destroyRecord();
			}else{
				alert("YOu ahve not deleted the record");
			}
		}
	}
});
