import {Task} from "../model/Task";
import {Project} from "../model/Project";

export const typeDefs = `

    type Task {
        _id: ID!
        name: String
        duration: Int
        priority: Int
        status: Boolean
        }

    input TaskInput {
        name: String
        duration: Int
        priority: Int
        status: Boolean
    }

    extend type Query {
        tasks: [Task]
    }

    extend type Mutation {
        createTaskWithInput(_id: ID, input: TaskInput!): Task
    }
`;

export const resolvers = {
    Query: {
        tasks: async () => Task.find(),
    },
    Mutation: {
        createTaskWithInput: async (root, {_id, input}, context, info) => {
            var task = await Task.create(input);
            var project = await Project.findByIdAndUpdate(_id,{
                $push: {
                    tasks: task
                }
            })
            project.save();
            return task;
        }
    }
};