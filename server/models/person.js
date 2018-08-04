module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    label: DataTypes.STRING
  }, {});
  return person;
};