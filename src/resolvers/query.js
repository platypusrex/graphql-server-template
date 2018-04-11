export default {
	User: {
		boards: (parent, args, {models}) => models.Board.findAll({
			where: {userId: parent.id}
		}),
		suggestions: (parent, args, {models}) => models.Suggestion.findAll({
			where: {userId: parent.id}
		}),
	},
	Board: {
		suggestions: (parent, args, {models}) => modelsSuggestion.findAll({
			where: {boardId: parent.id}
		}),
	},
	Suggestion: {
		username: async (parent, args, {models}) => {
			const user = await models.User.findOne({
				where: {id: parent.userId}
			});

			return user.username;
		}
	},
	Query: {
		allUsers: (parent, args, {models}) => models.User.findAll(),
		allBoards: (parent, args, {models}) => models.Board.findAll(),
		allSuggestions: (parent, args, {models}) => models.Suggestion.findAll(),
		getUser: (parent, args, {models, user}) => {
			if (user) {
				return models.User.findOne({
					where: {
						id: user.id
					}
				})
			}

			return null;
		},
		userBoards: (parent, {userId}, {models}) =>
			models.Board.findAll({
				where: {
					userId
				},
			}),
		userSuggestions: (parent, {userId}, {models}) =>
			models.Suggestion.findAll({
				where: {
					userId
				}
			})
	},
};