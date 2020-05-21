export const typeDefs = `

    type User {
        name: String
        surname: String
        dateOfBirth: String
        friends: [User]
    }
    
    type UserInput {
        name: String
        surname: String
        dateOfBirth: String
        friends: [User]
    }

    extend type Query {
        users: [User]
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
    Mutation: {}
};