var keystone = require('keystone');
var Types = keystone.Field.Types;

var ThirdRaceDetailSet = new keystone.List('ThirdRaceDetailSet');
 
ThirdRaceDetailSet.add({   
    Awards: {
        type: Types.Html, wysiwyg: true, initial: true, index: true
    },
    Party: {
        type: Types.Html, wysiwyg: true, initial: true, index: true
    }
});
 
ThirdRaceDetailSet.register();