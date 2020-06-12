import {User} from "../model/User";

export const typeDefs = `

    type User {
        _id: ID!
        firstName: String
        lastName: String
        password: String
        username: String
    }
    
    input UserInput {
        firstName: String
        lastName: String
        password: String
        username: String
    }

    extend type Query {
        users: [User]
        userSchemaAssert: String
    }
    
    extend type Mutation {
        createUserWithInput(input: UserInput!): User
        createUser(firstName: String!, lastName: String!, password: String!, username: String!): User
    }
    
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        users: async () => User.find(),
    },
    Mutation: {
        createUserWithInput: async (root, {input}, content, info) => {
            return User.create(input);
        },
        createUser: async (root, args, context, info) => {
            await User.create(args);
            return true;
        }
    }
};