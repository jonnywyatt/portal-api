module.exports = {
	create (req, res) {
		const { label, last_name, first_name } = req.body;
		req.app.get('db').people
			.insert({
				label,
				last_name,
				first_name
			})
			.then(type => res.status(201).send(type))
			.catch(error => res.status(400).send(error));
	},
	list (req, res) {
		req.app.get('db').people.find()
			.then(people => res.status(200).send(people))
			.catch(error => res.status(400).send(error));
	}
};
