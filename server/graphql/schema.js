import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { MessageMutations } from "./mutations/message.mutations.js";
import { UserMutations } from "./mutations/user.mutations.js";
import { UserQueries } from "./queries/user.queries.js";
import { ChatQueries } from "./queries/chat.queries.js";
import { EmptyMutation, EmptyQuery } from "./queries/message.queries.js";

export const userSchema = new GraphQLSchema({
  query: UserQueries,
  mutation: UserMutations,
});

export const messageSchema = new GraphQLSchema({
  query: EmptyQuery,
  mutation: MessageMutations,
});

export const chatSchema = new GraphQLSchema({
  query: ChatQueries,
  mutation: EmptyMutation,
});
