import {Task} from "../model/Task";

export const typeDefs = `

    type Task {
        _id: ID!
        name: String
        duration: Int
        priority: Int
        status: Boolean
        assignee: User
    }

    type TaskInput {
        name: String
        duration: Int
        priority: Int
        status: Boolean
        assignee: User
    }

    extend type Query {
        tasks: [Task]
    }
`;


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        tasks: async () => Task.find(),
    },
    Mutation: {}
};