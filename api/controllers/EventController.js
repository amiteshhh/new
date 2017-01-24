/**
 * EventController
 *
 * @description :: Server-side logic for managing Events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//localhost:1337/event/1/participants/1-- post and delete
	getDetailedList: function (req, res) {
		res.json([{ id: 1 }]);
	},

	findDeep: function (req, res) {
		var id = req.param("id");
		if (!id) {
			res.badRequest('No record found with the specified `id`');
			return;
		}
		Event.findOne({ id: id })
		.populate('eventHostedBy')
		.populate('optionTemplate')
		.populate('textTemplates')
		.populate('eventParticipants')
		.populate('eventLikedBy')
		.populate('eventSharedBy')
		.exec(function (err, event) {
			//console.log("findDeep", event);
			if (event.templateType == 'text') {
				return res.json(event);
			}
			OptionTemplate.findOne({ id: event.optionTemplate.id })
			.populate('options')
			.exec(function (err, optionTemplate) {
				event.optionTemplate = optionTemplate;
				//console.log("findDeep OptionTemplate", event);
				res.json(event);
				// => null
			});
		});

	}
};

