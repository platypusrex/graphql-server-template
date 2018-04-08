export default {
	Query: {
		allUsers: (parent, args, {User}) => User.findAll(),
		getUser: (parent, {username}, {User}) =>
			User.findOne({
				where: {
					username
				}
			})
	},
};