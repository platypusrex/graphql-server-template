import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers';
import models from './models';
import { port } from "./utils/config";
import { verifyToken } from "./utils/authUtil";

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const app = express();

app
	.use(cors('*'))
  .use(verifyToken)
	.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
	.use(
		'/graphql',
		bodyParser.json(),
		graphqlExpress(req => ({ schema, context: {models, user: req.user} }))
	);

models.sequelize.sync()
	.then(() =>
		app.listen(port, () => console.log('listening on port 8000'))
	);