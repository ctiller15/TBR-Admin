// var keystone = require('keystone');
// var	Types = keystone.Field.Types;

// var Announcement = new keystone.List('Announcement');

// Announcement.add({
// 	Title: { type: Types.Text },
// 	Text:  { type: Types.Textarea },
// 	Date: { 
// 			type: Date,
// 			default: Date.now()
// 		},
// 	Display: {
// 			type: Boolean,
// 			default: true
// 		}
// });

// Announcement.defaultColumns = 'Title, Text, Date';
// Announcement.register();
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