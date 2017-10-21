var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Sponsor = new keystone.List('Sponsor', {
	map: {name: 'SponsorName'}
});
 
Sponsor.add({
    SponsorName: { type: String, required: true, index: true, initial: true },
    Logo: { type: Types.CloudinaryImage},
    Description: { type: String},
    Site: {type: String},
    Phone: {type: String},
    Display: {type: Boolean, default: true}
});
 
Sponsor.register();

// var keystone = require('keystone');
// var Types = keystone.Field.Types;

// /**
//  * Post Model
//  * ==========
//  */

// var Sponsor = new keystone.List('Sponsor', {
// 	map: { name: 'title' },
// 	autokey: { path: 'slug', from: 'title', unique: true },
// });

// Sponsor.add({
// 	title: { type: String, required: true },
// 	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
// 	author: { type: Types.Relationship, ref: 'User', index: true },
// 	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
// 	image: { type: Types.CloudinaryImage },
// 	content: {
// 		brief: { type: Types.Html, wysiwyg: true, height: 150 },
// 		extended: { type: Types.Html, wysiwyg: true, height: 400 },
// 	},
// 	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
// });

// Sponsor.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

// Sponsor.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
// Sponsor.register();