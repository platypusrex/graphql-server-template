export default (sequelize, Datatypes) => {
	const User = sequelize.define('User', {
		username: Datatypes.STRING
	});

	return User;
}