var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Announcement = new keystone.List('Announcement', {
	map: {name: 'Title'}
});
 
Announcement.add({
    Title: { type: String, required: true, index: true, initial: true },
    Text: { type: Types.Html, wysiwyg: true, initial: true, index: true, initial: true },
    Date: { type: Date, default: Date.now(), index: true },
    Display: {type: Boolean, default: true}
});
 
Announcement.register();