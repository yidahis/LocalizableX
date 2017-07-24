var postsData = [
	{
		title: 'Introducting Telescope',
		utl: 'http://sachagreif.com/introducting-telescope'
	},
	{
		title: 'meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'meteor',
		url: 'http://meteor.com'
	}
]

Template.postsList.helpers({
	posts: postsData
});