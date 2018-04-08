export default {
	Mutation: {
		createUser: (parent, args, {User}) => User.create(args),
		updateUser: (parent, {username, newUsername}, {User}) =>
			User.update(
				{ username: newUsername },
				{ where: { username } }
			),
		deleteUser: (parent, args, {User}) => User.destroy({where: args}),
	}
};