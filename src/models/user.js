export default (sequelize, Datatypes) => {
	const User = sequelize.define('User', {
		username: Datatypes.STRING,
	});

	User.associate = (models) => {
		// one to many with board
		User.hasMany(models.Board, {
			foreignKey: 'owner',

		});

		// one to many with suggestion
		User.hasMany(models.Suggestion, {
			foreignKey: 'userId'
		});
	};

	return User;
}