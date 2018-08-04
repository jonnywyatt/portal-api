module.exports = {
	create (req, res) {
		req.app.get('db').subtypes
			.insert({
				type: req.body.type,
				label: req.body.label
			})
			.then(type => res.status(201).send(type))
			.catch(error => res.status(400).send(error));
	},
	list (req, res) {
		req.app.get('db').subtypes.find()
			.then(subtypes => res.status(200).send(subtypes))
			.catch(error => res.status(400).send(error));
	}
};
