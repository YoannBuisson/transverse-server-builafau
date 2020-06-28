import {Student} from "../model/Student";
import {Task} from "../model/Task";
import {Project} from "../model/Project";

export const typeDefs = `
    type Student {
        _id: ID!
        firstName: String
        lastName: String
        birthDate: Date
        email: String
        projects: [Project]
    }
    
    input StudentInput {
        firstName: String
        lastName: String
        birthDate: Date
        email: String
    }

    extend type Query {
        students: [Student]
        studentById(_id: ID!): Student 
    }
    
    extend type Mutation {
        createStudentWithInput(input: StudentInput!): Student
        deleteStudent(_id: ID!): Student
        updateStudent(studentId: ID!, projectId: ID!): Student
    }
`;

export const resolvers = {
    Query: {
        students: async () => Student.find().populate('projects'),
        studentById: async (root, {_id}, context, info) => {
            return Student.findOne({_id :_id}).populate('projects');
        }
    },
    Mutation: {
        createStudentWithInput: async (root, {input}, context, info) => {
            // TODO Authorization

            return Student.create(input);
        },
        deleteStudent: async (root, {_id}, context, info) => {
            // TODO Authorization

            if (!context.userId) {
                throw new Error("Impossible d'effectuer cette opération sans être connecté.");
            }

            return await Student.remove({_id});
        },
        updateStudent: async (parent, args, context, info) => {
            // TODO Authorization

            const project = await Project.findOne({_id: args.projectId});
            const student = await Student.findByIdAndUpdate(args.studentId, {
                $push: {
                    projects: project
                }
            });
            student.save();

            return student;
        }
    }
};