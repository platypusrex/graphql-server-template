import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers';
import models from './models';

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const app = express();

app.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql',
	}),
);

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: models }));

models.sequelize.sync()
	.then(() =>
		app.listen(8000, () => console.log('listening on port 8000'))
	);