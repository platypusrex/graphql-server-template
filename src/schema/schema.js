export const typeDefs = `
	type Suggestion {
		id: Int!
		text: String!
		userId: Int!
		boardId: Int!
		createdAt: String!
		updatedAt: String!
		username: String!
	}

	type Board {
		id: Int!
		name: String!
		userId: Int!
		createdAt: String!
		updatedAt: String!
		suggestions: [Suggestion!]
	}

	type User {
		id: Int!
		username: String!
		createdAt: String!
		updatedAt: String!
		boards: [Board!]!
		suggestions: [Suggestion!]!
	}
	
	type Query {
		allUsers: [User!]!
		allBoards: [Board!]!
		allSuggestions: [Suggestion!]!
		getUser(username: String!): User
		userBoards(userId: Int!): [Board!]!
		userSuggestions(userId: Int!): [Suggestion!]!
	}
	
	type Mutation {
		createUser(username: String!): User
		updateUser(username: String!, newUsername: String!): [Int!]!
		deleteUser(username: String!): Int!
		createBoard(userId: Int!, name: String!): Board!
		deleteBoard(id: Int!): Int!
		createSuggestion(userId: Int!, boardId: Int!, text: String!): Suggestion!
		deleteSuggestion(id: Int!): Int!
	}
`;