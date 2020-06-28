import {Project} from "../model/Project";

export const typeDefs = `

    type Project {
        _id: ID!
        name: String
        description: String
        tasks: [Task]
    }

    input ProjectInput {
        name: String
        description: String
    }

    extend type Query {
        projects: [Project]
    }
    
    extend type Mutation {
        createProjectWithInput(input: ProjectInput!): Project
      }
`;

export const resolvers = {
    Query: {
        projects: async () => Project.find(),
    },
    Mutation: {
        createProjectWithInput: async (root, { input }, context, info) => {
            return Project.create(input);
        },
    }
};