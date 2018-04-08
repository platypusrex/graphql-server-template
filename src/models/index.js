import Sequelize from 'sequelize';

const database = 'test_graphql_db';
const username = 'test_graphql_admin';
const password = 'iamapassword';

const sequelize = new Sequelize(database, username, password, {
	host: 'localhost',
	dialect: 'postgres'
});
const db = {
	User: sequelize.import('./user'),
	Board: sequelize.import('./board'),
	Suggestion: sequelize.import('./suggestion'),
};

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;

export default db;