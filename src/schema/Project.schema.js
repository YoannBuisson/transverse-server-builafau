import {Project} from "../model/Project";

export const typeDefs = `
    type Project {
        _id: ID!
        name: String
        description: String
        dateOfReturn: Date
        tasks: [Task]
    }

    input ProjectInput {
        name: String
        description: String
        dateOfReturn: Date
    }

    extend type Query {
        projects: [Project]
        projectById(_id: ID!): Project
    }
    
    extend type Mutation {
        createProjectWithInput(input: ProjectInput!): Project
    }
`;

export const resolvers = {
    Query: {
        projects: async () => Project.find(),
        projectById: async (root, {_id}, context, info) => {
            return Project.findOne({_id: _id}).populate('tasks');
        }
    },
    Mutation: {
        createProjectWithInput: async (root, {input}, context, info) => {
            return Project.create(input);
        },
    }
};