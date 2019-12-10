var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var WelcomePage = new keystone.List('WelcomePage', {
	map: {name: 'Date'}
});
 
WelcomePage.add({
    Logo: { type: Types.CloudinaryImage },
    Text: {
        type: Types.Html, wysiwyg: true, initial: true, index: true
    },
    Date: { type: Date, default: Date.now(), index: true}
});

WelcomePage.defaultColumns = 'Date';
WelcomePage.register();