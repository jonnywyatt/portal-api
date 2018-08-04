module.exports = {
	create (req, res) {
		req.app.get('db').types
			.insert({
				label: req.body.label
			})
			.then(type => res.status(201).send(type))
			.catch(error => res.status(400).send(error));
	},
	list (req, res) {
		req.app.get('db').types.find()
			.then(types => res.status(200).send(types))
			.catch(error => res.status(400).send(error));
	}
};
