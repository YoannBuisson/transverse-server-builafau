import {Student} from "../model/Student";
import {getUserId} from "../utils";

export const typeDefs = `

    type Student {
        _id: ID!
        firstName: String
        lastName: String
        email: String
    }
    
    input StudentInput {
        firstName: String
        lastName: String
        email: String
    }

    extend type Query {
        students: [Student]
    }
    
    extend type Mutation {
        createStudentWithInput(input: StudentInput!): Student
    }
`;

export const resolvers = {
    Query: {
        students: async () => Student.find(),
    },
    Mutation: {
        createStudentWithInput: async (root, {input}, context, info) => {
            return Student.create(input);
        }
    }
};