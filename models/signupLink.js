var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var RaceLink = new keystone.List('SignupLink', {
	map: {name: 'Title'}
});
 
RaceLink.add({
    Title: { type: String, required: true, index: true, initial: true },
    UrlText: { type: String, required: true, index: true, initial: true },
    Date: { type: Date, default: Date.now(), index: true },
    Display: {type: Boolean, default: true}
});
 
RaceLink.register();