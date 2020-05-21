export const typeDefs = `

    type Task {
        name: String
        duration: Int
        priority: Int
        assignee: User
    }

    type TaskInput {
        name: String
        duration: Int
        priority: Int
        assignee: User
    }

    extend type Query {
        tasks: [Task]
    }
`;


const tasks = [
    {
        name: "Task one",
        duration: 5,
        priority: 1,
        assignee: {
            name: "Doe",
            surname: "John",
            login: "user1",
            pass: "password1"
        }
    },
    {
        name: "Task two",
        duration: 3,
        priority: 5,
        assignee: {
            name: "C. Harden",
            surname: "James",
            login: "user2",
            pass: "password2"
        }
    },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        tasks: () => tasks,
    },
    Mutation: {}
};