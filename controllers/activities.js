module.exports = {
	create (req, res) {
		const { type, sub_type, user, people, start_date_time, end_date_time, location_start, location_end, quality, url, distance_km } = req.body;
		req.app.get('db').activities
			.insert({
				type,
				sub_type,
				user,
				people,
				start_date_time,
				end_date_time,
				quality,
				location_start,
				location_end,
				url,
				distance_km
			})
			.then(event => res.status(201).send(event))
			.catch(error => res.status(400).send(error));
	},
	list (req, res) {
		req.app.get('db').query(
			`SELECT activities.id, activities.type, activities.sub_type, activities.user, activities.people, activities.start_date_time, activities.end_date_time, activities.quality, activities.location_start, activities.location_end, activities.quality, activities.url, activities.distance_km, 
			types.label as type_label,
			people.id as people_id, people.label
			FROM activities 
			LEFT OUTER JOIN types ON (types.id = activities.type)
			LEFT OUTER JOIN people ON (people.id = ANY(activities.people));`,
			[],
			{
				decompose: {
					pk: 'id',
					columns: ['id', 'type', 'type_label', 'sub_type', 'user', 'start_date_time', 'end_date_time', 'quality', 'location_start', 'location_end', 'url', 'distance_km'],
					people: {
						pk: 'people_id',
						columns: {
							id: 'people_id',
							label: 'label'
						},
						array: true
					}
				}
			})
			.then(activities => res.status(200).send(activities))
			.catch(error => res.status(400).send(error));
	}
};
