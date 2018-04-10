export default {
	Mutation: {
		// User
		createUser: (parent, args, {User}) => User.create(args),
		updateUser: (parent, {username, newUsername}, {User}) =>
			User.update(
				{ username: newUsername },
				{ where: { username } }
			),
		deleteUser: (parent, args, {User}) => User.destroy({where: args}),

		// Board
		createBoard: (parent, args, {Board}) => Board.create(args),
		deleteBoard: (parent, args, {Board}) => Board.destroy({where: args}),

		// Suggestion
		createSuggestion: (parent, args, {Suggestion}) => Suggestion.create(args),
		deleteSuggestion: (parent, args, {Suggestion}) => Suggestion.destroy(args)
	}
};