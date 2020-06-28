import {Student} from "../model/Student";

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
        updateStudent(_id: ID!, input: StudentInput!): Student
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
            // if (!context.userId) {
            //     throw new Error("Impossible d'effectuer cette opération sans être connecté.");
            // }

            return Student.create(input);
        },
        deleteStudent: async (root, {_id}, context, info) => {
            if (!context.userId) {
                throw new Error("Impossible d'effectuer cette opération sans être connecté.");
            }

            return await Student.remove({_id});
        },
        updateStudent: async (root, {_id, input}, context, info) => {
            // if (!context.userId) {
            //     throw new Error("Impossible d'effectuer cette opération sans être connecté.");
            // }

            return await Student.findByIdAndUpdate(_id, input, {new: true});
        }
    }
};