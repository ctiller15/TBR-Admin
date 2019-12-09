var keystone = require('keystone');
var Types = keystone.Field.Types;

var SecondRaceDetailSet = new keystone.List('SecondRaceDetailSet');
 
SecondRaceDetailSet.add({
    Parking: {
        type: Types.Html, wysiwyg: true, initial: true, index: true
    },
    Package: {
        type: Types.Html, wysiwyg: true, initial: true, index: true
    }    
});
 
SecondRaceDetailSet.register();