export default {
	User: {
		boards: (parent, args, {Board}) => Board.findAll({
			where: {userId: parent.id}
		}),
		suggestions: (parent, args, {Suggestion}) => Suggestion.findAll({
			where: {userId: parent.id}
		}),
	},
	Board: {
		suggestions: (parent, args, {Suggestion}) => Suggestion.findAll({
			where: {boardId: parent.id}
		}),
	},
	Suggestion: {
		username: async (parent, args, {User}) => {
			const user = await User.findOne({
				where: {id: parent.userId}
			});

			return user.username;
		}
	},
	Query: {
		allUsers: (parent, args, {User}) => User.findAll(),
		allBoards: (parent, args, {Board}) => Board.findAll(),
		allSuggestions: (parent, args, {Suggestion}) => Suggestion.findAll(),
		getUser: (parent, {username}, {User}) =>
			User.findOne({
				where: {
					username
				}
			}),
		userBoards: (parent, {userId}, {Board}) =>
			Board.findAll({
				where: {
					userId
				},
			}),
		userSuggestions: (parent, {userId}, {Suggestion}) =>
			Suggestion.findAll({
				where: {
					userId
				}
			})
	},
};