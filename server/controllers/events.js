const event = require('../models').event;
const person = require('../models').person;

module.exports = {
	create(req, res) {
		return event
			.create({
				type: req.body.type,
				sub_type: req.body.sub_type,
				user: req.body.user,
				people: req.body.people
			})
			.then(event => res.status(201).send(event))
			.catch(error => res.status(400).send(error));
	},
	list(req, res) {
		return event
			.all({ include: [ person ] })
			.then(events => res.status(200).send(events))
			.catch(error => res.status(400).send(error));
	}
};