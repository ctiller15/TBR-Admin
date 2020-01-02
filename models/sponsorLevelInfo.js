var keystone = require('keystone');
var Types = keystone.Field.Types;

var SponsorLevelInfo = new keystone.List('SponsorLevelInfo', {
    map: {name: 'Title'}
});
 
SponsorLevelInfo.add({
    Title: {
        type: String, initial: true, index: true
    },
    Information:{
        type: Types.Html, initial: false, wysiwyg: true
    },
    Order: {
        type: Number, initial: true, index: true
    },
    Display: {
        type: Boolean, default: true, index: true
    }
});
 
SponsorLevelInfo.defaultColumns = 'Title, Order, Display';
SponsorLevelInfo.register();