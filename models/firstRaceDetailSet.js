var keystone = require('keystone');
var Types = keystone.Field.Types;

var FirstRaceDetailSet = new keystone.List('FirstRaceDetailSet');
 
FirstRaceDetailSet.add({
    Events: {
        type: Types.Html, wysiwyg: true, initial: true, index: true
    },
    Times: {
        type: Types.Html, wysiwyg: true, initial:true, index: true
    },    
    Location: {
        type: String, wysiwyg: true, initial: true, index: true
    }
});
 
FirstRaceDetailSet.register();