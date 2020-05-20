import {ApolloServer, gql} from 'apollo-server';

const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type User {
        name: String
        surname: String
        dateOfBirth: String
        friends: [User]
    }

    type Task {
        name: String
        duration: Int
        priority: Int
        assignee: User
    }

    type Project {
        name: String
        creator: User
        tasks: [Task]
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        users: [User]
        tasks: [Task]
        projects: [Project]
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
const resolvers = {
    Query: {
        users: () => users,
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});