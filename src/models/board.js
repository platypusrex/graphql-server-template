export default (sequelize, Datatypes) => {
	const Board = sequelize.define('Board', {
		name: Datatypes.STRING,
	});

	Board.associate = (models) => {
		// one to many with Suggestion
		Board.hasMany(models.Suggestion, {
			foreignKey: 'boardId'
		});
	};

	return Board;
}