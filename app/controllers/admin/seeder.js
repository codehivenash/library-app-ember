import Ember from 'ember';
import Faker from 'faker';

export default Ember.Controller.extend({
	books: [],
	libraries: [],
	authors: [],

	actions: {
		generateLibraries(){
			const count = parseInt(this.get('librariesCounter'));

			for (let i = 0; i < count; i++) {
				this.store.createRecord('library').randomize().save().then(()=>{
					if (i === count - 1){
						//reset the counter
						this.set('librariesCounter', 0);

						//Set the libDone Generating
						this.set('libDone', true);
					}
				});
			}
		},
		deleteLibraries(){
			this.set('libDelDone', true);
			this._destroyAll(this.get('libraries'));
			
		},
		generateBooksAndAuthors(){
			const count = parseInt(this.get('authorsCounter'));

			for (let i = 0; i < count; i++) {
				let auth = this.store.createRecord('author');
				auth.randomize()
				.save().then(()=>{
					if (i === count - 1){
						this.set('authDone', true);
						this.set('authorsCounter', 0);
						
					}
				}
				);
				this._generateBooks(auth);
			}
		},
		deleteBooksAndAuthors(){
			this._destroyAll(this.get('authors'));
			this._destroyAll(this.get('books'));

			this.set('authDelDone', true);
		}
	},
	// Private Methods
	_destroyAll(records){
		records.forEach((item)=>{
			item.destroyRecord();
		});
	},
	_generateBooks(author){
		const bookNumber = Faker.random.number(10);

		for (let i = 0; i < bookNumber; i++) {
			const library = this._selectRandomLibrary();
			this.store.createRecord('book')
			.randomize(author,library)
			.save();
			author.save();
			library.save();	
		}		
	},

	_selectRandomLibrary(){
		const libraries = this.get('libraries');
		const librariesCounter = libraries.get('length');

		//Create a new array from IDs
		const libraryIds = libraries.map((lib)=> { return lib.get('id');});
		const randomNumber = Faker.random.number(librariesCounter - 1);

		const randomLibrary = libraries.findBy('id', libraryIds[randomNumber]);

		return randomLibrary;
	}
});
