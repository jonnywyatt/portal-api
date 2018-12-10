const moment = require('moment');

module.exports = {
  splitDateTime: dateTime => {
    const m = moment(dateTime);
    return {
      start_date: m.format('YYYY-MM-DD'),
      start_time: m.format('HH:MM')
    }
  },
  duration: (start, end) => {
		const duration = moment(end).diff(moment(start), 'minutes');
		return `${duration} min`;
	}
};