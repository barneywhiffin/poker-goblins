export const typeDefs = `
    type User {
        id: ID
        username: String
        elo: Int
    }
    type Query {
        getUser(name: String, elo: Int): User
        getAllUsers: [User]
    }
    input UserInput {
        username: String
        elo: Int
    }
    type Mutation {
        createUser(user: UserInput): User
    }
`;