import {createToken, hashPassword, validatePassword} from "../utils/authUtil";

export default {
	Mutation: {
		// User
		createUser: (parent, args, {models}) => models.User.create(args),
		register: async (parent, user, {models}) => {
			user.password = await hashPassword(user.password);

			return models.User.create(user);
		},
		login: async (parent, {email, password}, {models}) => {
			const user = await models.User.findOne({where: {email}});

			if (!user) {
				throw new Error('User not found');
			}

			const valid = await validatePassword(password, user.password);

			if (!valid) {
				throw new Error('Email or password incorrect');
			}

			const token = createToken(user);

			return token;
		},
		updateUser: (parent, {username, newUsername}, {models}) =>
			models.User.update(
				{ username: newUsername },
				{ where: { username } }
			),
		deleteUser: (parent, args, {models}) => models.User.destroy({where: args}),

		// Board
		createBoard: (parent, args, {models}) => models.Board.create(args),
		deleteBoard: (parent, args, {models}) => models.Board.destroy({where: args}),

		// Suggestion
		createSuggestion: (parent, args, {models}) => models.Suggestion.create(args),
		deleteSuggestion: (parent, args, {models}) => models.Suggestion.destroy(args)
	}
};