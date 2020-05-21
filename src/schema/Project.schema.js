export const typeDefs = `

    type Project {
        name: String
        creator: [User]
        tasks: [Task]
    }

    type ProjectInput {
        name: String
        creator: [User]
        tasks: [Task]
    }

    extend type Query {
        projects: [Project]
    }
`;


const projects = [
    {
        name: "Project one",
        creator: {
            name: "Doe",
            surname: "John",
            login: "user1",
            pass: "password1"
        },
        tasks: {
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
    },
    {
        name: "Project two",
        creator: {
            name: "C. Harden",
            surname: "James",
            login: "user2",
            pass: "password2"
        },
        tasks: {
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
    },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        projects: () => projects,
    },
    Mutation: {}
};