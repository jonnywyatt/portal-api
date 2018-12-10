const {splitDateTime} = require('./date-time');

module.exports = activities => {
	return activities.map(activity => {
		return {
			...activity,
			time: {
				...activity.time,
        ...splitDateTime(activity.time.start)
			}
		}
	});
};