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
			`SELECT activities.id, activities.user, activities.people, activities.start_date_time, activities.end_date_time, activities.quality, activities.quality, activities.url, activities.distance_km, 
			types.label as type_label,
			subtypes.label as subtype_label,
			locations_start.id as locations_start_id, locations_start.label as locations_start_label,
			locations_start.lat as locations_start_lat, locations_start.lon as locations_start_lon,
			locations_end.id as locations_end_id, locations_end.label as locations_end_label,
			locations_end.lat as locations_end_lat, locations_end.lon as locations_end_lon,
			people.id as people_id, people.label as people_label
			FROM activities 
			LEFT OUTER JOIN types ON (types.id = activities.type)
			LEFT OUTER JOIN subtypes ON (subtypes.id = activities.subtype)
			LEFT OUTER JOIN locations as locations_start ON (locations_start.id = activities.location_start)
			LEFT OUTER JOIN locations as locations_end ON (locations_end.id = activities.location_end)
			LEFT OUTER JOIN people ON (people.id = ANY(activities.people));`,
			[],
			{
				decompose: {
					pk: 'id',
					columns: ['id', 'type', 'type_label', 'subtype_label', 'user', 'start_date_time', 'end_date_time', 'quality', 'url', 'distance_km'],
					people: {
						pk: 'people_id',
						columns: {
							people_id: 'id',
							people_label: 'label'
						},
						array: true
					},
					location: {
						start: {
							pk: 'locations_start_id',
							columns: {
								locations_start_id: 'id',
								locations_start_label: 'label',
								locations_start_lat: 'lat',
								locations_start_lon: 'lon'
							}
						},
						end: {
							pk: 'locations_end_id',
							columns: {
								locations_end_id: 'id',
								locations_end_label: 'label',
								locations_end_lat: 'lat',
								locations_end_lon: 'lon'
							}
						}
					}
				}
			})
			.then(activities => res.status(200).send(activities))
			.catch(error => res.status(400).send(error));
	}
};
