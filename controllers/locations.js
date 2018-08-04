module.exports = {
	create (req, res) {
		req.app.get('db').locations
			.insert({
				lat: req.body.lat,
				lon: req.body.lon,
				label: req.body.label
			})
			.then(type => res.status(201).send(type))
			.catch(error => res.status(400).send(error));
	},
	list (req, res) {
		req.app.get('db').locations.find()
			.then(locations => res.status(200).send(locations))
			.catch(error => res.status(400).send(error));
	}
};
