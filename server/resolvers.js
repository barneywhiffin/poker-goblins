import { User } from './models/User.model.js'

export const resolvers = {
    Query: {
        getUser: (_, args) => {
            return {
                name: args.name,
                elo: args.elo
            };
        },
        getAllUsers: async () => {
            const users = await User.find();
            return users;
        }
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            const { username, elo } = args.user;
            const user = new User({ username, elo });
            await user.save();
            console.log(`User "${user.username}" saved to the database`);
            return user;
        }
    }
};