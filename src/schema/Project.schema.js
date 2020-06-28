import {Project} from "../model/Project";
import {Task} from "../model/Task";
import {Student} from "../model/Student";

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
    }
    
    extend type Mutation {
        createProjectWithInput(_id: ID!, input: ProjectInput!): Project
    }
    
    
    
`;

export const resolvers = {
    Query: {
        projects: async () => Project.find(),
    },
    Mutation: {
        createProjectWithInput: async (root, { _id, input }, context, info) => {
            const project = await Project.create(input);
            const student = await Student.findOneAndUpdate(_id, {
                $push: {
                    projects: project
                }
            });
            student.save();
            return project;
        },
    }
};