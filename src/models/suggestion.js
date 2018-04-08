export default (sequelize, Datatypes) => {
	const Suggestion = sequelize.define('Suggestion', {
		text: Datatypes.STRING
	});

	return Suggestion;
}