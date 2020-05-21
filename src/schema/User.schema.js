import {User} from "../model/User";

export const typeDefs = `

    type User {
        name: String
        surname: String
        dateOfBirth: Int
        friends: [User]
    }
    
    input UserInput {
        name: String
        surname: String
        dateOfBirth: Int
    }

    extend type Query {
        users: [User]
    }
    
    extend type Mutation {
        createUser(input: UserInput!): User
    }
    
`;

const users = [
    {
        name: "Doe",
        surname: "John",
        login: "user1",
        pass: "password1"
    },
    {
        name: "C. Harden",
        surname: "James",
        login: "user2",
        pass: "password2"
    },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        createUser: async (root, {input}, content, info) => {
            return User.create(input);
        }
    }
};