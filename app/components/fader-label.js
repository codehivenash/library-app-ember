import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	classNames: ['label label-success label-fade'],

	isShowing: true,
	isShowingChanged: Ember.observer('isShowing', function(){
		Ember.run.later(()=>{
			this.set('isShowing', false);
		}, 3000);
	})
});
