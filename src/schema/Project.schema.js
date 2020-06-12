import {Project} from "../model/Project";

export const typeDefs = `

    type Project {
        _id: ID!
        name: String
        creator: [User]
    }

    type ProjectInput {
        name: String
        creator: [User]
    }

    extend type Query {
        getProjects: [Project]
    }
`;


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        getProjects: async () => Project.find(),
    },
    Mutation: {}
};