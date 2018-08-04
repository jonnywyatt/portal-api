module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
		type: DataTypes.INTEGER,
		sub_type: DataTypes.INTEGER,
		user: DataTypes.INTEGER,
		people: DataTypes.INTEGER
  }, {});
  return event;
};