import {makeExecutableSchema} from "graphql-tools";
import {merge} from "lodash";

// Entities typedefs and resolvers
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

// General query
const Query = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
    typeDefs: [Query, User, Task, Project],
    resolvers: merge(resolvers, userResolvers, taskResolvers, projectResolvers),
});