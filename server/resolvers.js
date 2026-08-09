import { User } from './models/User.model.js'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!';
        },
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