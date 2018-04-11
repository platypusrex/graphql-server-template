export default (sequelize, Datatypes) => {
	const User = sequelize.define('User', {
		username: {
			type: Datatypes.STRING,
			unique: true
		},
		email: {
			type: Datatypes.STRING,
			unique: true
		},
		password: Datatypes.STRING,
	});

	User.associate = (models) => {
		// one to many with board
		User.hasMany(models.Board, {
			foreignKey: 'userId',

		});

		// one to many with suggestion
		User.hasMany(models.Suggestion, {
			foreignKey: 'userId'
		});
	};

	return User;
}