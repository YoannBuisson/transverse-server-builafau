import {makeExecutableSchema} from "graphql-tools";
import {merge} from "lodash";

import {
    typeDefs as User,
    resolvers as userResolvers,
} from './schema/User.schema';
import {
    typeDefs as Task,
    resolvers as taskResolvers,
} from './schema/Task.schema';
import {
    typeDefs as Project,
    resolvers as projectResolvers,
} from './schema/Project.schema';
import {
    typeDefs as Student,
    resolvers as studentResolvers,
} from './schema/Student.schema';

// General query
const Query = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
  
  type AuthPayload {
    _empty: String
   }

  type Subscription {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
    typeDefs: [Query, User, Student, Task, Project],
    resolvers: merge(resolvers, userResolvers, studentResolvers, taskResolvers, projectResolvers),
});