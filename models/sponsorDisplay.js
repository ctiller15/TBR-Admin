var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var SponsorDisplay = new keystone.List('SponsorDisplay', {
	map: {name: 'SponsorName'}
});
 
SponsorDisplay.add({
    SponsorName: { type: String, required: true, index: true, initial: true },
    Logo: { type: Types.CloudinaryImage},
    Description: { type: String, initial: true, index: true },
    Site: {type: String, index: true},
    Phone: {type: String, index: true},
    Display: {type: Boolean, default: true, index: true}
});

SponsorDisplay.defaultColumns = 'SponsorName, Description, Display';
SponsorDisplay.register();