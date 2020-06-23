import {User} from "../model/User";

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {APP_SECRET, getUserId} = require('../utils')

export const typeDefs = `

    type User {
        _id: ID!
        email: String
        password: String
        username: String
    }
    
    input UserInput {
        email: String
        password: String
        username: String
    }

    extend type Query {
        users: [User]
        userSchemaAssert: String
    }
    
    extend type Mutation {
        signUp(input: UserInput!): AuthPayload
        login(username: String!, password: String!): AuthPayload
    }
    
    extend type AuthPayload {
        token: String
        user: User
    }
    
`;

export const resolvers = {
    Query: {
        users: async () => User.find(),
    },
    Mutation: {
        signUp: async (root, {input}, context, info) => {
            const hashedPassword = await bcrypt.hash(input.password, 10)
            const user = await User.create({
                email: input.email,
                username: input.username,
                password: hashedPassword
            })
            const token = jwt.sign({userId: user._id}, APP_SECRET)

            return {
                token,
                user,
            }
        },
        login: async (root, args, context, info) => {
            const user = await User.findOne({username: args.username})
            if (!user) {
                throw new Error('User not found')
            }

            if (!await bcrypt.compareSync(args.password, user.password)) {
                throw new Error('Invalid password')
            }

            const token = jwt.sign({userId: user._id}, APP_SECRET)

            return {
                token,
                user,
            }
        }
    }
};