import query from './query';
import mutation from './mutation';

export const resolvers = {
	...query,
	...mutation
};