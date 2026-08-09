export const typeDefs = `
    type Query {
        hello: String
    }
    type User {
        id: ID
        username: String
        elo: Int
    }
    input UserInput {
        username: String
        elo: Int
    }
    type Mutation {
        createUser(user: UserInput): User
    }
`;